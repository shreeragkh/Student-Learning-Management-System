require('dotenv').config();
const apiKey = process.env.GEMINI_API_KEY;

async function run() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.models) {
    const chatModels = data.models.filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent"));
    console.log("Chat Models:");
    chatModels.forEach(m => console.log(m.name));
  } else {
    console.log("Error:", data);
  }
}
run();
