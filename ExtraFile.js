const XLSX = require("xlsx");
const path = require("path");
const { chapGPT } = require("./utils/gpt");

async function analyzeCompanyEmissions(companyName) {
  // Load the Excel file
  const workbook = XLSX.readFile(path.join(__dirname, "carbon_emissions.xlsx"));

  // Get the data from the sheet
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(worksheet);

  // Function to filter and return only the top 20 rows based on company name
  function filterRowsByCompany(companyName) {
    const filteredRows = data.filter((row) => row.company_name === companyName);
    return filteredRows.slice(0, 20); // Return only the first 20 rows
  }

  const companyRows = filterRowsByCompany(companyName);

  let prompt = `"I am giving you a record of ${companyName}. Identify any inconsistencies for ${companyName}. Report conflicting details or misalignments between these sources, if any, in a concise manner. Keep the response within 10 lines."\n${JSON.stringify(
    companyRows,
    null,
    2
  )}`;

  //   const prompt = "Hello world";

  let response = await chapGPT(prompt);
  if (!response) {
    console.log("Error generated!!!");
  } else {
    console.log("Response:", response);
  }

  // Return the filtered rows
  return companyRows;
}

// Example: Call the function for a specific company
const companyName = "Tryg A/S"; // Change this to the desired company name
analyzeCompanyEmissions(companyName);
