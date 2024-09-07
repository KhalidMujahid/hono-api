import { Hono } from 'hono'
import routes from './routes/route';
import connectDB from "./configs/database";

const app = new Hono().basePath("/api");

connectDB();

app.route("/", routes);

export default app

