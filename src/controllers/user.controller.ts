import { Context } from "hono";
import User from "../models/User";

interface Person{
  fname: string;
  lname: string;
  age: number;
}

export const fetchAll = async (c: Context) => {
  const user = await User.find();
  return c.json(user,200);
}

export const fetchOne = async (c: Context) => {
  const { id } = c.req.param();
  const user = await User.findById(id);
  
  if(!user) return c.json({message: "User not found"}, 404);
  
  return c.json(user,200);
}

export const addData = async (c: Context) => {
  const data = await  c.req.json<Person>();

  const user = await User.create(data);

  if(!user) return c.json("Error occured please try again later", 400);

  return c.json(user, 201);
}