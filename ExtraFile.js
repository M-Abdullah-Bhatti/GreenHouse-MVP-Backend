const XLSX = require("xlsx");
const path = require("path");
const { chapGPT } = require("./utils/gpt");

async function analyzeCompanyEmissions(companyName, fileName) {
  // Load the Excel file
  const workbook = XLSX.readFile(path.join(__dirname, fileName));

  // Get the data from the sheet
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(worksheet);

  // Function to filter and return only the top 20 rows based on company name
  function filterRowsByCompany(companyName) {
    const filteredRows = data.filter((row) => row.company_name === companyName);
    return filteredRows.slice(0, 20); // Return only the first 20 rows
  }

  const companyRows = filterRowsByCompany(companyName);

  // Return the filtered rows
  return companyRows;
}

// // Example: Call the function for a specific company
// const companyName = "Tryg A/S"; // Change this to the desired company name
// analyzeCompanyEmissions(companyName);

module.exports = {
  analyzeCompanyEmissions,
};
