import { Context } from "hono";
import User from "../models/User";

export const fetchAll = async (c: Context) => {
  const user = await User.find();
  return c.json(user,200);
}

export const addData = async (c: Context) => {
  const data = await  c.req.json<Person>();

  const user = await User.create(data);

  if(!user) return c.json("Error occured please try again later", 400);
}