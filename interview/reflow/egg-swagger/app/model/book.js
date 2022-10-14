module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('book', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Author: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    MakeSource: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    BookCategoryId: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    Inventory: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    IsDeleted: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    IsSoldOut: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UpdatedDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'book'
  });

  Model.associate = function() {

  }

  return Model;
};