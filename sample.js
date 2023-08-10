const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const chapGPT = async (prompt) => {
const response = await openai.createChatCompletion({
model: "gpt-3.5-turbo",
messages: [{ role: "user", content: prompt }],
});
console.log(response["data"]["choices"][0]["message"]["content"]);
};

chapGPT("Hello how are you?")