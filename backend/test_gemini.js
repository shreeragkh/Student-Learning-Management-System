require('dotenv').config();
const apiKey = process.env.GEMINI_API_KEY;

async function testModel(model) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ contents: [{ parts: [{ text: "Hello" }] }] })
  });
  console.log(`${model} Status:`, res.status);
  const text = await res.text();
  console.log(`${model} Response:`, text.substring(0, 100).replace(/\n/g, ' '));
}

async function run() {
  await testModel("gemini-2.5-flash");
  await testModel("gemini-flash-latest");
  await testModel("gemini-2.0-flash-lite-001");
}
run();
