import { Schema, model, Document, Model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true as Boolean,
    required: "El nombre es requerido",
  },
  email: {
    type: String,
    trim: true as Boolean,
    unique: "Email ya existe",
    match: [/.+\@.+\..+/, "Porfavor ingrese un email valido"],
    required: "El email es requerido",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
  password: {
    type: String,
    required: "El password es requerido",
  },
});

UserSchema.methods = {
  autenticar: function (password: string) {
    console.log({password})
    return true;
  }
};

export interface User {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date | number;
  password: string | undefined;
}

export interface UserBaseDocument extends User, Document {
  autenticar(password: string): boolean;
}

interface UserModel extends Model<UserBaseDocument> {}

export default model<UserBaseDocument, UserModel>("User", UserSchema);
