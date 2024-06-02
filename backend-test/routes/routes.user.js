import { Router } from "express";
import { verifyjwt } from "../middleware/auth.middleware.js";
import { getAll , get , login ,  logout , remove , register} from "../controller/controller.user.js";

const userrouter = Router();

userrouter.post("/adduser",register)
userrouter.get("/getuser",verifyjwt,get)
userrouter.get("/getallusers",verifyjwt,getAll)


userrouter.delete("/deleteuser/:id",remove)
userrouter.post("/login",login)
userrouter.get("/logout",verifyjwt,logout)


export default userrouter;