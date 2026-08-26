import { useEffect, useRef } from 'react';
import './clock.css'

function Clock() {
    const secondsRef = useRef(null);
    const minutesRef = useRef(null);
    const hoursRef = useRef(null);

    useEffect(() => {
        function setTime() {
            const rightNow = new Date();

            const seconds = rightNow.getSeconds();
            const secondsDegrees = (seconds / 60) * 360 + 90;
            secondsRef.current.style.transform = `rotate(${secondsDegrees}deg)`;

            const minutes = rightNow.getMinutes();
            const minutesDegrees = (minutes/60) * 360 + (seconds / 60) * 6 + 90;
            minutesRef.current.style.transform = `rortate(${minutesDegrees}deg)`;

            const hours = rightNow.getHours();
            const hoursDegrees = (hours / 12) * 360 + (minutes/60) * 30 + 90;
            hoursRef.current.style.transform = `rotate(${hoursDegrees}deg)`;

        }

        const intervalId = setInterval(setTime, 1000);
        return () => clearInterval(intervalId);
    }, []);



    return (
        <>
        <main className="clock">
            
            <section>
                <span ref={secondsRef}></span>
                <span ref={minutesRef}></span>
                <span ref={hoursRef}></span>
            </section>
            
        </main>
        <section>
            Here's the time!
        </section>
        </>
    )
}
export default Clock