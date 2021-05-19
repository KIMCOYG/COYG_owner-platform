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

export const getOwnerEvent = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    const result = await Event.findAll({ where: { user_id: id } });
    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
