import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import cakeImage from '../assets/cake.png'; // Make sure you have this image in your assets folder

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Target date: May 29, 2025, 7:00 AM
    const targetDate = new Date('May 29, 2025 07:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        navigate('/home'); // Navigate to home page when countdown expires
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="countdown-container">
      <div className="cake-image-container">
        <img src={cakeImage} alt="Birthday Cake" className="cake-image" />
      </div>
      <h1>Birthday Surprise Coming Soon!</h1>
      
      {!isExpired ? (
        <>
          <div className="countdown">
            <div className="time-block">
              <span className="time-value">{timeLeft.days}</span>
              <span className="time-label">Days</span>
            </div>
            <div className="time-block">
              <span className="time-value">{timeLeft.hours}</span>
              <span className="time-label">Hours</span>
            </div>
            <div className="time-block">
              <span className="time-value">{timeLeft.minutes}</span>
              <span className="time-label">Minutes</span>
            </div>
            <div className="time-block">
              <span className="time-value">{timeLeft.seconds}</span>
              <span className="time-label">Seconds</span>
            </div>
          </div>
          <p className="birthday-message">Waiting for the special day!</p>
        </>
      ) : (
        <p className="celebration-message">It's time for the birthday celebration!</p>
      )}
    </div>
  );
};

export default Countdown;