const Company = require('../model/Companies');

exports.UpdateCompany = async (ctx) => {
  const companySymbol = ctx.params.symbol;
  const updateData = ctx.request.body;

  try {
    const updatedCompany = await Company.findOneAndUpdate(
      { 'metaData.symbol': companySymbol },
      { $set: updateData },
      { new: true } // return the updated document
    );

    if (updatedCompany) {
      ctx.status = 200;
      ctx.body = updatedCompany;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'Company not found' };
    }
  } catch (error) {
    console.error('Error updating company:', error);
    ctx.status = 500;
    ctx.body = { message: 'Internal Server Error' };
  } ctx.status = 500;
};

exports.getCompanyData = async (ctx) => {
  try {
    const companySymbol = ctx.params.name;
    const companyInfo = await Company.findOne({ 'metaData.symbol':  companySymbol });

    if (companyInfo) {
      ctx.body = companyInfo;
    } else {
      ctx.status = 404;
      ctx.body = { message: 'Company not found' };
    }
  } catch (error) {
    console.error('Error fetching company:', error);
    ctx.status = 500;
    ctx.body = { message: 'Internal Server Error' };
  }
};

exports.CreateCompany = async (ctx) => {
  const newCompany = new Company(ctx.request.body);

  try {
    const savedCompany = await newCompany.save();
    ctx.status = 201;
    ctx.body = savedCompany;
  }
  catch (error) {
    console.error('Error creating company:', error);
    ctx.status = 500;
    ctx.body = { message: 'Internal Server Error' };
  }
};
