const { randomPlaylistGenerator, calcCumulativeWeights, calculatePercentage, calculateProb, makeStatistic, errorState } = require("../calculations/calc");
let advertorialLength;
const urlInput = document.querySelector('#url-input'),
    weightInput = document.querySelector('#weight-input'),
    submitBtn = document.querySelector('#submit-btn'),
    finishBtn = document.querySelector('#finish-btn'),
    lengthInput = document.querySelector('#length-input'),
    lengthSubmitBtn = document.querySelector('#length-submit-btn');
const submitBtnHandler = (array) => {submitBtn.addEventListener('click',() => {
    array.push({
        name:urlInput.value,
        weight:(weightInput.value*1)
    })
    console.log(array);
})}

const finishBtnHandler = async (playlist) => { finishBtn.addEventListener('click',() => {
    let cumulativeWeights = new Array() 
    if(!advertorialLength) return false;
    playlist = calculateProb(playlist,advertorialLength);
    playlist = calculatePercentage(playlist);
    cumulativeWeights = calcCumulativeWeights(cumulativeWeights,playlist);
    // if(errorState(playlist)) alert('HATA BURAYI TANIMLA') 
    const advertorialInfo = randomPlaylistGenerator(cumulativeWeights,playlist,advertorialLength);
    const statistics = makeStatistic(cumulativeWeights,playlist,advertorialLength);
    console.table(playlist);
    console.log(advertorialInfo);
    console.table(statistics);
})}

const lengthSubmitBtnHandler = async () => {
    lengthSubmitBtn.addEventListener('click', () => {
        advertorialLength = lengthInput.value;
    })
}

module.exports = {
    submitBtnHandler,
    finishBtnHandler,
    lengthSubmitBtnHandler
}