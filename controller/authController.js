import models from "../models";
const User = models.User;

export const getProfile = (req, res, next) => {
  res.send({
    user: req.user,
  });
};

export const postJoin = (req, res, next) => {
  const { email, password, name, phone, role } = req.body;
  const exUser = User.findOne({ where: { email } });
  // .then()
};
