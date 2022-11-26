import { Schema, model, Document, Model } from "mongoose";
export interface UserDoc {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date | number;
  password: string | undefined;
}
const UserSchema = new Schema<UserDoc>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    match: [/.+\@.+\..+/, "Porfavor ingrese un email valido"],
    required: true,
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
}, {
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.password;
      delete ret.__v;
    }
  }
});

export interface UserBaseDocument extends UserDoc, Document {
  autenticar(password: string): boolean;
}

interface UserModel extends Model<UserBaseDocument> {}

export default model<UserBaseDocument, UserModel>("User", UserSchema);