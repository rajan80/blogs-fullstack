import * as express from "express";
import db from "./db";

const router = express.Router();
router.get('/api/blogs', async(req,res)=>{
  try{
  let blogs=await db.blogs.all()
  res.json(blogs);
  }catch(e){
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id?", async (req, res, next) => {
  const id = Number(req.params.id);
  if (id) {
    try {
    } catch (error) {}
  } else {
    try {
      res.send(await db.blogs.all());
    } catch (error) {
      next(error);
    }
  }
});


router.post("/", async (req, res) => {
  try {
    const authorid= parseInt(req.body.authorid);
    const content = req.body.content;

    let dbRes = await db.blogs.post(authorid, content);
    res.send(dbRes);
  } catch (error) {
    console.error(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const authorid = req.params.id;
    const content = req.body.content;

    let dbRes = await db.blogs.put(content, authorid);
    res.send(dbRes);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let authorid = req.params.id;
    const content = req.body.content;

    let dbRes = await db.blogs.destroy(authorid);
    res.send(dbRes);
  } catch (error) {
    console.error(error);
  }
});

export default router;
