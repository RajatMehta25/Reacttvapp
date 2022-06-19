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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
    </>
  );
};

export default Play;
