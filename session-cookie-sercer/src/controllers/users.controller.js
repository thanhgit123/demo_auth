const { getAllUsers } = require("../services/user.services");

async function getUsers(req, res) {
  const users = await getAllUsers();
  res.status(200).json({
    users,
    message: "Ban la admin",
  });
}

module.exports = {
  getUsers,
};
