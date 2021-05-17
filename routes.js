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
const shop = "/shop";
const user = "/user";

//auth
const profile = "/profile";
const join = "/join";
const login = "/login";

//mypage
const cusUpdate = "/mypage/:id/update";
const cusPwUpdate = "/mypage/:id/update/password";

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

const test = "/test";

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
  login,
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
};

export default routes;
