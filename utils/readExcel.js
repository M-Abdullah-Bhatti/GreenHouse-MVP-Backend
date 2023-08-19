// const xlsx = require('xlsx');

// function getAllRowsForCompany(fileName, companyName) {
//   const workbook = xlsx.readFile(fileName);
//   const sheetNames = workbook.SheetNames;
//   const allRows = {};

//   sheetNames.forEach(sheetName => {
//     const sheet = workbook.Sheets[sheetName];
//     const rows = xlsx.utils.sheet_to_json(sheet);
//     const filteredRows = rows.filter(row => row.Company === companyName);
//     if (filteredRows.length > 0) {
//       allRows[sheetName] = filteredRows;
//     }
//   });

//   return allRows;
// }

// const targetCompanyName = "JP Morgan";
// const fileName = 'Data Collection.xlsx';

// const result = getAllRowsForCompany(fileName, targetCompanyName);
// console.log(result);

const xlsx = require("xlsx");

const getAllRowsForCompany = (fileName, companyName) => {
  const workbook = xlsx.readFile(fileName);
  const sheetNames = workbook.SheetNames;
  const filteredSheetNames = sheetNames.filter(
    (sheet) => sheet !== "Zero tracker"
  );

  const allRows = {};

  filteredSheetNames.forEach((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    const rows = xlsx.utils.sheet_to_json(sheet);
    const filteredRows = rows.filter((row) => row.Company === companyName);
    if (filteredRows.length > 0) {
      // Remove the "Number" field from each row
      const rowsWithoutNumber = filteredRows.map((row) => {
        const { Number, ...rowWithoutNumber } = row;
        return rowWithoutNumber;
      });

      allRows[sheetName] = rowsWithoutNumber;
    }
  });

  return allRows;
};

const targetCompanyName = "JP Morgan";
const fileName = "Data Collection.xlsx";

module.exports = {
  getAllRowsForCompany,
};
