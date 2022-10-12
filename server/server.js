require("dotenv").config();
const express = require("express");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
const dbconn = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "crowdfunding",
});

app.post("/donate", async (req, res) => {
  const email = req.body.email;
  const phone = req.body.phone;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const address = req.body.address;
  const amount = req.body.amount;
  const amount_in_cents = amount * 100;
  const validRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email == "") {
    res.send({ message: "Email is required" });
  } else if (phone == "") {
    res.send({ message: "Phone is required" });
  } else if (!email.match(validRegex)) {
    res.send({ message: "Pls enter a valid email" });
  } else if (firstname == "") {
    res.send({ message: "First name is required" });
  } else if (lastname == "") {
    res.send({ message: "Lastname is required" });
  } else if (address == "") {
    res.send({ message: "Address is required" });
  } else {
    try {
      const sessions = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Join High Adventure",
              },
              unit_amount: amount_in_cents,
            },
            quantity: 1,
          },
        ],
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/donate`,
      });
      res.json({ url: sessions.url });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }

    dbconn.query(
      "INSERT INTO payment_list (email, phone, firstname, lastname, address, amount) VALUES (?,?,?,?,?,?)",
      [email, phone, firstname, lastname, address, amount],
      (err, result) => {
        console.log(err);
      }
    );
  }
});

app.listen(3001);
