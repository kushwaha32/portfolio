const express = require("express");
const { validationResult, check } = require("express-validator");
const Contact = require("../models/Contact");
const auth = require("../middleware/auth");
const router = express.Router();

//   @route        GET api/contact
//   @desc         Get contacts from db
//   @access       Private

router.get("/", auth, async (req, res) => {
  try {
    const allContact = await Contact.find({}).sort({ date: -1 });
    return res.send(allContact);
  } catch (err) {
    return res.status(500).json({ errors: [{ msg: err }] });
  }
});

//   @route        Post api/contact
//   @desc         Add contacts into db
//   @access       Public

router.post(
  "/",
  [
    check("name", "Please enter your name").not().isEmpty(),
    check("email", "Please Enter your Email").isEmail(),
    check("phoneNo", "Please Enter your contact no").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phoneNo, message } = req.body;

    try {
      const contact = new Contact({
        name,
        email,
        phoneNo,
        message,
      });

      await contact.save();

      return res
        .status(200)
        .json({ msg: "thank You.We will contact you as soon as posible.." });
    } catch (err) {
      res.status(500).json({ errors: [{ msg: err }] });
    }
  }
);

//  @route     DELETE api/contact/:id
//  @desc      delete user messages
//  @access    Private

router.delete("/:id", auth, async (req, res) => {
  const id = req.params.id;

  try {
    // delete contact
    await Contact.findByIdAndRemove(id);
    return res.json({ msg: "Message deleted successfully.." });
  } catch (err) {
      

    return res.status(500).json({ errors: [{ msg: "server Error" }] });
  }
});

module.exports = router;
