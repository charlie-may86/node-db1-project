const db = require("../../data/db-config");

const accounts = "accounts";

const getAll = () => {
  return db.select().from(accounts);
};

const getById = (id) => {
  return db(accounts).where("id", id).first();
};

// const create = (newAccount) => {
//   return db(accounts)
//     .insert(newAccount)
//     .then(([id]) => get(id));
// };

async function create({ name, budget }) {
  const [id] = await db(accounts).insert({ name, budget });
  const newAccount = await getById(id);
  return newAccount;
}

const updateById = (id, account) => {
  return db(accounts).where("id", id).update(account);
};

const deleteById = (id) => {
  // DO YOUR MAGIC
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
