const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Dog, { through: models.Dogscat, foreignKey: 'cat_id' });
    }
  }
  Cat.init(
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      age: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Cat',
    }
  );
  return Cat;
};
