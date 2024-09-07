import { Hono } from "hono";
import { addData, fetchAll } from "../controllers/user.controller";

const routes = new Hono()

routes.get("/", fetchAll);

routes.post("/",addData);

export default routes