import { Query } from "./index";
import * as express from "express";

const all = () => Query("SELECT * FROM blogs");
const one = (id: number) => Query("select from blogs where id=?", [id]);
const post = (authorid: any, content: string) =>
  Query(`INSERT INTO blogs (authorid, content) VALUE (?, ?)`, [authorid, content]);
const put = (content: string, authorid: any) =>
  Query(`update blogs set content= ? where blogs.id = ?`,[content,authorid]);

  const destroy= (authorid:string)=>{
      Query(`DELETE FROM blogs
      WHERE blogs.id=? `,[authorid]);
  }
  
  let router = express.Router();

  

export default {
  all,
  one,
  post,
  put,
  destroy
};