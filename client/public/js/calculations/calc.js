//TEST
// const array = [{
//     name: "AHMET",
//     weight: 3
// }, {
//     name: "MEHMET",
//     weight: 2
// }, {
//     name: "ALİ",
//     weight: 1
// }]
// const n = 5;
// const advertorial = new Array(n);

// const cumulativeWeights = []

const calcCumulativeWeights = (cumulativeWeights,playlist) => { 
    for (let i = 0; i < playlist.length; i++) {
        if (i == 0) cumulativeWeights[i] = playlist[i].weight;
        else cumulativeWeights[i] = playlist[i].weight + cumulativeWeights[i - 1];
    }
    return cumulativeWeights;
}

const calculatePercentage = (playlist) => {
    let sum = 0;
    playlist.forEach((element, index) => {
        sum += element.weight;
    });

    let temp = 100 / sum;
    playlist.forEach((element, index) => {
        element.percentageWeight = element.weight * temp;
    });
    return playlist;
}

const calculateProb = (playlist,n) => {
    let sum = 0;
    playlist.forEach((element, index) => {
        sum += element.weight;
    });

    let temp = n / sum;
    playlist.forEach((element, index) => {
        element.probWeight = element.weight * temp;
        element.probWeightInt = Math.ceil(element.weight * temp);
    });
    return playlist;
}

const randomIndexGenerator = (cumulativeWeights, playlist) => {
    const randomNumber = cumulativeWeights[cumulativeWeights.length-1] * Math.random();
    for (let i = 0; i < playlist.length; i++) {
        if (cumulativeWeights[i] >= randomNumber) {
            return playlist[i].name;
        }
    }
}

const randomPlaylistGenerator = (cumulativeWeights, playlist, advertorialLength) => {
    let counts = {}, countsArr=[],equalize, advertorial=new Array(advertorialLength);
    for (let i = 0; i < advertorialLength; i++) {
        advertorial[i] = randomIndexGenerator(cumulativeWeights, playlist);
        for (let j = 0; j < playlist.length; j++) {
            if (advertorial[i] == playlist[j].name) equalize = playlist[j].probWeightInt;
        }
        //DEBUG console.log(`${advertorial[i-1]} --- ${advertorial[i]} --- ${advertorial[i]}'si için equalize: ${equalize}`)
        while ((i != 0) && (advertorial[i - 1] == advertorial[i]) || (equalize <= counts[advertorial[i]])) {
            advertorial[i] = randomIndexGenerator(cumulativeWeights, playlist);
            for (let j = 0; j < playlist.length; j++) {
                if (advertorial[i] == playlist[j].name) equalize = playlist[j].probWeightInt;
            }
            //DEBUG console.log("HATA: while çalıştı. yeni equalize: "+ equalize);
        }
        counts[advertorial[i]] = (counts[advertorial[i]] || 0) + 1;
        //DEBUG console.log(counts);
    }
    for(let i = 0; i<playlist.length;i++){
        if(counts[playlist[i].name]) countsArr[i] = counts[playlist[i].name];
        else countsArr[i] = 0;
    }
    return {
        advertorial,
        countsArr,
        counts
    }
}
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
const makeStatistic = (cumulativeWeights, playlist, advertorial) => {
    let statistic = [];
    for(let i = 0;i<10;i++){
        let {counts,countsArr} = randomPlaylistGenerator(cumulativeWeights, playlist, advertorial);
        countsArr.forEach((element,index) => {
            if(!statistic[index]) statistic.push({name:'',weight:0,percentageWeight:0})
            statistic[index].weight += element;
            statistic[index].name = getKeyByValue(counts,element);
        });
    }
    calculatePercentage(statistic);
    return statistic;
}

// calculatePercentage(array);
// calculateProb(array);
// console.table(array);
// console.log(randomPlaylistGenerator(cumulativeWeights, array, advertorial));
// console.log('STATISTIC ');
// console.table(makeStatistic(cumulativeWeights,array,advertorial));

const errorState = (playlist) => {
    playlist.forEach(element => {
        if(element.percentageWeight > 50) return false; 
    });
    return true;
}

module.exports = {
    calculatePercentage,
    calculateProb,
    calcCumulativeWeights,
    randomPlaylistGenerator,
    makeStatistic,
    errorState
}