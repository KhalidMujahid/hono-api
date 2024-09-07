import { Hono } from "hono";
import { addData, fetchAll } from "../controllers/user.controller";

const routes = new Hono()

routes.get("/users", fetchAll);

routes.post("/users",addData);

export default routes