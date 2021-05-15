import models from "../models";
const User = models.User;

// module.exports = (passport) => {
//   passport.serializeUser((user, done) => {
//     done(null, user.user_id);
//   });

//   passport.deserializeUser((id, done) => {
//     User.findOne({ where: { user_id: id } })
//       .then((user) => done(null, user))
//       .catch((err) => done(err));
//   });
// };

export default (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.user_id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({ where: { user_id: id } })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });
};
