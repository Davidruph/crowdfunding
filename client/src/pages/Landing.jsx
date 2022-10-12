import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/high-quality-logo.png";
import "../App.css";
import Background from "../img/banner-image.png";
import lock from "../img/padlock-icon.png";
import paypal from "../img/paypal.jpg";
import visa from "../img/visa.png";
import mastercard from "../img/mastercard.png";
import amexpress from "../img/amexpress.png";
import image1 from "../img/image-2.png";
import image2 from "../img/image-3.png";
import image3 from "../img/image-4.png";
import image4 from "../img/image-1.png";
import email from "../img/email.png";
import audio from "../img/Recording 158Compress.mp3";
//import $ from "jquery";
import visualizer from "../img/visualizer.jpg";

function Landing() {
  // $(document).on("click touch", ".container", function () {
  //   let audio1 = new Audio();
  //   audio1.src = audio;
  //   audio1.crossOrigin = "anonymous";
  //   const audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // for safari browser

  //   const canvas = document.getElementById("canvas");
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;

  //   const ctx = canvas.getContext("2d");

  //   let audioSource = null;
  //   let analyser = null;

  //   audio1.play();
  //   audioSource = audioCtx.createMediaElementSource(audio1); // creates an audio node from the audio source
  //   analyser = audioCtx.createAnalyser(); // creates an audio node for analysing the audio data for time and frequency
  //   audioSource.connect(analyser); // connects the audio source to the analyser. Now this analyser can explore and analyse the audio data for time and frequency
  //   analyser.connect(audioCtx.destination); // connects the analyser to the destination. This is the speakers
  //   analyser.fftSize = 128; // controls the size of the FFT. The FFT is a fast fourier transform. Basically the number of sound samples. Will be used to draw bars in the canvas
  //   const bufferLength = analyser.frequencyBinCount; // the number of data values that dictate the number of bars in the canvas. Always exactly one half of the fft size
  //   const dataArray = new Uint8Array(bufferLength); // coverting to unsigned 8-bit integer array format because that's the format we need

  //   const barWidth = canvas.width / 2 / bufferLength; // the width of each bar in the canvas

  //   let x = 0; // used to draw the bars one after another. This will get increased by the width of one bar

  //   function animate() {
  //     x = 0;
  //     ctx.clearRect(0, 0, canvas.width, canvas.height); // clears the canvas
  //     analyser.getByteFrequencyData(dataArray); // copies the frequency data into the dataArray in place. Each item contains a number between 0 and 255
  //     drawVisualizer({ bufferLength, dataArray, barWidth });
  //     requestAnimationFrame(animate); // calls the animate function again. This method is built in
  //   }

  //   const drawVisualizer = ({ bufferLength, dataArray, barWidth }) => {
  //     let barHeight;
  //     for (let i = 0; i < bufferLength; i++) {
  //       barHeight = dataArray[i]; // the height of the bar is the dataArray value. Larger sounds will have a higher value and produce a taller bar
  //       const red = (i * barHeight) / 10;
  //       const green = i * 4;
  //       const blue = barHeight / 4 - 12;
  //       ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
  //       ctx.fillRect(
  //         canvas.width / 2 - x, // this will start the bars at the center of the canvas and move from right to left
  //         canvas.height - barHeight,
  //         barWidth,
  //         barHeight
  //       ); // draws the bar. the reason we're calculating Y weird here is because the canvas starts at the top left corner. So we need to start at the bottom left corner and draw the bars from there
  //       x += barWidth; // increases the x value by the width of the bar
  //     }

  //     for (let i = 0; i < bufferLength; i++) {
  //       barHeight = dataArray[i]; // the height of the bar is the dataArray value. Larger sounds will have a higher value and produce a taller bar
  //       const red = (i * barHeight) / 10;
  //       const green = i * 4;
  //       const blue = barHeight / 4 - 12;
  //       ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
  //       ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight); // this will continue moving from left to right
  //       x += barWidth; // increases the x value by the width of the bar
  //     }
  //   };

  //   animate();
  // });
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${Background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-lg-7 pt-3">
              <img
                src={logo}
                alt="logo"
                className="img-fluid"
                width="100"
                height="100"
              />
              <h1 className="display-3 mb-5 text-white">
                CHARLES MACKENZIE <br /> IS A SURVIVOR
              </h1>
              <Link
                to={"./donate"}
                className="first-card-text text-dark fw-bold py-3 first-btn btn btn-warning border-0 btn-lg"
              >
                Donate Now <i className="fa fa-heart px-2"></i>
              </Link>
            </div>
            <div className="col-lg-5 pt-5 justify-content-end">
              <div className="card w-auto">
                <div className="card-body px-4">
                  <h6 className="card-title first-card-title text-right mb-4 font-weight-bold pt-2">
                    <strong>Join High Adventure - Donation</strong>
                  </h6>
                  <hr className="small-hr mb-1" />
                  <p className="card-text first-card-text">
                    Live stronger with natural health & bolster immunity,
                    <br /> fight the 'rise of the medical tyrants', <br />
                    <strong>
                      Join High Adventure and help bring them to justice.
                    </strong>
                  </p>
                  <h6 className="fw-bold mb-4 first-card-text">
                    You can donate via:
                  </h6>
                  <div className="d-flex  mb-4 first-card-text">
                    <img
                      src={paypal}
                      alt=""
                      width="60"
                      height="10"
                      className="img-fluid me-1"
                    />

                    <img
                      src={visa}
                      alt=""
                      width="60"
                      height="10"
                      className="img-fluid me-1"
                    />
                    <img
                      src={mastercard}
                      alt=""
                      width="60"
                      height="10"
                      className="img-fluid me-1"
                    />
                    <img
                      src={amexpress}
                      alt=""
                      width="60"
                      height="10"
                      className="img-fluid"
                    />
                  </div>
                  <div className="d-flex mb-4 first-card-text d-none">
                    <button className="btn btn-outline-dark w-50 me-3 first-card-text">
                      $50
                    </button>
                    <button className="btn btn-outline-dark w-50 me-3 first-card-text">
                      $100
                    </button>
                    <button className="btn btn-outline-dark w-50 first-card-text">
                      $150
                    </button>
                  </div>
                  <div className="mb-3">
                    <div className="input-group pb-3 d-none">
                      <input
                        type="text"
                        className="form-control form-control-lg first-card-text shadow-none"
                        placeholder="Enter Amount"
                        aria-label="Enter Amount"
                        aria-describedby="basic-addon2"
                        style={{ borderRight: "0px" }}
                      />
                      <span
                        className="input-group-text bg-white"
                        id="basic-addon2"
                      >
                        <img
                          src={lock}
                          alt="lock"
                          width="32"
                          className="img-fluid"
                        />
                      </span>
                    </div>

                    <p className="first-card-text card-text pt-2">
                      Thank you for your supportand helping me fund this podcast
                      and joinhighadventure.com.au
                    </p>
                    <Link
                      to={"./donate"}
                      className="first-card-text second-section-text fw-bold btn btn-dark w-100 py-2 btn-lg"
                    >
                      Donate Now <i className="fa fa-heart px-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /> <br />
        </div>
      </section>

      <section className="second-section">
        <div className="container">
          <div className="row justify-content-center">
            <h1 className="display-4 pt-5 text-left second-section-text mb-5">
              CHARLES MACKENZIE IS A SURVIVOR, FIGHTER AND <br /> HEALTH CARE
              ADVOCATE.
            </h1>
            <p className="text-justify text-white">
              Charles Mackenzie is a survivor, fighter and advocate. He has
              dedicated the last 30 years fighting for justice for tens of
              thousands of Australians who fell victim to Australian's deadliest
              medical scandal and biggest ever coverup: <br />
              <span className="second-section-text">
                HIV & Hepc contaminated blood trnsfusions and treatments.
              </span>
            </p>
            <p className="mt-3 text-justify text-white">
              But now Charles' life and campaign for the truth is threatened due
              to his rapidly failing health. He need your help in supporting a
              podcast to allow him to continue the fight and achieve his
              mission.
            </p>

            <h1 className="display-4 pt-4 text-left second-section-text mb-3">
              HOW THE SCANDAL BEGAN...
            </h1>
            <p className="text-justify text-white mb-4">
              As a kid growing up in sydney, Charles was prescribed a medication
              for some pimples that made him suffer an adverse reaction leaving
              him with the same disease as the 'boy in the plastic bubble'. He
              choose to treat what already felt like a 'rollercoaster' of a life
              like the Enid Blyton children's adventures he loved.
            </p>
            <p className="text-justify text-white mb-4">
              His fledgling detective work led to exposes and investigations
              that forced several inquiries inti Australia's healthcare system.
              Notably the Australian government inquiry "Expert Advisory Group
              on Hepatitis C and Plasma in 1990" ['Barraclough Inquiry' 2003]
              and a 2004 Senate inquiry into contaminated blood{" "}
              <span className="second-section-text">
                (Hepatitis C and the Australian blood supply in Australia)
              </span>{" "}
              which has been described as the worst public health disaster in
              Australian history.
            </p>

            <p className="text-justify text-white mb-4">
              <span className="second-section-text">
                Charles MacKenzie's campaigning over the decades has been widely
                featured in the mainstream media including;
              </span>{" "}
              <strong>
                ABC Lateline, The 7.30 Report, ABC Radio AM, ABC, The World
                Today, The Law Report; Radio 2GB, Today Tonight, Sunday Night;
                Channel 9 Sunday, Today Show, A Current Affair, Today: Channel
                10 News at Five, SBS World News, ABC TV News, The Sydney Morning
                Herald, The Age, Herald Sun, The Australian, The Press New
                Zealand, The Kansas City and The British Medical Journal.
              </strong>
            </p>
            <p className="text-justify text-white mb-4">
              But{" "}
              <span className="second-section-text">Charles MacKenzie's</span>{" "}
              life of fighting medical tyranny is now at a crossroads.
            </p>
            <p className="text-justify text-white mb-4">
              Will he ultimately survive the worlds worst medical scandal
              tainted blood which he dedicated his life to exposing{" "}
              <span className="second-section-text">?</span>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <div className="row justify-content-center align-items-center pt-4 pb-4">
            <div className="col-lg-7">
              <ul className="lh-lg">
                <li>Are you like Charles ?</li>
                <li>
                  Do you have an aversion to pharmaceutical medications and jabs
                  ?
                </li>
                <li>Do you have a chronic condition ?</li>
                <li>Do you have fibromyalgia too ?</li>
                <li>Do you have insomnia ?</li>
                <li>Do you have a breathing disorder ?</li>
                <li>Do you suffer from nausea ?</li>
                <li>Acid reflux ?</li>
                <li>Motor function problems ?</li>
                <li>Heart disease ?</li>
                <li>Skin problems ?</li>
                <li>Arthritis ?</li>
                <li>Chronic pain ?</li>
                <li>Neurological conditions ?</li>
                <li>Or a virus like Hepatitis C ?</li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div
                className="card shadow"
                style={{
                  backgroundImage: `url(${visualizer})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="card-body text-center align-items-center">
                  {/* <canvas id="canvas" className="w-100 h-100 pb-4"></canvas> */}
                  {/* <i
                    className="fa fa-play-circle fa-4x pointer container"
                    style={{ cursor: "pointer" }}
                  ></i> */}
                  <audio controls id="audio" className="border-0">
                    <source src={audio} />
                  </audio>
                </div>
              </div>
            </div>
          </div>
          <p className="text-justify mb-4 lh-lg">
            If the answer is <strong>"yes"</strong> then you should know that
            medical research has shown that natural medicine and medicinal
            cannabis could treat and even cure many chronic conditions, even
            potentially Charles' Hepatitis C infection whilst at the same time
            helping alleviate the Post Traumatic Stress Disorder (PTSD) that he
            and so many other tainted blood victims have been left with.
          </p>
          <p className="text-justify mb-4">
            Can you help him cure his Hepatitis C so he can go on campaigning by
            supporting and tuning in to his podcast ?
          </p>
          <p className="text-justify pb-5">
            <strong className="h5 fw-bold">Join High Adventure</strong> and
            learn what Charles hopes to achieve, to be able to doctor oneself
            and unleash the survivor within!
          </p>
        </div>
      </section>

      <section className="second-section">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <h3 className="text-center text-white fw-bold mt-5">
              Here are some recent stories
            </h3>
            <hr className="small-hr" />

            <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
              <div className="col">
                <div className="card h-100 border-0">
                  <img src={image1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title fw-bold pb-3">
                      Inquiry hears how a Sydney schoolboy was given blood from
                      a heroin addict
                    </h5>
                    <p className="card-text pb-4">
                      <a
                        href={
                          "https://www.smh.com.au/national/inquiry-hears-how-a-sydney-schoolboy-was-given-blood-from-a-heroin-addict-20220105-p59m4o.html"
                        }
                      >
                        {" "}
                        <small className="text-secondary">
                          https://www.smh.com.au/national/inquiry-hears-how-a-sydney-schoolboy-was-given-blood-from-a-heroin-addict-20220105-p59m4o.html
                        </small>
                      </a>
                    </p>
                    <p className="card-text mb-2">
                      <Link
                        to={"./donate"}
                        className="first-card-text second-section-text fw-bold btn btn-dark w-100 py-2 btn-lg"
                      >
                        Donate Now <i className="fa fa-heart px-2"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 border-0">
                  <img src={image2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title fw-bold pb-3">
                      'Children have dies': Britain to probe Australia's
                      infected blood scandal
                    </h5>
                    <p className="card-text pb-4">
                      <a
                        href={
                          "https://www.smh.com.au/national/children-have-died-britain-to-probe-australia-s-infected-blood-scandal-20200727-p55fyl.html"
                        }
                      >
                        <small className="text-secondary">
                          https://www.smh.com.au/national/children-have-died-britain-to-probe-australia-s-infected-blood-scandal-20200727-p55fyl.html
                        </small>
                      </a>
                    </p>

                    <p className="card-text mb-2">
                      <Link
                        to={"./donate"}
                        className="first-card-text second-section-text fw-bold btn btn-dark w-100 py-2 btn-lg"
                      >
                        Donate Now <i className="fa fa-heart px-2"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 border-0">
                  <img src={image3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title fw-bold pb-3">
                      UK inquiry examines whether Australian contaminated <br />{" "}
                      blood scandal caused harm overseas
                    </h5>
                    <p className="card-text pb-4">
                      <a
                        href={
                          "https://www.abc.net.au/radionational/programs/breakfast/uk-inquiry-examines-contaminated-blood-scandal/12505686"
                        }
                      >
                        <small className="text-secondary">
                          https://www.abc.net.au/radionational/programs/breakfast/uk-inquiry-examines-contaminated-blood-scandal/12505686
                        </small>
                      </a>
                    </p>

                    <p className="card-text mb-2">
                      <Link
                        to={"./donate"}
                        className="first-card-text second-section-text fw-bold btn btn-dark w-100 py-2 btn-lg"
                      >
                        Donate Now <i className="fa fa-heart px-2"></i>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container">
          <div className="row justify-content-center align-items-center g-5 pt-5 pb-5">
            <div className="col-lg-5">
              <div className="card w-auto">
                <div className="card-body px-4">
                  <h6 className="card-title first-card-title text-right mb-4 font-weight-bold pt-2">
                    <strong>Join High Adventure - Donation</strong>
                  </h6>
                  <hr className="small-hr mb-1" />
                  <p className="card-text first-card-text">
                    Live stronger with natural health & bolster immunity,
                    <br /> fight the 'rise of the medical tyrants', <br />
                    <strong>
                      Join High Adventure and help bring them to justice.
                    </strong>
                  </p>
                  <h6 className="fw-bold mb-4 first-card-text">
                    You can donate via:
                  </h6>
                  <div className="d-flex  mb-4 first-card-text">
                    <img
                      src={paypal}
                      alt=""
                      width="60"
                      height="10"
                      className="img-fluid me-1"
                    />

                    <img
                      src={visa}
                      alt=""
                      width="60"
                      height="10"
                      className="img-fluid me-1"
                    />
                    <img
                      src={mastercard}
                      alt=""
                      width="60"
                      height="10"
                      className="img-fluid me-1"
                    />
                    <img
                      src={amexpress}
                      alt=""
                      width="60"
                      height="10"
                      className="img-fluid"
                    />
                  </div>
                  <div className="d-flex mb-4 first-card-text d-none">
                    <button className="btn btn-outline-dark w-50 me-3 first-card-text">
                      $50
                    </button>
                    <button className="btn btn-outline-dark w-50 me-3 first-card-text">
                      $100
                    </button>
                    <button className="btn btn-outline-dark w-50 first-card-text">
                      $150
                    </button>
                  </div>
                  <div className="mb-3">
                    <div className="input-group pb-3 d-none">
                      <input
                        type="text"
                        className="form-control form-control-lg first-card-text shadow-none"
                        placeholder="Enter Amount"
                        aria-label="Enter Amount"
                        aria-describedby="basic-addon2"
                        style={{ borderRight: "0px" }}
                      />
                      <span
                        className="input-group-text bg-white"
                        id="basic-addon2"
                      >
                        <img
                          src={lock}
                          alt="lock"
                          width="32"
                          className="img-fluid"
                        />
                      </span>
                    </div>

                    <p className="first-card-text card-text pt-2">
                      Thank you for your supportand helping me fund this podcast
                      and joinhighadventure.com.au
                    </p>
                    <Link
                      to={"./donate"}
                      className="first-card-text second-section-text fw-bold btn btn-dark w-100 py-2 btn-lg"
                    >
                      Donate Now <i className="fa fa-heart px-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card border-0 pt-2">
                <img src={image4} className="card-img-top" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer second-section">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-3">
              <img src={logo} alt="" className="img-fluid" width="200" />
            </div>
            <div className="col-lg-8">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <img
                    src={email}
                    alt="email icon"
                    className="img-fluid"
                    width="50"
                    height="25"
                  />
                </span>
                <input
                  type="text"
                  className="form-control shadow-none form-control-lg first-card-text"
                  placeholder="Enter Email"
                  style={{ borderRight: "0px", borderLeft: "0px" }}
                />
                <span className="input-group-text bg-white">
                  <button className="btn btn-lg btn-dark">
                    <small>
                      SUBSCRIBE NOW{" "}
                      <i className="fas fa-long-arrow-alt-right ms-2"></i>
                    </small>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="row pt-4 justify-content-center text-center">
            <div className="col-lg-6">
              <p className="text-white float-lg-start">
                <small> All Right Reserved by Join High Adventure</small>
              </p>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-center float-lg-end">
                <Link to={"./donate"} className="text-white me-">
                  <small>Privacy Policy</small>
                </Link>
                <span className="text-white px-2">|</span>
                <Link to={"./donate"} className="text-white">
                  <small>Terms of Service</small>
                </Link>
                <span className="text-white px-2">|</span>
                <Link to={"./donate"} className="text-white">
                  <small>Do Not Sell My Info</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
