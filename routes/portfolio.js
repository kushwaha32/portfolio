const express = require("express");
const { validationResult, check } = require("express-validator");
const auth = require("../middleware/auth");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const Portfolio = require("../models/Portfolio");
const mul = require("../middleware/multer");

  // @route    GET api/portfolio
  // @desc     get all the portfolio
  // @access   public

  router.get("/", async (req, res) => {
        try {
           const portfolio = await Portfolio.find({}).sort({date: -1});
           return res.send(portfolio);
        } catch (err) {
           return res.status(500).json({"error": err});
        }
  });

  // @route    POST api/portfolio
  // @desc     Add portfolio
  // @access   Private
  
  
  router.post("/", auth, mul.upload.single("image"),[
       check("title", "Please enter the title").not().isEmpty()
  ],
    async(req, res) => {
       const errors = validationResult(req);

       if(!errors.isEmpty()){
            return res.status(400).json({ error: errors.array() });
        }
        
        const { title, discription } = req.body;
        let img = "" ;
        if(req.file){
            img = req.file.filename;
        }
          
       
       try {
            let portfolio = new Portfolio({
               title,
               discription,
               img
          })

          await portfolio.save();


          return res.json({"msg": "portfolio created successfully.."});

       } catch (err) {
           console.error(err.message);
           res.status(500).send("Server Error");
       }
       



  })


module.exports = router;