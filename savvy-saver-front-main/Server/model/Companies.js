const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monthlyTimeSeriesSchema = new Schema({
    date: String,
    open: String,
    high: String,
    low: String,
    close: String,
    volume: String
}, { _id: false });


const CompanySchema = new Schema({
    metaData: {
        information: String,
        symbol: String,
        lastRefreshed: Date,
        timeZone: String
    },
    DailyTimeSeries: [monthlyTimeSeriesSchema]
});


const Company = mongoose.models?.Company || mongoose.model('Company', CompanySchema);

module.exports = Company;
