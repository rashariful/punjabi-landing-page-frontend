
"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  startDate: string; // Example: "2024-08-25T10:00:00Z"
  endDate: string;   // Example: "2024-08-30T23:59:59Z"
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ startDate, endDate }) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const start = new Date(startDate).getTime();
      const end = new Date(endDate).getTime();

      if (now < start) {
        setStatus("The countdown has not started yet!");
        setTimeLeft(null);
        return;
      }

      const remainingTime = end - now;

      if (remainingTime <= 0) {
        setStatus("Offer has ended!");
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      setStatus("");
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, [startDate, endDate]);

  return (
    <div className="flex flex-col items-center justify-center p-2 bg-gray-900 text-white rounded-lg shadow-lg w-full">
      {status ? (
        <p className="text-xl font-semibold text-red-500">{status}</p>
      ) : (
        // <div className="flex gap-4">
        //   {timeLeft && Object.entries(timeLeft).map(([unit, value]) => (
        //     <div key={unit} className="flex flex-col items-center bg-gray-800 p-2 rounded-lg shadow-md">
        //       <span className="text-2xl font-bold text-green-400">{value}</span>
        //       <span className="text-sm uppercase text-gray-300">{unit}</span>
        //     </div>
        //   ))}
        // </div>
        <div className="flex gap-4">
          {timeLeft && Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="relative flex flex-col items-center bg-gray-800 p-2 rounded-lg shadow-md">
              {/* Animated Background */}
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>

              {/* Countdown Value */}
              <span className="relative text-2xl font-bold text-green-400">{value}</span>

              {/* Countdown Unit */}
              <span className="relative text-sm uppercase text-gray-300">{unit}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
