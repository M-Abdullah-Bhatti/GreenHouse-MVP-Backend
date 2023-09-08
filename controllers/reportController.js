const ReportModel = require("../model/reportModel");

const sendReportToRegulator = async (req, res) => {
  const { companyName } = req.body;
  console.log("body " + companyName);

  try {
    const existingReports = await ReportModel.find({ companyName });
    console.log("existingReports " + existingReports);

    if (existingReports.length > 0) {
      return res.status(409).json({ message: "Report already exists" });
    }

    const newReport = await ReportModel.create({ companyName });
    newReport.sentToRegulators = true;

   await  newReport.save()

    res.status(200).json({ result: newReport });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};



const getReportsSentToRegulators = async (req, res) => {
  try {
    const reports = await ReportModel.find({ sentToRegulators: true });
    console.log(reports)
    res.status(200).json({ results: reports });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  sendReportToRegulator,
  getReportsSentToRegulators
};
