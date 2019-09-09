window.addEventListener("DOMContentLoaded", function(){

    'use strict';

    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        //if(target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        //}
    });

    let dedline = '2019-10-09';

    function getTimeRemaining(endtime) {
        let time = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((time/1000) % 60),
            minutes = Math.floor((time/1000/60) % 60),
            hours = Math.floor(time/(1000*60*60));

        return {
            'total': time,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let time = getTimeRemaining(endtime);
            hours.textContent = time.hours;
            minutes.textContent = time.minutes;
            seconds.textContent = time.seconds; 

            if (time.total <= 0) clearInterval(timeInterval);
        }    
    }

    setClock('timer', dedline);
});