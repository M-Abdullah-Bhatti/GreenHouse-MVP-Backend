const xlsx = require('xlsx');

// Load the Excel file
const workbook = xlsx.readFile('Data Collection.xlsx');

// Function to extract rows from a sheet based on a company name
function getRowsForCompany(sheetName, companyName) {
  const sheet = workbook.Sheets[sheetName];
  const rows = xlsx.utils.sheet_to_json(sheet);
  const filteredRows = rows.filter(row => row.Company === companyName);
  return filteredRows;
}

// Company name to filter for
const targetCompanyName = "JP Morgan";

// Get and print rows from each sheet for the specified company
const sheetNames = workbook.SheetNames;
sheetNames.forEach(sheetName => {
  const rowsForCompany = getRowsForCompany(sheetName, targetCompanyName);
  if (rowsForCompany.length > 0) {
    console.log(`Sheet: ${sheetName}`);
    console.log(rowsForCompany);
    console.log('\n');
  }
});
