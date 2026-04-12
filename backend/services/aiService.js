function hasUsableApiKey() {
  const key = String(process.env.GEMINI_API_KEY || "").trim();
  if (!key) return false;
  // Ignore placeholder values copied from examples.
  if (key.startsWith("your-") || key.includes("replace-with")) return false;
  return true;
}

async function getEmbedding(text) {
  if (!hasUsableApiKey()) {
    return [];
  }

  try {
    const model = process.env.GEMINI_EMBEDDING_MODEL || "gemini-embedding-001";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:embedContent?key=${process.env.GEMINI_API_KEY}`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000); // 4 second strict timeout for embeddings
    
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: { parts: [{ text }] }
      }),
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (!response.ok) {
      // Fallback to keyword retrieval when embeddings fail.
      return [];
    }

    const data = await response.json();
    return data.embedding?.values || [];
  } catch {
    return [];
  }
}

async function generateChatCompletion({ systemPrompt, userPrompt, temperature = 0.2 }, retries = 3) {
  if (!hasUsableApiKey()) {
    console.error("[AI] No usable Gemini API key configured.");
    throw new Error("AI service is not configured. Please set a valid GEMINI_API_KEY.");
  }

  const model = process.env.GEMINI_CHAT_MODEL || "gemini-2.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 90000); // 90 second timeout for large generation
      
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: [
            { role: "user", parts: [{ text: userPrompt }] }
          ],
          generationConfig: {
            temperature
          }
        }),
        signal: controller.signal
      });
      clearTimeout(timeout);

      if (!response.ok) {
        const errorBody = await response.text().catch(() => "");
        console.error(`[AI] Gemini API error ${response.status}: ${errorBody.slice(0, 300)}`);
        
        // Retry on 429 (Too Many Requests) or 50x server errors
        if ((response.status === 429 || response.status >= 500) && attempt < retries) {
          const delayMs = attempt * 2000;
          console.log(`[AI] API returned ${response.status}. Retrying in ${delayMs}ms (attempt ${attempt} of ${retries})...`);
          await new Promise(resolve => setTimeout(resolve, delayMs));
          continue;
        }

        let errorMessage = `AI service returned an error (${response.status}).`;
        if (response.status === 429) {
          errorMessage += " Too many requests. Please wait a moment and try again.";
        } else if (response.status === 400 || response.status === 403) {
          errorMessage += " The API key may be invalid or expired.";
        } else {
          errorMessage += ` Please try again later.`;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    } catch (err) {
      if (err.message.includes("AI service")) throw err; // re-throw our own errors
      
      console.error("[AI] Network/fetch error:", err.message);
      if (attempt < retries) {
        const delayMs = attempt * 2000;
        console.log(`[AI] Network error. Retrying in ${delayMs}ms (attempt ${attempt} of ${retries})...`);
        await new Promise(resolve => setTimeout(resolve, delayMs));
        continue;
      }
      throw new Error("AI service is temporarily unavailable. Please try again shortly.");
    }
  }
}

module.exports = { hasUsableApiKey, getEmbedding, generateChatCompletion };
