'use strict';
module.exports = (sequelize, DataTypes) => {
  var feed = sequelize.define('feed', {
    userId: DataTypes.INTEGER,
    feedName: DataTypes.STRING,
    feedUrl: DataTypes.STRING,
    folder: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.feed.belongsTo(models.user);
      }
    }
  });
  return feed;
};