import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import flash from "connect-flash";
import passport from "passport";
import passportConfig from "./passport/index";
import seq from "./models/index";
const sequelize = seq.sequelize;
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import categoryRouter from "./routers/categoryRouter";
import imageRouter from "./routers/imageRouter";
import userRouter from "./routers/userRouter";
import shopRouter from "./routers/shopRouter";
import likeRouter from "./routers/likeRouter";
import scrapRouter from "./routers/scrapRouter";
import eventRouter from "./routers/eventRouter";


var MySQLStore = require("express-mysql-session")(session);

var options = {
  host: "coyg.cwrvhsz1pk6u.ap-northeast-2.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "whwqkq3!",
  database: "coyg",
};

var sessionStore = new MySQLStore(options);

const PORT = 5000;
const corsOptions = {
  origin: "http://localhost:3000", // 접근 권한 부여 도메인
  credentials: true, //응답 헤더에 access-control-allow credentials 추가
  optionSuccessStatus: 200, //응답상태 200으로 설정
};

const app = express();

sequelize
  .sync()
  .then(() => {
    console.log("mysql success");
  })
  .catch((err) => {
    console.log("mysql error");
  });
passportConfig(passport);

app.use(logger("dev")); //요청 기록
app.use(express.static(path.join(__dirname, "public"))); //정적 파일 저장소, morgan 아래, 다른 미들웨어 위에 위치
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //false면 querystring, trye면 qs module
app.use(cookieParser("secret code"));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    key: "coyg session",
    secret: "secret code",
    store: sessionStore,
    cookie: {
      //store 고려!
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// router
app.use(routes.home, globalRouter);
app.use(routes.category, categoryRouter);
app.use(routes.image, imageRouter);
app.use(routes.user, userRouter);
app.use(routes.shop, shopRouter);
app.use(routes.like, likeRouter);
app.use(routes.scrap, scrapRouter);
app.use(routes.event, eventRouter);

// 에러 처리 핸들러 필요

app.set("port", process.env.PORT || PORT);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중입니다.");
});
