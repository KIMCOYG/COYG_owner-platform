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
//customer
const cusUpdate = "/mypage/customer/:id/update";
const cusPwUpdate = "/mypage/customer/:id/update/password";

//category
const categoryList = "/category/:id/list";

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
      return `/mypage/customer/${id}/update`;
    } else {
      return cusUpdate;
    }
  },
  cusPwUpdate: (id) => {
    if (id) {
      return `/mypage/customer/${id}/update/password`;
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
  test,
};

export default routes;
