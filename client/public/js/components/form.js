const {
    randomAdvertorialGenerator,
    calcCumulativeWeights,
    calculatePercentage,
    calculateProb,
    makeStatistic,
    errorState
} = require("../calculations/calc");
const {
    carousel
} = require('./carousel');
const {
    showTables
} = require('./lists');
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
        if (urlInput.value == '' || urlInput.value == null || weightInput.value == '' || weightInput.value == null) return alert('TYPE CORRECTLY');
        else {
            if (isNaN(weightInput.value*1)) return alert('TYPE CORRECTLY')
            else {
                array.push({
                    name: urlInput.value,
                    weight: (weightInput.value * 1)
                })
            }
        }
        urlInput.value = '';
        weightInput.value = '';
        //DEBUG
        // console.log(array);
       
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
        if(!errorState(playlist)) return alert('Error: Weight definition error. Some weights are more than %50 for the sum of weights.') 
        const advertorialInfo = randomAdvertorialGenerator(cumulativeWeights, playlist, advertorialLength);
        const statistics = makeStatistic(cumulativeWeights, playlist, advertorialLength);
        // console.table(playlist);
        // console.log(advertorialInfo);
        console.log("%cİSTATİSTİKLER","color:yellow");
        console.table(statistics);
        imageForm.style.display = 'none';
        carousel(advertorialInfo.advertorial);
        showTables(playlist,advertorialInfo.advertorial);
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