import { Hono } from "hono";
import { addData, fetchAll, fetchOne } from "../controllers/user.controller";

const routes = new Hono()

routes.get("/users", fetchAll);

routes.post("/users",addData);

routes.get("/users/:id",fetchOne);

export default routes