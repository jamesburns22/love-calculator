const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const matchPercentage = document.getElementById('match-percentage');
const cta = document.getElementById('cta');

function getMatchPercentage() {
    
    let n = Math.random();
    let matchPercentageNumber = Math.floor((n*100) + 1);
    let matchPercentageMessage = `${name1.value} and ${name2.value} love percentage is ${matchPercentageNumber}%`
    console.log(matchPercentageMessage);
    matchPercentage.innerHTML = matchPercentageMessage;
    cta.disabled = true;
    cta.style.backgroundColor= "#999";
    cta.innerHTML = "Refresh to Try Again";
}


cta.addEventListener('click', getMatchPercentage);