const CompanyApi = require('./controller/CompanyControl.js');
const Router = require('koa-router');
const router = new Router();

router.get('/company/:name', CompanyApi.getCompanyData);
router.post('/company/:symbol', CompanyApi.UpdateCompany);

module.exports = router;
