// 'use strict';

// const fs = require('fs');
// const basename = path.basename(__filename);
const path = require("path");
const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + '/../config/config.json')[env];
const config = require(path.join(__dirname, "..", "config", "config.json"))[
  env
];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Category = require("./category")(sequelize, Sequelize);
db.Event = require("./event")(sequelize, Sequelize);
db.Image = require("./image")(sequelize, Sequelize);
db.Like = require("./like")(sequelize, Sequelize);
db.Scrap = require("./scrap")(sequelize, Sequelize);
db.Shop = require("./shop")(sequelize, Sequelize);
db.User = require("./user")(sequelize, Sequelize);

// Image : Category => 1:1
db.Image.hasOne(db.Category, { foreignKey: "image_id", sourceKey: "image_id" });
db.Category.belongsTo(db.Image, {
  foreignKey: "image_id",
  sourceKey: "image_id",
});

// Event : Image => 1:N
db.Event.hasMany(db.Image, { foreignKey: "image_id", sourceKey: "image_id" });
db.Image.belongsTo(db.Event, { foreignKey: "image_id", targetKey: "image_id" });

// Shop : Event => 1:N
db.Shop.hasMany(db.Event, { foreignKey: "shop_id", sourceKey: "shop_id" });
db.Event.belongsTo(db.Shop, { foreignKey: "shop_id", targetKey: "shop_id" });

//

module.exports = db;

/*let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});*/
