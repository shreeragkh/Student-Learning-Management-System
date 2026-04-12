require('dotenv').config();
const { getEmbedding, generateChatCompletion } = require('./services/aiService');

async function run() {
  try {
    const res = await generateChatCompletion({
      systemPrompt: "You are an expert",
      userPrompt: "Generate a 10 question quiz based on this content: " + "A".repeat(12000)
    });
    console.log("Success");
  } catch (err) {
    console.error("Error:", err.message);
  }
}
run();
