import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [countdown, setCountdown] = useState(100 * 24 * 60 * 60); // 100 days in seconds

  useEffect(() => {
    if (countdown > 0) {
      const timerId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [countdown]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Coming Soon</title>
      <div className="bgimg">
        <h1>Coming Soon</h1>
        <div id="timer">
          {countdown > 0 ? formatTime(countdown) : "Time's up!"}
        </div>
        <div className="buttons">
          <a
            href="https://portfolio.rugvddev.site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="pushable">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">Portfolio</span>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/kadurugved/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="pushable">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">LinkedIn</span>
            </button>
          </a>
          <a
            href="https://github.com/rugvedkadu06/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="pushable">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">Github</span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
