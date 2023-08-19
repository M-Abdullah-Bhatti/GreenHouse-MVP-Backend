const { chapGPT } = require("../utils/gpt");
const { getAllRowsForCompany } = require("../utils/readExcel");

module.exports.gptResponse = async (req, res, next) => {
  try {
    const { targetCompanyName } = req.body;
    let fileName = "Data Collection.xlsx";

    let rowsOfCompany = getAllRowsForCompany(fileName, targetCompanyName);

    if (Object.keys(rowsOfCompany).length === 0) {
      return res.status(400).json({ message: "No record found" });
    }

    let prompt = `Please analyze the provided data for company "${targetCompanyName}" across different sheets (InsigAI, Twitter, and Carbon offsets) and identify any contradictions or inconsistencies between the information provided. You can mention any conflicting mismatched details, or information that doesn't align across these sources. If there are any discrepancies, please highlight them.
    ${JSON.stringify(
      rowsOfCompany,
      null,
      2
    )}
    `;


    let response = await chapGPT(prompt);
    if (!response) {
      console.log("response: ", response);
      return res.status(400).json({ message: "error" });
    } else {
      console.log("===", response);
      res.status(200).json({
        success: true,
        response: response,
      });
    }
  } catch (error) {
    console.log("catch error");

    return res.status(500).json({ message: error.message });
  }
};
