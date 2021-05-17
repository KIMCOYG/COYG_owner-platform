import bcrypt from "bcrypt";
import models from "../models";
const User = models.User;
const Scrap = models.Scrap;
const Event = models.Event;

//customer
export const updateUserData = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    const result = await User.update(
      {
        name: req.body.name,
        phone: req.body.phone,
        updated_datetime: Date.now(),
      },
      {
        where: { user_id: id },
      }
    );
    res.send(result); //실패 시 0, 성공 시 1
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const updateUserPw = async (req, res, next) => {
  const {
    params: { id },
    body: { password },
  } = req;
  try {
    const hash = await bcrypt.hash(password, 12);
    const result = await User.update(
      {
        password: hash,
        updated_datetime: Date.now(),
      },
      {
        where: { user_id: id },
      }
    );
    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const scrapList = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    const scrapList = await Scrap.findAll({
      where: { user_id: id },
      include: [User, Event],
    });
    res.send(scrapList);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
