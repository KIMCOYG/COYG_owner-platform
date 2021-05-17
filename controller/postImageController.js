import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import models from "../models";
const Image = models.User;

export const mkFolder = async (req, res, next) => {
  try {
    const result = await fs.readdir("uploads", (err, files) => {
      if (err) {
        console.log("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
        fs.mkdirSync("uploads");
      }
      console.log(files);
      next();
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getTest = async (req, res, next) => {
  res.send({ message: "asfdsf" });
};

export const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

export const imgDefine = (req, res, next) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` });
  next();
};
