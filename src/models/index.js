const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
const basename = path.basename(module.filename);
const db = {};

let sequelize = new Sequelize('cinema', 'postgres', 'raf171', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});

fs
  .readdirSync(__dirname)
  .filter((file) =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach((file) => {
      console.log(file)
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;