import models from "../models";
const Category = models.Category;
const Image = models.Image;

export const hello = (req, res, next) => {
  res.send("sfsdfsdf");
  next();
};

export const HomeBanner = (req, res, next) => {
  //현재 날짜, 위치, 이벤트 정보 비교 후 이미지 가져오기
};

//카테고리 리스트 조회
export const getCategoryList = async (req, res, next) => {
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
