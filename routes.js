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
};

export default routes;
