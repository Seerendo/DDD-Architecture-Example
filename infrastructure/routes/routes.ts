import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = __dirname;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const name = cleanFileName(fileName);
  if (name !== "routes") {
    import("./" + name).then((moduleRouter) => {
      console.log("/" + name, moduleRouter.router);
      router.use("/" + name, moduleRouter.subRouter);
    });
  }
});

export { router };