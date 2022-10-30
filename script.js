document.addEventListener('DOMContentLoaded', () => {

    const sessionLabel = document.getElementById('session-label')
    const startBtn = document.getElementById('start-btn')
    const stopBtn = document.getElementById('stop-btn')
    const sessionsList = document.getElementById('sessions-list')
    const workDurationInput = document.getElementById('work-duration-input')
    const breakDurationInput = document.getElementById('break-duration-input')
    const audioEl = document.getElementById('audio')


    startBtn.addEventListener('click', toggleClock)
    stopBtn.addEventListener('click', resetClock)

    let isRunning = false
    let isStopped = true

    let workDuration = 1500
    let breakDuration = 300
    let timeLeft = 1500
    let timeSpent = 0

    let sessionType = 'Work'

    let updatedWorkDuration
    let updatedBreakDuration


    const progressBar = new ProgressBar.Circle('#timer-el', {
        color: '#FCB03C',
        strokeWidth: 6,
        text: {
        value: '25:00',
        },
        from: { color: '#FCB03C' },
        to: { color: '#fff' },
        step: function(state, bar) {
            bar.path.setAttribute('stroke', state.color);
    }
    })

    function toggleClock(){
        updatedWorkDuration = workDurationInput.value * 60
        updatedBreakDuration = breakDurationInput.value * 60
        if (isStopped) {
            setUpdatedDurations()
            isStopped = false
        }
        if(isRunning){
            clearInterval(clockTimer)
            isRunning = false
            startBtn.innerHTML= `<i class="fa-solid fa-play"></i>`
        }else {
            isRunning = true
            startBtn.innerHTML= `<i class="fa-solid fa-pause"></i>`
            sessionLabel.disabled = true;
            clockTimer = setInterval(() => {
                updateTime()
                displayTimeLeft()
                progressBar.set(calculateBarProgress())
            }, 1000)
        }
        stopBtn.classList.remove('hidden')
    }

    function updateTime(){
        if(timeLeft > 0){
            timeLeft--
            timeSpent++
        }else if(timeLeft === 0){
            timeSpent = 0
            audioEl.play()
            if(sessionType === 'Work'){
                timeLeft = breakDuration
                displaySessionLog('Work')
                sessionType = 'Break'
                setUpdatedDurations()
            }else {
                timeLeft = workDuration
                displaySessionLog('Break')
                sessionType = 'Work'
                setUpdatedDurations()
            }
        }
    }

    function resetClock(){
        console.log(Math.floor(timeSpent/60))
        setUpdatedDurations()
        displaySessionLog(sessionType)
        clearInterval(clockTimer)
        isRunning = false
        isStopped = true
        sessionLabel.disabled = false;
        timeLeft = workDuration
        displayTimeLeft()
        sessionType = 'Work'
        startBtn.innerHTML= `<i class="fa-solid fa-play"></i>`
        timeSpent = 0
    }

    function displayTimeLeft(){
        let timerHtml = ''
        let seconds = timeLeft % 60
        let minutes = Math.floor(timeLeft / 60) % 60
        let hours = Math.floor(timeLeft / 3600) 
        if (hours > 0){
            timerHtml += `${formatTime(hours)}:`
        }
        timerHtml += `${formatTime(minutes)}:${formatTime(seconds)}`
        progressBar.text.innerText = timerHtml

        function formatTime(time){
            if(time < 10){
                return `0${time}`
            }else {
                return time
            }
        }
    }

    function displaySessionLog(type){
        const listEl = document.createElement('li')
        let task = ''
        if(type === 'Work'){
            if(sessionLabel.value){
                task = sessionLabel.value
                workTaskLabel = task
            } else {
                task = 'Work'
            }
        } else {
            task = 'Break'
        }
        let duration 
        console.log(timeSpent/60)
        if(timeSpent/60 < 1){
            if(timeSpent === 0 && sessionType =="Work"){
                duration = workDuration/60
            }else if(timeSpent === 0 && sessionType =="Break"){
                duration = breakDuration/60
            }else{
                duration =  '< 1' 
            }
        }else{
            duration = Math.floor(timeSpent/60)
        }
        listEl.textContent=`${task} : ${duration} minutes`
        sessionsList.append(listEl)
    }

    function setUpdatedDurations(){
        if (sessionType === 'Work'){
            if(updatedWorkDuration){
                timeLeft = updatedWorkDuration
            }else{
                timeLeft = workDuration
            }
            workDuration = timeLeft
        }else{
            if(updatedBreakDuration){
                timeLeft = updatedBreakDuration
            }else{
                timeLeft = breakDuration
            }
            breakDuration = timeLeft 
        }
    }

    function calculateBarProgress(){
        if(sessionType === 'Work'){
            return (timeSpent / workDuration) 
        }else{
            return (timeSpent / breakDuration) 
        }
    }
})