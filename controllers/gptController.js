const { Configuration, OpenAIApi } = require("openai");

// const openai = new OpenAIApi(
//   new Configuration({
//     apiKey: "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",
//   })
// );

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

module.exports.gptResponse = async (req, res, next) => {
  try {
    // const { prompt } = req.body;
    const prompt = "hello how are you";

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "prompt" }],
    });

    if (!response) {
      console.log("Here");
      return res.status(500).json({ message: "Internal Server Error" });
    } else {
      console.log("Here2");

      res
        .status(200)
        .json({
          response: response["data"]["choices"][0]["message"]["content"],
        });
    }
  } catch (error) {
    console.log("Here3");

    return res.status(200).json({ message: error });
  }
};
