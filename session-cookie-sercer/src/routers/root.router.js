const authRouter = require("./auth.router");
const { userRouter } = require("./users.route");

const rootRouter = (app) => {
  authRouter(app), userRouter(app);
};

module.exports = rootRouter;
