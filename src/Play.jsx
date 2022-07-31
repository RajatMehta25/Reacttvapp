import React, { useState, useEffect, useRef } from "react";
import Blink from "./Blink";
import Videos from "./Videos";
import Navbar from "./Navbar";
import "./index.css";
import "./App.css";
import "./Navbar.css";
import "./Play.css";
import "./Blink.css";
import { IconButton } from "@mui/material";
import { Mic } from "@material-ui/icons";
import Swal from "sweetalert2";
import Poster from "./video/poster.mp4";
import instalogo from "./images.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MD5 from "crypto-js/md5";
import axios from "axios";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Play = () => {
  var settings = {
    autoplay: true,
    arrows: true,
    accessibility: true,
    draggable: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [search2, searchresult] = useState("");
  const box = useRef(null);
  const Inputevent = (event) => {
    const sata = event.target.value;
    const qr = sata.toLowerCase();
    searchresult(qr);
  };
  const commands = [
    {
      command: "clear",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
    {
      command: "light mode",
      callback: () => {
        document.getElementById("root").style.backgroundColor = "white";

        document.querySelector(".namee__word").style.textShadow =
          "0 0 20px #fff, 0 0 30px #000000, 0 0 40px #000000, 0 0 50px #000000, 0 0 60px #000000, 0 0 70px #000000, 0 0 80px #000000";
        document.querySelector(".material-icons").style.color = "black";
        searchresult(" ");
      },
    },
    {
      command: "dark mode",
      callback: () => {
        document.getElementById("root").style.backgroundColor = "black";
        document.querySelector(".material-icons").style.color = "white";
        document.querySelector(".namee__word").style.textShadow =
          "0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6";
        searchresult(" ");
      },
    },
    {
      command: ["colours", "colours hd", "colorstv"],
      callback: (command) => searchresult("colors"),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true,
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);

  const Inputevent2 = () => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Browser is not Support Speech Recognition.");
    }
    const handleListing = () => {
      //   setIsListening(true);

      SpeechRecognition.startListening({
        continuous: false,
        language: "en-IN",
        interimTranscript: true,
        // setTimeout:1000
      });
    };

    isListening ? setIsListening(false) : handleListing();
  };
  useEffect(() => {
    const sr = transcript.toLocaleLowerCase();
    searchresult(sr);
  }, [transcript]);

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const loadingele = (entries, observer) => {
      // const [entry]=entries;
      console.log(entries);
    };

    let observer = new IntersectionObserver(loadingele, options);
    if (box.current) observer.observe(box.current);

    return () => {
      if (box.current) observer.unobserve(box.current);
    };
  }, [box]);

  useEffect(() => {
    // alert("Refresh The Page Once if not working");
    // Swal.fire('ENJOY !','','success');
  }, []);

  function ncard(val, index) {
    return (
      <>
        <Blink
          // ref={box}
          title={val.title}
          src={val.src}
          poster={val.post}
          key={index}
        />
      </>
    );
  }

  function zcard(val, index) {
    if (val !== null) {
      const lower = val.title === (null || undefined) ? "" : val.title;
      const q = lower === "" ? "" : lower.toLowerCase();

      const x = q.includes(search2);

      if (x) {
        return (
          <>
            <Blink
              // title={val.title}
              src={val.src}
              poster={val.post}
              key={index}
            />
          </>
        );
      }
    }
  }

  var jctBase = "cutibeau2ic";

  let ssoToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWUiOiI0NWU1OTMzMC1mZmQ4LTRjNmMtOTk4NS1mZTg5ZjIyMjMyZWIiLCJ1c2VyVHlwZSI6IlJJTHBlcnNvbiIsImF1dGhMZXZlbCI6IjQwIiwiZGV2aWNlSWQiOiJjNDMyMTNhOGMzYjljNTAxYzI4MDY1NjRiYzNkNjlhNDkwY2IwZDdiOTM0MzI4MDQ5Mzk1MTU0Mzk3NmViOTM2ZDcxNmZmZTMwYmNjM2UxOWU1MTMzZjNiNTg1MjNiNGY3OGU0YWMxYjFhYzc4MTVjNTNjMTE5MDBkYTM0ZTEwZCIsImp0aSI6IjZiMDQwNDdlLTk4OTgtNDkzOC04M2ZjLTJmMGNiMjBjYzkwYSIsImlhdCI6MTYyMjEyNDkzNn0.VGU9LzWWshG2RAKm6jnAG0CUil7NvkZlWa04jJR8koU";

  // var Settlement = [];
  // Settlement.base64_encode = function (text) {
  //   // Tested in chrome browser
  //   return window.btoa(unescape(encodeURIComponent(text)));
  // };
  // Settlement.time = function () {
  //   return Math.floor(new Date().getTime() / 1000);
  // };
  // console.log(Settlement.time());
  // console.log(Settlement.base64_encode("test"));
  function tokformat(str) {
    str = btoa(MD5(str).toString());
    let a = str.replace("\n", "");
    let b = a.replace("\r", "");
    let c = b.replace("/", "_");
    let d = c.replace("+", "-");
    let e = d.replace("=", "");
    return e;
  }

  function generateJct(st, pxe) {
    // let jct = jctBase + "." + st + "." + pxe;
    // return jct;

    let a = tokformat(jctBase + st + pxe);
    let b = a.trim();
    return a;
  }
  function generatePxe() {
    const d = new Date();
    return d.getTime() + 6000000;
  }
  function generateSt() {
    var ssoToken;
    return tokformat(ssoToken);
  }
  function generateToken() {
    var st = generateSt();
    var pxe = generatePxe();
    var jct = generateJct(st, pxe);
    return "?jct=" + jct + "&pxe=" + pxe + "&st=" + st;
  }

  console.log(generateToken());

  // stream

  let p = generateToken();

  let key = "Colors_HD.m3u8";

  if (key != "") {
    let opts = {
      headers: {
        UserAgent: "plaYtv/5.8.1 (Linux;Android 9) ExoPlayerLib/2.8.0\r\n",
        lbcookie: "300\r\n",
        devicetype: " Kodi\r\n",
        os: "android\r\n",
        appkey: " NzNiMDhlYzQyNjJm\r\n",
        deviceId: " 2f5f4c6443fe0800\r\n",
        versionCode: " 226\r\n",
        osVersion: "9\r\n",
        isott: " true\r\n",
        languageId: "6\r\n",
        uniqueId: "45e59330-ffd8-4c6c-9985-fe89f22232eb\r\n",
        srno: "200206173037\r\n",
        usergroup: " tvYR7NSNn7rymo3F\r\n",
        channelid: "472\r\n",
        ssotoken:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWUiOiI0NWU1OTMzMC1mZmQ4LTRjNmMtOTk4NS1mZTg5ZjIyMjMyZWIiLCJ1c2VyVHlwZSI6IlJJTHBlcnNvbiIsImF1dGhMZXZlbCI6IjQwIiwiZGV2aWNlSWQiOiJjNDMyMTNhOGMzYjljNTAxYzI4MDY1NjRiYzNkNjlhNDkwY2IwZDdiOTM0MzI4MDQ5Mzk1MTU0Mzk3NmViOTM2ZDcxNmZmZTMwYmNjM2UxOWU1MTMzZjNiNTg1MjNiNGY3OGU0YWMxYjFhYzc4MTVjNTNjMTE5MDBkYTM0ZTEwZCIsImp0aSI6IjZiMDQwNDdlLTk4OTgtNDkzOC04M2ZjLTJmMGNiMjBjYzkwYSIsImlhdCI6MTYyMjEyNDkzNn0.VGU9LzWWshG2RAKm6jnAG0CUil7NvkZlWa04jJR8koU\r\n",
      },
    };

    // let cache = key.replace("/", "_");

    // if (!file_exists(cache)) {
    // let context = stream_context_create(opts);
    let data = axios.get(
      `https://tv.media.jio.com/streams_live/${key}${p}`,
      opts
    );
    let opts2 = {
      headers: {
        "User-Agent":
          "plaYtv/5.3.2 (Linux;Android 5.1.1) ExoPlayerLib/2.3.0\r\n",
      },
    };
    let data2 = axios.get(
      `https://jiotvweb.cdn.jio.com/jiotv.live.cdn.jio.com/Colors_HD/Colors_HD_250.m3u8${p}`
    );
    console.log(data2);
    console.log(data);
    // } else {
    // let haystack = axios.get(cache);
    console.log(data);
  }

  const getstream = async () => {
    let opts2 = {
      headers: {
        "User-Agent":
          "plaYtv/5.3.2 (Linux;Android 5.1.1) ExoPlayerLib/2.3.0\r\n",
      },
    };
    const response = await axios.get(
      `https://jiotvweb.cdn.jio.com/jiotv.live.cdn.jio.com/Colors_HD/Colors_HD_250.m3u8`,

      {
        responseType: "stream",
      }
    );
    console.log(response);

    const stream = response.data;
    stream.on("data", (data) => {
      data = data.toString();
      console.log(data);
    });
  };
  getstream();

  let ts = "Colors_HD.ts";
  if (ts != "") {
    let opts = {
      headers: {
        UserAgent:
          "plaYtv/5.3.2 (Linux;Android 5.1.1) ExoPlayerLib/2.3.0/2.3.0\r\n",

        ContentType: "video/mp2t",
        Connection: "keep-alive",
        AccessControlAllowOrigin: " *",
        AccessControlExposeHeaders: " Content-Length,Content-Range",
        AccessControlAllowHeaders: " Range",
        AcceptRanges: " bytes",
      },
    };

    // context = stream_context_create(opts);
    let haystack = axios.get(
      "http://mumsite.cdnsrv.jio.com/jiotv.live.cdn.jio.com/" + ts,
      opts
    );
    console.log(haystack);
  }
  let check = axios.get(
    "http://mumsite.cdnsrv.jio.com/jiotv.live.cdn.jio.com/Mastiii/Mastiii_800.m3u8"
  );
  console.log(check);

  return (
    <>
      <div className="header">
        {/* <h1 className="heading">THE FREE TV APP</h1> */}
        <h4 className="heading">Developed By :</h4>
        <div className="namee">
          <a
            className="namee__word"
            href="https://www.instagram.com/thatsuaveboy/"
          >
            RAJAT MEHTA
          </a>
        </div>
      </div>
      {/* <div ><img src={instalogo} style={{ borderRadius: "50%",filter: "drop-shadow(0 0 0.75rem crimson)" }}/></div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "5%",
        }}
      >
        <a
          className="namee__word highlight"
          href="https://www.instagram.com/thatsuaveboy/"
          target="_blank"
        >
          <InstagramIcon />
        </a>
        <a
          className="namee__word highlight"
          href="https://t.me/thatsuaveboy"
          target="_blank"
        >
          <TelegramIcon />
        </a>
        <a
          className="namee__word highlight"
          href="https://twitter.com/rajatmehta__25"
          target="_blank"
        >
          <TwitterIcon />
        </a>
        <a
          className="namee__word highlight"
          href="https://github.com/RajatMehta25"
          target="_blank"
        >
          <GitHubIcon />
        </a>
        <a
          className="namee__word highlight"
          href="https://wa.me/+916372773008?text=Hey! "
          target="_blank"
        >
          <WhatsAppIcon />
        </a>
      </div>

      <Navbar />
      <div id="search1">
        <input
          type="text"
          name="search"
          placeholder="SEARCH , ऐथे लब्बो"
          id="search"
          value={search2}
          onChange={Inputevent}
        />
        <span className="material-icons micinvisible" onClick={Inputevent2}>
          <IconButton className="" title="Voice Search">
            <Mic />
          </IconButton>
        </span>
      </div>

      <div className="play" ref={box}>
        {search2 === "" ? Videos.map(ncard) : Videos.map(zcard)}
      </div>
      <div></div>
    </>
  );
};

export default Play;
