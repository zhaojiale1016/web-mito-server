const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const { router } = require("./router/index");
const app = new Koa();

app
  .use(bodyParser())
  .use(router.routes());
module.exports = {
  app,
};
