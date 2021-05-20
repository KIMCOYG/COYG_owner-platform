import { ownerShopList } from "./controller/adminController";

const home = "/";

//db rest api

//CRUD
const create = "/create";
const readAll = "/read-all";
const read = "/read/:id";
const update = "/update/:id";
const remove = "/delete/:id";

// model
const category = "/category";
const event = "/event";
const image = "/image";
const like = "/like";
const scrap = "/scrap";
const shop = "/shon";
const user = "/user";

//login, join, profile
const profile = "/profile";
const join = "/owner/join";
const customerJoin = "/customer/join";
const login = "/login";
const logout = "/logout";

//mypage
const cusUpdate = "/mypage/:id/update";
const cusPwUpdate = "/mypage/:id/update/password";
const scrapList = "/scrap/:id/list";

//owner
const owner = "/owner";
const shopList = "/shop/:id/list";
const updateShop = "/shop/:id/update";
const createEvent = "/event/create";
const updateEvent = "/event/:id/update";
const eventList = "/event/:id/list";

//category
const categoryList = "/category/:id/list";

//detail event
const detailEvent = "/event/:id/detail";

// post image
const post = "/post";

const test = "/test";
const img = "/img";
const banner = "/banner";

//admin
const admin = "/admin";
const ownerList = "/owner/list";
const ownerShop = "/owner/:id/shop/list";

const routes = {
  home,
  create,
  readAll,
  read: (id) => {
    if (id) {
      return `/read/${id}`;
    } else {
      return read;
    }
  },
  update: (id) => {
    if (id) {
      return `/update/${id}`;
    } else {
      return update;
    }
  },
  remove: (id) => {
    if (id) {
      return `/delete/${id}`;
    } else {
      return remove;
    }
  },
  category,
  event,
  image,
  like,
  scrap,
  shop,
  user,
  profile,
  join,
  customerJoin,
  login,
  logout,
  cusUpdate: (id) => {
    if (id) {
      return `/mypage/${id}/update`;
    } else {
      return cusUpdate;
    }
  },
  cusPwUpdate: (id) => {
    if (id) {
      return `/mypage/${id}/update/password`;
    } else {
      return cusPwUpdate;
    }
  },
  categoryList: (id) => {
    if (id) {
      return `/category/${id}/list`;
    } else {
      return categoryList;
    }
  },
  detailEvent: (id) => {
    if (id) {
      return `/event/${id}/detail`;
    } else {
      return detailEvent;
    }
  },
  owner,
  shopList: (id) => {
    if (id) {
      return `/shop/${id}/list`;
    } else {
      return shopList;
    }
  },
  updateShop: (id) => {
    if (id) {
      return `/shop/${id}/update`;
    } else {
      return updateShop;
    }
  },
  createEvent,
  updateEvent: (id) => {
    if (id) {
      return `/event/${id}/update`;
    } else {
      return updateEvent;
    }
  },
  eventList: (id) => {
    if (id) {
      return `/event/${id}/list`;
    } else {
      return eventList;
    }
  },
  post,
  scrapList: (id) => {
    if (id) {
      return `/scrap/${id}/list`;
    } else {
      return scrapList;
    }
  },
  img,
  banner,
  admin,
  ownerList,
  ownerShop: (id) => {
    if (id) {
      return `/owner/${id}/shop/list`;
    } else {
      return ownerShopList;
    }
  },
};

export default routes;
