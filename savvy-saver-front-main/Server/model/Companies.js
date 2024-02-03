const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    metaData: {
        information: { type: String },
        symbol: { type: String },
        lastRefreshed: { type: Date },
        outputSize: { type: String },
        timeZone: { type: String }
    },
    timeSeriesDaily: {
        type: Map,
        of: new Schema({
            open: { type: String },
            high: { type: String },
            low: { type: String },
            close: { type: String },
            volume: { type: String }
        }, { _id: false })
    }
}, { timestamps: true });


const Company = mongoose.models?.Company || mongoose.model('Company', CompanySchema);

module.exports = Company;
