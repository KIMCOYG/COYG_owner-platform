module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "event",
    {
      event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      start_datetime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_datetime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      event_content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      shop_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_datetime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_datetime: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      removed_datetime: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "EVENTS",
    }
  );
};
