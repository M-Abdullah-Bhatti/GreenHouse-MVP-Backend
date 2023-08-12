const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv").config();
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const chapGPT = async (prompt) => {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  console.log(response["data"]["choices"][0]["message"]["content"]);
  return response["data"]["choices"][0]["message"]["content"];
};


module.exports = { chapGPT };
