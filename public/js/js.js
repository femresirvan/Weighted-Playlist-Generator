const array = [{
    name: "AHMET",
    weight: 3
}, {
    name: "MEHMET",
    weight: 2
}, {
    name: "ALİ",
    weight: 1
}]
const n = 5;
const advertorial = new Array(n);

const cumulativeWeights = []

for (let i = 0; i < array.length; i++) {
    if (i == 0) cumulativeWeights[i] = array[i].weight;
    else cumulativeWeights[i] = array[i].weight + cumulativeWeights[i - 1];
}

const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];

const calculatePercentage = (playlist) => {
    let sum = 0;
    playlist.forEach((element, index) => {
        sum += element.weight;
    });

    let temp = 100 / sum;
    playlist.forEach((element, index) => {
        element.percentageWeight = element.weight * temp;
    });
}

const calculateProb = (playlist) => {
    let sum = 0;
    playlist.forEach((element, index) => {
        sum += element.weight;
    });

    let temp = n / sum;
    playlist.forEach((element, index) => {
        element.probWeight = element.weight * temp;
        element.probWeightInt = Math.ceil(element.weight * temp);
    });


}

const randomIndexGenerator = (cumulativeWeights, playlist) => {
    const randomNumber = maxCumulativeWeight * Math.random();
    for (let i = 0; i < playlist.length; i++) {
        if (cumulativeWeights[i] >= randomNumber) {
            return playlist[i].name;
        }
    }
}

const randomPlaylistGenerator = (cumulativeWeights, playlist, advertorial) => {
    let counts = {}, countsArr=[],equalize;
    for (let i = 0; i < advertorial.length; i++) {
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
        countsArr
    }
}

const makeStatistic = (cumulativeWeights, playlist, advertorial) => {
    let statistic = [0,0,0];
    for(let i = 0;i<10;i++){
        const {countsArr} = randomPlaylistGenerator(cumulativeWeights, playlist, advertorial);
        countsArr.forEach((element,index) => {
            statistic[index] += element;
        });
    }
    console.log(statistic)
    calculatePercentage(statistic);
    return statistic;
}
calculatePercentage(array);
calculateProb(array);
console.table(array);
console.table(randomPlaylistGenerator(cumulativeWeights, array, advertorial));
console.log('istatistik: ');
console.table(makeStatistic(cumulativeWeights,array,advertorial));
