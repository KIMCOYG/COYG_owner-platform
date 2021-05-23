import { Op } from "sequelize";
import models from "../models";
const Category = models.Category;
const Image = models.Image;
const Event = models.Event;
const Shop = models.Shop;
const Like = models.Like;

export const hello = (req, res, next) => {
  res.send("sfsdfsdf");
  next();
};

export const HomeBanner = async (req, res, next) => {
  //현재 날짜, 위치, 이벤트 정보 비교 후 이미지 가져오기
  try {
    const events = await Event.findAll({
      limit: 4,
      include: Image,
    });
    res.send(events);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// 홈 화면 카테고리 이미지 조회
export const getCategoryImage = async (req, res, next) => {
  try {
    const result = await Category.findAll({ include: Image });
    if (result) {
      res.send(result);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// 카테고리 리스트 정보 조회
export const getCategoryList = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    // const result = await Event.findAll({
    //   where: { category_id: id },
    //   order: [["likes_count", "DESC"]],
    //   raw: true,
    // });
    // res.send(result);
    let shops = await Shop.findAll({
      where: { category_id: id },
      attributes: [["shop_id", "shop_id"]],
      raw: true,
    });
    shops = shops.map((i) => i.shop_id);

    const result = await Event.findAll({
      where: {
        shop_id: {
          [Op.or]: shops,
        },
      },
      include: Image,
      order: [["likes_count", "DESC"]],
      raw: true,
    });
    res.send({ result });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// 이벤트 상세 조회
export const getDetailEvent = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    const result = await Event.findOne({
      where: { event_id: id },
      include: [Image, Shop],
      raw: true,
    });
    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getLikeList = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    if (!id) {
      res.send({ notFound: 1 });
    }
    let likes = await Like.findAll({
      where: { user_id: id },
      attributes: [["event_id", "event_id"]],
      raw: true,
    });
    likes = likes.map((i) => i.event_id);

    const result = await Event.findAll({
      where: {
        event_id: {
          [Op.or]: likes,
        },
      },
      include: Image,
      order: [["likes_count", "DESC"]],
    });

    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
