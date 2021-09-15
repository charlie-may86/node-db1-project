const router = require("express").Router();
const Account = require("./accounts-model");

const {
  checkAccountId,
  checkAccountPayload,
} = require("./accounts-middleware");

router.get("/", (req, res) => {
  Account.getAll()
    .then((accounts) => {
      res.status(200).json(accounts);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", checkAccountId, (req, res, next) => {
  res.json(req.account);
});

router.post("/", checkAccountPayload, (req, res, next) => {
  Account.create(req.body)
    .then((newAccount) => {
      res.status(201).json(newAccount);
    })
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
});

module.exports = router;
