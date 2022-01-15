const {randomPlaylistGenerator,calcCumulativeWeights,calculatePercentage,calculateProb,makeStatistic,errorState} = require("../calculations/calc");
const {carousel} = require('./carousel');
const {showTables} = require('./lists');
let advertorialLength;
const urlInput = document.querySelector('#url-input'),
    weightInput = document.querySelector('#weight-input'),
    submitBtn = document.querySelector('#submit-btn'),
    finishBtn = document.querySelector('#finish-btn'),
    lengthInput = document.querySelector('#length-input'),
    lengthSubmitBtn = document.querySelector('#length-submit-btn');
imageForm = document.querySelector('#image-form');
lengthForm = document.querySelector('#length-form');
imageForm.style.display = 'none';
const submitBtnHandler = (array) => {
    submitBtn.addEventListener('click', () => {
        array.push({
            name: urlInput.value,
            weight: (weightInput.value * 1)
        })
        console.log(array);
    })
}

/*CAROUSEL DEBUGGER
carousel(["https://media.giphy.com/media/86ernxgCTJNATvy9Bk/giphy.gif",
    "https://media.giphy.com/media/1iua1PIlxeyGEryVRy/giphy.gif",
   "https://media.giphy.com/media/9fPf3j3SxESPVECUyM/giphy.gif"
]);*/

const finishBtnHandler = async (playlist) => {
    finishBtn.addEventListener('click', () => {
        let cumulativeWeights = new Array()
        playlist = calculateProb(playlist, advertorialLength);
        playlist = calculatePercentage(playlist);
        cumulativeWeights = calcCumulativeWeights(cumulativeWeights, playlist);
        // if(errorState(playlist)) alert('HATA BURAYI TANIMLA') 
        const advertorialInfo = randomPlaylistGenerator(cumulativeWeights, playlist, advertorialLength);
        const statistics = makeStatistic(cumulativeWeights, playlist, advertorialLength);
        console.table(playlist);
        console.log(advertorialInfo);
        console.table(statistics);
        carousel(advertorialInfo.advertorial);
    })
}

const lengthSubmitBtnHandler = async () => {
    lengthSubmitBtn.addEventListener('click', () => {
        advertorialLength = lengthInput.value;
        if (lengthInput.value) {
            lengthForm.style.display = 'none';
            imageForm.style.display = 'block';
        } else alert('Type smth!')
    })
}

module.exports = {
    submitBtnHandler,
    finishBtnHandler,
    lengthSubmitBtnHandler
}