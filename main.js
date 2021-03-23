const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const navIcon = document.querySelector('.nav-icon');
const navOptions = document.querySelector('.nav-options');


function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}


function clockFunc() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;

    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}


setInterval(clockFunc, 1000);
clockFunc();




navIcon.addEventListener("click", () => {
    navOptions.classList.toggle("slideOut");
});

function setBackgroundColor(tag) {
    let id = tag.id;
    let body = document.querySelector('body');

    if (id === 'red') {
        body.style.backgroundImage = 'radial-gradient( circle 738px at 7.4% 47.9%,  rgba(225,63,79,1) 0%, rgba(245,61,79,1) 47%, rgba(247,161,175,1) 90.2% )';
    } else if (id === 'blue') {
        body.style.backgroundImage = 'radial-gradient( circle farthest-corner at 10% 20%, rgba(7, 30, 81, 1) 0%, rgba(5, 43, 64, 1) 90%)';
    } else if (id === 'orange') {
        body.style.backgroundImage = 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,131,8,1) 0%, rgba(245,63,63,1) 90% )';
    } else {
        return;
    }
}












// const date = new Date();
// const secondsRatio = date.getSeconds();

// console.log(date.getHours(),":",date.getMinutes(),":", secondsRatio);