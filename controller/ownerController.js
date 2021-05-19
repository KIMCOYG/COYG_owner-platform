import { Op } from "sequelize";
import models from "../models";
const Shop = models.Shop;
const Event = models.Event;

export const getShopList = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    const result = await Shop.findAll({
      where: { user_id: id },
    });
    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const updateShop = async (req, res, next) => {
  const {
    params: { id },
    body: {
      name,
      tel,
      start_time,
      end_time,
      holiday,
      shop_content,
      zonecode,
      basic_address,
      road_address,
      detail_address,
      latitude,
      longitude,
      category_id,
    },
  } = req;
  try {
    const result = await Shop.update(
      {
        name,
        tel,
        start_time,
        end_time,
        holiday,
        shop_content,
        zonecode,
        basic_address,
        road_address,
        detail_address,
        latitude,
        longitude,
        category_id,
        updated_datetime: Date.now(),
      },
      {
        where: { shop_id: id },
      }
    );
    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getOwnerEventList = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    let shops = await Shop.findAll({
      where: { user_id: id },
      attributes: [["shop_id", "shop_id"]],
      raw: true,
    });
    shops = shops.map((i) => i.shop_id);

    const result = await Event.findAll({
      where: {
        event_id: {
          [Op.or]: shops,
        },
      },
    });
    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
