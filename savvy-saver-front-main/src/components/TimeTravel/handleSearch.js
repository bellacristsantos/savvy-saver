const fs = require('fs');


function handleSearch(search) {
  const dataFilePath = __dirname + '/companyList.json';
  const companyList = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
  const searchResults = companyList.filter((company) => company.symbol.includes(search));
  const companylist = searchResults.map((company) => {
    return {
      symbol: company.symbol,
      name: company.name,
    };
  });
  return companylist;
}


module.exports = handleSearch;
