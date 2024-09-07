import { Schema,model } from "mongoose";

interface User{
  fname: string;
  lname: string;
  age: number;
}

const UserSchema = new Schema<User>({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

const User = model("User", UserSchema);

export default User;