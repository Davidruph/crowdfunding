import React from "react";
import logo from "../img/high-quality-logo.png";
import "../form.css";
import image4 from "../img/image-1.png";
import $ from "jquery";
import "jquery.easing";
import { useState, useRef, useEffect } from "react";
import image from "../img/in many ways the highest adventure on earth. Norman Cousins.png";
import Axios from "axios";

function Forms() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    fields: ["address_components", "geometry", "icon", "name"],
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
  });

  var current_fs, next_fs, previous_fs; //fieldsets
  //var left, opacity, scale; //fieldset properties which we will animate
  //var animating; //flag to prevent quick multi-click glitches

  $(document).on("click touch", ".first", function () {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email) {
      $("#email_error").html("Email is required");
    } else if (!email.match(validRegex)) {
      $("#email_error").html("Enter a valid email");
    } else if (!phone) {
      $("#phone_error").html("Phone is required");
    } else if (!firstname) {
      $("#firstname_error").html("First name is required");
    } else if (!lastname) {
      $("#lastname_error").html("Last name is required");
    } else {
      $("#email_error").html("");
      $("#phone_error").html("");
      $("#firstname_error").html("");
      $("#lastname_error").html("");

      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      //activate next step on progressbar using the index of next_fs
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      //show the next fieldset
      next_fs.show();
      current_fs.hide();
    }
  });
  $(document).on("click touch", ".second", function () {
    if (!address) {
      $("#address_error").html("Address is required");
    } else {
      $("#address_error").html("");
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
      //activate next step on progressbar using the index of next_fs
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      //show the next fieldset
      var ad = document.getElementById("address").value;
      var holder = document.getElementById("ad_holder");
      holder.innerHTML = ad;
      next_fs.show();
      current_fs.hide();
    }
  });
  $(document).on("click touch", ".third", function () {
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    //show the next fieldset

    next_fs.show();
    current_fs.hide();
  });

  $(document).on("click touch", ".previous-first", function () {
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    //de-activate current step on progressbar
    $("#progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");
    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.hide();
  });

  $(document).on("click touch", ".previous-second", function () {
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    //de-activate current step on progressbar
    $("#progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");
    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.hide();
  });
  $(document).on("click touch", ".previous-third", function () {
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    //de-activate current step on progressbar
    $("#progressbar li")
      .eq($("fieldset").index(current_fs))
      .removeClass("active");
    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.hide();
  });
  const pay = (e) => {
    e.preventDefault();
    var fulladdress = document.getElementById("address").value;
    setAddress(fulladdress);
    Axios.post("http://localhost:3001/donate", {
      email: email,
      phone: phone,
      firstname: firstname,
      lastname: lastname,
      address: fulladdress,
      amount: amount,
    }).then((res) => {
      if (res.ok) return res.json();
      window.location = res.data.url;
    });
  };

  return (
    <>
      <section className="second-section">
        <div className="container-fluid">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 pt-3">
              <img
                src={logo}
                alt="logo"
                className="img-fluid"
                width="100"
                height="100"
              />
              <h4 className="second-section-text fw-bold mb-5">
                Kindly fill out this form.
              </h4>

              {/* step form starts here */}

              <form id="msform">
                <ul id="progressbar">
                  <li className="active second-section-text">Your Details</li>
                  <li className="second-section-text">Billing Address</li>
                  <li className="second-section-text">Summary</li>
                  <li className="second-section-text">Payment</li>
                </ul>
                <fieldset className="parent">
                  <div className="row mb-3 pt-3">
                    <div className="col">
                      <label
                        htmlFor="Email"
                        className="float-start second-section-text"
                      >
                        <small className="">Email*</small>
                      </label>
                      <input
                        type="email"
                        required
                        className="bg-transparent text-white"
                        name="email"
                        id="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <p
                        className="text-white text-start mb-1"
                        style={{ fontSize: "11px" }}
                      >
                        Your receipt will be emailed to this address
                      </p>
                      <p className="text-start">
                        <small id="email_error" className="text-danger"></small>
                      </p>
                    </div>
                    <div className="col">
                      <label htmlFor="Phone" className="float-start">
                        <small className="second-section-text">Phone</small>
                      </label>
                      <input
                        type="tel"
                        required
                        className="bg-transparent text-white"
                        name="phone"
                        id="phone"
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                      <p className="text-start">
                        <small id="phone_error" className="text-danger"></small>
                      </p>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col">
                      <label htmlFor="firstname" className="float-start">
                        <small className="second-section-text">
                          First Name*
                        </small>
                      </label>
                      <input
                        type="text"
                        required
                        className="bg-transparent text-white"
                        name="firstname"
                        id="firstname"
                        onChange={(e) => {
                          setFirstname(e.target.value);
                        }}
                      />
                      <p className="text-start">
                        <small
                          id="firstname_error"
                          className="text-danger"
                        ></small>
                      </p>
                    </div>
                    <div className="col">
                      <label htmlFor="lastname" className="float-start">
                        <small className="second-section-text">
                          Last Name*
                        </small>
                      </label>
                      <input
                        type="text"
                        required
                        className="bg-transparent text-white"
                        name="lastname"
                        id="lastname"
                        onChange={(e) => {
                          setLastname(e.target.value);
                        }}
                      />
                      <p className="text-start">
                        <small
                          id="lastname_error"
                          className="text-danger"
                        ></small>
                      </p>
                    </div>
                  </div>
                  {
                    (email,
                    phone,
                    firstname,
                    lastname ? (
                      <input
                        type="button"
                        name="next"
                        className="first action-button text-dark float-end"
                        value="Continue"
                      />
                    ) : null)
                  }

                  <br />
                  <br />
                  <p className="pt-5 text-light">
                    Live stronger with natural health & bolster immunity, fight
                    the 'rise of the medical tyrants', <br />
                    <strong>
                      Join High Adventure and help bring them to justice.
                    </strong>
                  </p>
                </fieldset>
                <fieldset className="parent">
                  <div className="mb-5 p-3">
                    <div className="col">
                      <label htmlFor="firstname" className="float-start">
                        <small className="second-section-text">Address*</small>
                      </label>
                      <input
                        type="text"
                        required
                        ref={inputRef}
                        id="address"
                        name="address"
                        autoComplete="on"
                        className="bg-transparent text-white"
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />{" "}
                      <p className="text-start">
                        <small
                          id="address_error"
                          className="text-danger"
                        ></small>
                      </p>
                    </div>
                  </div>
                  {address ? (
                    <input
                      type="button"
                      name="next"
                      className="second action-button float-end"
                      value="Continue"
                    />
                  ) : null}{" "}
                  <input
                    type="button"
                    name="previous"
                    className="previous-first action-button second-section-text border bg-transparent border-light float-end"
                    value="Back"
                  />
                  <br />
                  <br />
                  <p className="pt-5 text-light">
                    Live stronger with natural health & bolster immunity, fight
                    the 'rise of the medical tyrants', <br />
                    <strong>
                      Join High Adventure and help bring them to justice.
                    </strong>
                  </p>
                </fieldset>
                <fieldset className="parent">
                  <div className="row mb-5 pt-4 justify-content-center align-items-center">
                    <div className="col">
                      <div className="card h-100 bg-transparent border">
                        <div className="card-body text-start lh-1">
                          <p className="card-title second-section-text mb-3 fw-bold">
                            Thanks {firstname} Almost Done!
                          </p>
                          <p className="card-text text-white fs-6 mb-5 d-none">
                            <small className="fw-bold">
                              Your Details{" "}
                              <span className="text-decoration-underline second-section-text">
                                Edits
                              </span>
                            </small>
                          </p>
                          <p className="card-text text-white fw-bold mb-5">
                            Here's your data summary below
                          </p>
                          <p className="card-text text-white">
                            Full Name: {firstname + " " + lastname}
                          </p>
                          <p className="card-text text-white">Email: {email}</p>
                          <p className="card-text text-white">Phone: {phone}</p>
                          <p className="card-text text-white">
                            Address: <span id="ad_holder"></span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card bg-transparent ">
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body text-start lh-1 d-none">
                          <p className="fs-6 text-white">
                            Recurring donation to
                          </p>
                          <p className="fs-6 second-section-text">
                            Regular Donation
                          </p>
                          <p className="fs-6 text-light">
                            $50 every weeks equals $299 anually
                          </p>
                          <hr className="text-white border border-1" />
                          <p className="fs-6 pt-3 text-white">
                            Recurring amount: $50
                          </p>
                          <p className="fs-6 text-white">every 4 weeks</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <input
                    type="button"
                    name="next"
                    className="third action-button float-end"
                    value="Continue"
                  />
                  <input
                    type="button"
                    name="previous"
                    className="previous-second action-button second-section-text border bg-transparent border-light float-end"
                    value="Back"
                  />

                  <br />
                  <br />
                  <p className="pt-5 text-light">
                    Live stronger with natural health & bolster immunity, fight
                    the 'rise of the medical tyrants', <br />
                    <strong>
                      Join High Adventure and help bring them to justice.
                    </strong>
                  </p>
                </fieldset>
                <fieldset className="parent">
                  <div className="row mb-5 pt-4">
                    <div className="col">
                      <div className="card h-100 bg-transparent border">
                        <div className="card-body text-start lh-1">
                          <div className="col pt-4">
                            <label
                              htmlFor="firstname"
                              className="float-start mb-1"
                            >
                              <small className="second-section-text">
                                Select amount in (USD)*
                              </small>
                            </label>
                            <select
                              name="amount"
                              id="amount"
                              onChange={(e) => {
                                setAmount(e.target.value);
                              }}
                              className="bg-dark text-white border form-select form-select-lg fs-6"
                            >
                              <option value="">select amount</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                              <option value="150">150</option>
                              <option value="200">200</option>
                              <option value="200">300</option>
                              <option value="200">400</option>
                              <option value="200">500</option>
                            </select>
                            <p className="text-start">
                              <small
                                id="amount_error"
                                className="text-danger"
                              ></small>
                            </p>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card h-100 bg-transparent border-0">
                        <img src={image4} className="card-img-top" alt="..." />
                      </div>
                    </div>
                  </div>
                  {amount ? (
                    <input
                      type="button"
                      onClick={pay}
                      name="submit"
                      className="submit action-button float-end"
                      value="Pay"
                    />
                  ) : null}{" "}
                  <input
                    type="button"
                    name="previous"
                    className="previous-third action-button second-section-text border bg-transparent border-light float-end"
                    value="Back"
                  />
                  <br />
                  <br />
                  <p className="pt-5 text-light">
                    Live stronger with natural health & bolster immunity, fight
                    the 'rise of the medical tyrants', <br />
                    <strong>
                      Join High Adventure and help bring them to justice.
                    </strong>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Forms;
