import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

import "assets/css/HorizontalStats.css";
import profileData from "data/profileData.json";

const HOURS_LEARNING = 11;
const HOURS_PROFESSIONAL = 8.8;
const BONUS_HOURS = 25;
const START_LEARNING = new Date("2023-08-25");
const END_LEARNING = new Date("2024-07-15");
const END_PROFESSIONAL = new Date();
const msPerDay = 1000*60*60*24;

function calcHours() {
  const d1 = Math.max(0,(END_LEARNING - START_LEARNING)/msPerDay),
        d2 = Math.max(0, (END_PROFESSIONAL - END_LEARNING)/msPerDay);
  return Math.floor(d1*HOURS_LEARNING + d2*HOURS_PROFESSIONAL + BONUS_HOURS);
}
function calcDays() {
  return Math.floor((END_PROFESSIONAL - START_LEARNING)/msPerDay);
}
// e.g. we'll pull this from your JSON:
const TOTAL_PROJECTS =  profileData.portfolioImages.length; 

export default function HorizontalStats() {
  const [hours, setHours] = useState(calcHours());
  const [days, setDays]   = useState(calcDays());

  useEffect(() => {
    const iv = setInterval(() => {
      setHours(calcHours());
      setDays(calcDays());
    }, 60_000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="stats-row">
      <div className="stat-item">
        <div className="stat-value">
          <CountUp end={hours} duration={2} separator="," suffix=" hrs" />
        </div>
        <div className="stat-label"><h4 className="stat-label-h4"><strong>Hours Worked</strong></h4></div>
      </div>

      <div className="stat-item">
        <div className="stat-value">
          <CountUp end={TOTAL_PROJECTS} duration={1} />
        </div>
        <div className="stat-label"><h4 className="stat-label-h4"><strong>Projects Completed</strong></h4></div>
      </div>

      <div className="stat-item">
        <div className="stat-value">
          <CountUp end={days} duration={1.5} separator="," suffix=" days" />
        </div>
        <div className="stat-label"><h4 className="stat-label-h4"><strong>Days Since Start</strong></h4></div>
      </div>
    </div>
  );
}
