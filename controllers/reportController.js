const ReportModel = require("../model/reportModel");

const sendReportToRegulator = async (req, res) => {
  const { companyName, contradiction, age, priority } = req.body;

  try {
    const existingReports = await ReportModel.find({ companyName });

    if (existingReports.length > 0) {
      return res.status(409).json({ message: "Report already exists" });
    }

    const newReport = await ReportModel.create({
      companyName,
      contradiction,
      age,
      priority,
    });
    newReport.sentToRegulators = true;

    await newReport.save();

    res.status(200).json({ result: newReport });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getReportsSentToRegulators = async (req, res) => {
  try {
    const reports = await ReportModel.find({ sentToRegulators: true });
    console.log(reports);
    res.status(200).json({ results: reports });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Third part api's
const getAllPendingReports = async (req, res) => {
  try {
    const reports = await ReportModel.find({ pending: true });
    if (reports.length === 0) {
      res.status(404).json({ message: "No record found" });
    } else {
      res.status(200).json({ results: reports });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getAllUnderReviewReports = async (req, res) => {
  try {
    const reports = await ReportModel.find({ reviewing: true });
    console.log("===", reports.length);

    if (reports.length === 0) {
      res.status(404).json({ message: "No record found" });
    } else {
      res.status(200).json({ results: reports });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getAllReviewedReports = async (req, res) => {
  try {
    const reports = await ReportModel.find({ reviewed: true });
    if (reports.length === 0) {
      res.status(404).json({ message: "No record found" });
    } else {
      res.status(200).json({ results: reports });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
const getDetailsOfSingleReport = async (req, res) => {
  try {
    const { company } = req.query;
    if (!company) {
      res.status(404).json({ message: "Required company name to get details" });
    }
    const reports = await ReportModel.find({ companyName: company });
    if (reports.length === 0) {
      res.status(404).json({ message: "No record found" });
    } else {
      console.log("hello");
      res.status(200).json({ results: reports });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const changeStatusToReview = async (req, res) => {
  try {
    const { company } = req.body;

    if (!company) {
      return res
        .status(400)
        .json({ message: "Company name is required to get details" });
    }

    const reports = await ReportModel.find({ companyName: company });

    if (reports.length === 0) {
      return res.status(404).json({ message: "No record found" });
    }

    // Assuming req.body contains the updated data
    const updatedReport = await ReportModel.findOneAndUpdate(
      { companyName: company },
      req.body,
      { new: true } // To return the updated document
    );

    res.status(200).json({ results: updatedReport });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const assignCase = async (req, res) => {
  try {
    const { company } = req.body;

    if (!company) {
      return res
        .status(400)
        .json({ message: "Company name is required to get details" });
    }

    const reports = await ReportModel.find({ companyName: company });

    if (reports.length === 0) {
      return res.status(404).json({ message: "No record found" });
    }

    // Assuming req.body contains the updated data
    const updatedReport = await ReportModel.findOneAndUpdate(
      { companyName: company },
      req.body,
      { new: true } // To return the updated document
    );

    res.status(200).json({ results: updatedReport });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const closeCase = async (req, res) => {
  try {
    const { company } = req.body;

    if (!company) {
      return res
        .status(400)
        .json({ message: "Company name is required to get details" });
    }

    const reports = await ReportModel.find({ companyName: company });

    if (reports.length === 0) {
      return res.status(404).json({ message: "No record found" });
    }

    // Assuming req.body contains the updated data
    const updatedReport = await ReportModel.findOneAndUpdate(
      { companyName: company },
      req.body,
      { new: true } // To return the updated document
    );

    res.status(200).json({ results: updatedReport });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const updateCase = async (req, res) => {
  try {
    const { company } = req.body;

    if (!company) {
      return res
        .status(400)
        .json({ message: "Company name is required to get details" });
    }

    const reports = await ReportModel.find({ companyName: company });

    if (reports.length === 0) {
      return res.status(404).json({ message: "No record found" });
    }

    // Assuming req.body contains the updated data
    const updatedReport = await ReportModel.findOneAndUpdate(
      { companyName: company },
      req.body,
      { new: true } // To return the updated document
    );

    res.status(200).json({ results: updatedReport });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  sendReportToRegulator,
  getReportsSentToRegulators,
  getAllPendingReports,
  getDetailsOfSingleReport,
  getAllUnderReviewReports,
  getAllReviewedReports,
  changeStatusToReview,
  assignCase,
  closeCase,
  updateCase,
};
