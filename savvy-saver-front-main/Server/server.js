const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const router = require('./router.js');
const dbConnection = require('./DB/index.js');

const app = new Koa();
app.use(cors());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 8020;

(async () => app.listen(port, async () => {
  try {
    await dbConnection();
    console.log(`Server running on port http://127.0.0.1:${port} 🛜`);
  } catch (error) {
    console.log(error);
  }
})
)();
