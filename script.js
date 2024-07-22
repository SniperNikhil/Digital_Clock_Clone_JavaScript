const navanalog = document.getElementById('navanalog');
const navdigital = document.getElementById('navdigital');
const navtimer = document.getElementById('navtimer')
const navstopwatch = document.getElementById('navstopwatch')

const analog = document.getElementById('Analog');
const digital = document.getElementById('Digital');
const timer = document.getElementById('Timer');
const stopw = document.getElementById('StopWatch')

analog.style.display = "block";

navanalog.addEventListener('click', () => {
    analog.style.display = "block";
    digital.style.display = "none";
    timer.style.display = "none";
    stopw.style.display = "none";

    setTimeout(() => {
        analog.style.opacity = '1';
        digital.style.opacity = '0';
        timer.style.opacity = '0';
        stopw.style.opacity = "0";
    }, 10);
})

navdigital.addEventListener('click', () => {
    analog.style.display = "none";
    digital.style.display = "grid";
    timer.style.display = "none";
    stopw.style.display = "none";

    setTimeout(() => {
        analog.style.opacity = '0';
        digital.style.opacity = '0.4';
        timer.style.display = "0";
        stopw.style.opacity = "0";
    }, 10);
})

navtimer.addEventListener('click',()=>{
    timer.style.display = "grid";
    analog.style.display = "none";
    digital.style.display = "none";
    stopw.style.display = "none";

    setTimeout(() => {
        timer.style.opacity = '0.4';
        digital.style.opacity = '0';
        analog.style.opacity = '0';
        stopw.style.opacity = "0";
    }, 10);
})

navstopwatch.addEventListener('click',()=>{
    stopw.style.display = "grid";
    analog.style.display = "none";
    digital.style.display = "none";
    timer.style.display = "none";
    
    setTimeout(() => {
        analog.style.opacity = '0';
        digital.style.opacity = '0';
        timer.style.opacity = "0";
        stopw.style.opacity = "0.4";
    }, 10);
})


document.addEventListener('DOMContentLoaded', (event) => {
    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondDegree = (seconds * 6) - 90; // 360 / 60 = 6 degrees per second, start at the top
        const minuteDegree = (minutes * 6) + (seconds * 0.1); // 360 / 60 = 6 degrees per minute, plus seconds' effect
        const hourDegree = ((hours % 12) * 30) + (minutes * 0.5);

        document.getElementById('secondhand').style.transform = `rotate(${secondDegree}deg)`;
        document.getElementById('minutehand').style.transform = `rotate(${minuteDegree}deg)`;
        document.getElementById('hourhand').style.transform = `rotate(${hourDegree}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock(); // initial call to set the correct time immediately
});

function updateDigitalClock() {
    const now = new Date();
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');

    const time = document.getElementById('Time');
    time.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateDigitalClock, 1000);
updateDigitalClock();

// Timer Code Starts HEre
let timerInterval;
document.getElementById('startButton').addEventListener('click', startTimer);

function startTimer() {
    const hours = parseInt(document.getElementById('hours').value);
    const minutes = parseInt(document.getElementById('minutes').value);
    const seconds = parseInt(document.getElementById('seconds').value);
    let totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

    timerInterval = setInterval(() => {
        if (totalTimeInSeconds <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            resetTimer();
        } else {
            totalTimeInSeconds--;
            const displayHours = String(Math.floor(totalTimeInSeconds / 3600)).padStart(2, '0');
            const displayMinutes = String(Math.floor((totalTimeInSeconds % 3600) / 60)).padStart(2, '0');
            const displaySeconds = String(totalTimeInSeconds % 60).padStart(2, '0');
            document.getElementById('changetimer').innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
        }
    }, 1000);
}

function resetTimer() {
    document.getElementById('changetimer').innerHTML =`
        <select id="hours">
                <option value="00">00</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
            </select>
            <span>:</span>
            <select id="minutes">
                <option value="00">00</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
                <option value="51">51</option>
                <option value="52">52</option>
                <option value="53">53</option>
                <option value="54">54</option>
                <option value="55">55</option>
                <option value="56">56</option>
                <option value="57">57</option>
                <option value="58">58</option>
                <option value="59">59</option>
            </select>
            <span>:</span>
            <select id="seconds">
                <option value="00">00</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
                <option value="51">51</option>
                <option value="52">52</option>
                <option value="53">53</option>
                <option value="54">54</option>
                <option value="55">55</option>
                <option value="56">56</option>
                <option value="57">57</option>
                <option value="58">58</option>
                <option value="59">59</option>
            </select>
    `
}

document.getElementById('TimeStop').addEventListener('click',()=>{
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null; // Reset the interval variable
    }
    resetTimer();  
    // resetTimer();
})



// StopWatch Starts Here
let stopwatchInterval;
let stopwatchTime = 0;
const stopHoursLabel = document.getElementById('stophours');
const stopMinutesLabel = document.getElementById('stopminutes');
const stopSecondsLabel = document.getElementById('stopseconds');
const startButton = document.getElementById('startButtonofstop');
const stopButton = document.getElementById('startButton1');
const resetButton1 = document.getElementById('resetButton1');
const changetimer1 = document.getElementById('changetimer1');

function updateStopwatch() {
    stopwatchTime += 1;
    const hours = Math.floor(stopwatchTime / 3600);
    const minutes = Math.floor((stopwatchTime % 3600) / 60);
    const seconds = stopwatchTime % 60;
    stopHoursLabel.textContent = String(hours).padStart(2, '0');
    stopMinutesLabel.textContent = String(minutes).padStart(2, '0');
    stopSecondsLabel.textContent = String(seconds).padStart(2, '0');
}

function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null; 
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = 0;
    stopHoursLabel.textContent = '00';
    stopMinutesLabel.textContent = '00';
    stopSecondsLabel.textContent = '00';
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton1.addEventListener('click', resetStopwatch);