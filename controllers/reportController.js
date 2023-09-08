const  ReportModel = require("../model/reportModel")


const sendReportToRegulator = async (req, res) => {
  const { companyName } = req.body;


  try {
    const report = await ReportModel.findOne({ companyName });
    console.log(report)

    if (!report) {
      return res.status(404).json({ message: "Report doesn't exist" });
    }

    const updatedReportStatus = report.sentToRegulators = true

   


    res.status(200).json({ result: report, updatedReportStatus:updatedReportStatus });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};



module.exports={
    sendReportToRegulator
}