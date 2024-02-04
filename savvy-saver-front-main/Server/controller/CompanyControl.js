const Company = require('../model/Companies');
const { SetDateMaxLimit, transformTimeSeries } = require('./Utility');
const { fetchStockData } = require('./ApiService');

exports.fetchAndUpdateCompanyData = async (ctx) => {
  const companySymbol = ctx.params.symbol;

  try {
    const companyInfo = await Company.findOne({ 'metaData.symbol': companySymbol });

    if (companyInfo) {
      const lastRefreshed = new Date(companyInfo.metaData.lastRefreshed).toISOString().split('T')[0];
      const yesterday = SetDateMaxLimit();
      if (lastRefreshed === yesterday) {
        ctx.status = 200;
        ctx.body = companyInfo;
      } else {
        try {
          const company = await fetchStockData(companySymbol);
          const timeSeriesDailydata = transformTimeSeries(company['Time Series (Daily)']);
          const updatedCompany = await Company.findOneAndUpdate(
            { 'metaData.symbol': companySymbol },
            {
              $set: {
                'metaData.lastRefreshed': new Date(company['Meta Data']['3. Last Refreshed']),
                'timeSeriesDaily': timeSeriesDailydata
              }
            },
            { new: true }
          );
          ctx.status = 200;
          ctx.body = updatedCompany;
        } catch (error) {
          console.error('Error fetching company:API', error);
          ctx.status = 504;
        }
      }
    } else {
      try {
        const company = await fetchStockData(companySymbol);
        const timeSeriesDailydata = transformTimeSeries(company['Time Series (Daily)']);

        const newCompany = new Company({
          metaData: {
            information: company['Meta Data']['1. Information'],
            symbol: company['Meta Data']['2. Symbol'],
            lastRefreshed: company['Meta Data']['3. Last Refreshed'],
            outputSize: company['Meta Data']['4. Output Size'],
            timeZone: company['Meta Data']['5. Time Zone']
          },
          timeSeriesDaily: timeSeriesDailydata

        });
        try {
          const savedCompany = await newCompany.save();
          ctx.status = 201;
          ctx.body = savedCompany;
        } catch (error) {
          console.error('DBError saving company:', error);
          ctx.status = 500;
        }
      } catch (error) {
        console.error('Error fetching company:API', error);
        ctx.status = 504;
      }
    }
  } catch (error) {
    console.error('DBError:', error);
    ctx.status = 500;
  }
}
