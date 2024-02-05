const fs = require('fs');
const path = require('path');

function csvToJson() {
  const csvFilePath = path.join(__dirname, 'listing_status.csv');

  function CompanyArray(csvFilePath) {
    const csv = fs.readFileSync(csvFilePath, 'utf8');
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    const result = [];

    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentline = lines[i].split(',');
      if (currentline[3] === 'Stock' && currentline[2] === 'NYSE') {
        for (let j = 0; j < headers.length; j++) {
          if (['symbol', 'name', 'exchange', 'assetType'].includes(headers[j])) {
            obj[headers[j]] = currentline[j];
          }
        }
        result.push(obj);
      }
    }
    return result;
  }

  const companyArray = CompanyArray(csvFilePath);
  return companyArray;
}


function CreateCompanyListjson() {
  const companyList = csvToJson();
  fs.writeFileSync(path.join(__dirname, 'companyList.json'), JSON.stringify(companyList),
    (err) => {
      if (err) {
        console.log('Error writing file:', err);
      }
    });
}

CreateCompanyListjson();
