require('dotenv').config();
const apiKey = process.env.GEMINI_API_KEY;

async function testEmbedding() {
  const model = "gemini-embedding-001";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:embedContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ content: { parts: [{ text: "Hello" }] } })
  });
  console.log(`${model} Status:`, res.status);
  const text = await res.text();
  console.log(`${model} Response:`, text.substring(0, 200).replace(/\n/g, ' '));
}

async function run() {
  await testEmbedding();
}
run();
