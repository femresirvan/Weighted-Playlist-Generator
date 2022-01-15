let advertorialLength;
const urlInput = document.querySelector('#url-input'),
    weightInput = document.querySelector('#weight-input'),
    submitBtn = document.querySelector('#submit-btn'),
    finishBtn = document.querySelector('#finish-btn'),
    lengthInput = document.querySelector('#length-input'),
    lengthSubmitBtn = document.querySelector('#length-submit-btn');

finishBtn.addEventListener('click',() => {
        let cumulativeWeights = new Array()
        if(!advertorialLength) return false;
        let advertorial = new Array(advertorialLength);
        playlist = calculateProb(playlist,advertorialLength);
        playlist = calculatePercentage(playlist);
        cumulativeWeights = calcCumulativeWeights(cumulativeWeights,playlist);
        // if(errorState(playlist)) alert('HATA BURAYI TANIMLA') 
        const advertorialInfo = randomPlaylistGenerator(cumulativeWeights,playlist,advertorial);
        // const statistics = makeStatistic(cumulativeWeights,playlist,advertorial);
        console.log(advertorialInfo);
        console.table(playlist);
        // console.table(statistics);
})
    

submitBtn.addEventListener('click',() => {
    playlist.push({
        name:urlInput.value,
        weight:(weightInput.value*1)
    })
    console.log(playlist);
})


lengthSubmitBtn.addEventListener('click', () => {
    advertorialLength = lengthInput.value;
})
