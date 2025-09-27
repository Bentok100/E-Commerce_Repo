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
      // console.error("Speech recognition error:", err);
  recognition.onerror = (event) => {
  console.error("Speech recognition error:", event.error, event.message || "");
  speak(`An error occurred: ${event.error}`);
};

    };

    recognitionRef.current = recognition;
  }, [navigate, setShowSearch, showSearch]);

  function speak(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  }

  async function handleClick() {
  try {
    await navigator.mediaDevices.getUserMedia({ audio: true });

    if (recognitionRef.current) {
      recognitionRef.current.start();
    } else {
      console.log("Speech Recognition not available.");
    }
  } catch (error) {
    console.error("Microphone access denied or not available:", error);
    speak("Microphone access is needed. Please check your browser settings.");
    alert("Microphone access is blocked or not available.");
  }
}


 return (
    <div
      className="fixed lg:bottom-[0.2px] md:bottom-[40px] bottom-[80px] left-[0.3%] "
      onClick={handleClick}
    >
      <img src={ai} alt="AI voice assistant" className="w-[69px] cursor-pointer rounded-2xl" />
    </div>
  );
}

export default Ai;
