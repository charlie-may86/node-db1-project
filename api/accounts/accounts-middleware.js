const Accounts = require("../accounts/accounts-model");

function checkAccountPayload(req, res, next) {
  // const { name, budget } = req.body;
  const name = req.body.name;
  const budget = req.body.budget;
  if (!name || !budget) {
    res.status(400).json({ message: "missing required field" });
  } else {
    next();
  }
}

function checkAccountNameUnique(req, res, next) {
  // const {name} = req.body;
}

function checkAccountId(req, res, next) {
  const id = req.params.id;

  Accounts.getById(id).then((account) => {
    if (account) {
      req.account = account;
      next();
    } else {
      res.status(404).json({ message: "account not found" });
    }
  });
}

module.exports = {
  checkAccountId,
  checkAccountNameUnique,
  checkAccountPayload,
};
