import bcrypt from "bcrypt";
import models from "../models";
const User = models.User;

export const getProfile = (req, res, next) => {
  res.send({
    user: req.user,
  });
};

export const postJoin = async (req, res, next) => {
  const { email, password, name, phone, role } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      req.flash("joinError", "이미 가입된 이메일입니다.");
      return res.send({ message: "가입된 이메일입니다." });
    }
    const hash = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hash,
      name,
      phone,
      role,
      enabled: true,
    });
    return res.send({ result, message: hash });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
