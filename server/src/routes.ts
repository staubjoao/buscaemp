import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  return res.send("Helloasdasdasd Word!");
});

export default routes;
