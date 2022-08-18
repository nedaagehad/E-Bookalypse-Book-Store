import React, { useEffect, useState } from 'react';

//CSS Module
import styles from './CountDown.module.css';

function CountDown() {

    const endDate = new Date("12/11/2022");

    const getremaining = (end) => {
        let currentDate = new Date();
        if (currentDate <= end) {
            let diff = end - currentDate;
            let seconds = Math.round(diff / 1000);
            return seconds;
        }
    }

    const [remainSec, SetRemainSec] = useState(getremaining(endDate));

    const displayCountDown = () => {
        let disDay = (remainSec / (60 * 60 * 24)) - (remainSec / (60 * 60 * 24)) % 1;

        let divisorForHours = (remainSec / (60 * 60 * 24)) % 1;
        let disHours = (divisorForHours * 24) - (divisorForHours * 24) % 1

        let divisorForMin = (divisorForHours * 24) % 1;
        let disMin = (divisorForMin * 60) - (divisorForMin * 60) % 1

        let divisorForSec = (divisorForMin * 60) % 1;
        let disSec = Math.round(divisorForSec * 60);

        return `${disDay <= 9 ? "0" + disDay : disDay} : ${disHours <= 9 ? "0" + disHours : disHours} : ${disMin <= 9 ? "0" + disMin : disMin} : ${disSec <= 9 ? "0" + disSec : disSec}`;
    }

    useEffect(() => {
        setInterval(() => {
            SetRemainSec(getremaining(endDate))
        }, 1000);
    }, [remainSec]);

    return (
        <div>
            <h3 className={styles.flashCount + " p-3 mt-5 text-center rounded-2 "} >{displayCountDown()}</h3>
        </div>
    )
}

export default CountDown;