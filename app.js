const {
  Sequelize: { Op },
  User, Post,
  sequelize,
} = require('./db/models');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const main = async () => {
  // найти всех пользователей и их посты
  const allUsers = await User.findAll({
    include: [{ model: Post}],
  });

  console.log(allUsers.map((user)=> user.name + ' have posts: ' + user.Posts.map((post)=> post.body)));
 
  let d1 = new Date(2021, 6, 23);
  let d2 = new Date(2021, 6, 21);
  console.log(d1);
  let users = await User.findAll({
    attributes: ['name', 'email'],
    where: {
      createdAt: {
        [Op.between]: [d2, d1],
      },
    },
    raw: true,
  });
  console.log({users});
};


main();
