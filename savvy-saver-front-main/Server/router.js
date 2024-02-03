const CompanyApi = require('./controller/CompanyControl.js');
const Router = require('koa-router');
const router = new Router();

router.get('/company/:symbol', CompanyApi.fetchAndUpdateCompanyData);


module.exports = router;
