import React, { useContext, useEffect, useRef } from "react";
import ai from "../assets/AI3.jpg";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

function Ai() {
  const { showSearch, setShowSearch } = useContext(shopDataContext);
  const navigate = useNavigate();

  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.log("Speech Recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript.trim().toLowerCase();
      console.log("Voice Command:", transcript);

      if (transcript.includes("search") && transcript.includes("open") && !showSearch) {
        speak("Opening search");
        setShowSearch(true);
        navigate("/collection");
      } else if (transcript.includes("search") && transcript.includes("close") && showSearch) {
        speak("Closing search");
        setShowSearch(false);
      } else if (
        transcript.includes("collection") ||
        transcript.includes("collections") ||
        transcript.includes("product") ||
        transcript.includes("products")
      ) {
        speak("Opening collection page");
        navigate("/collection");
      } else if (transcript.includes("about") || transcript.includes("about page")) {
        speak("Opening about page");
        navigate("/about");
        setShowSearch(false);
      } else {
        speak("Command not recognized");
        console.log("Unrecognized command:", transcript);
      }
    };

    recognition.onerror = (err) => {
      console.error("Speech recognition error:", err);
    };

    recognitionRef.current = recognition;
  }, [navigate, setShowSearch, showSearch]);

  function speak(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  }

  function handleClick() {
    if (recognitionRef.current) {
      recognitionRef.current.start();
    } else {
      console.log("Speech Recognition not available.");
    }
  }

  return (
    <div
      className="fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]"
      onClick={handleClick}
    >
      <img src={ai} alt="AI voice assistant" className="w-[100px] cursor-pointer rounded-2xl" />
    </div>
  );
}

export default Ai;