module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('bookcategory', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    IsDeleted: {
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
    tableName: 'bookcategory'
  });

  Model.associate = function() {

  }

  return Model;
};