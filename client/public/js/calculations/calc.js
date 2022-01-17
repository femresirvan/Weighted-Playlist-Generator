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

const calcCumulativeWeights = (cumulativeWeights, playlist) => {
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

const calculateProb = (playlist, n) => {
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
    const randomNumber = cumulativeWeights[cumulativeWeights.length - 1] * Math.random();
    for (let i = 0; i < playlist.length; i++) {
        if (cumulativeWeights[i] >= randomNumber) {
            return playlist[i].name;
        }
    }
}

const randomAdvertorialGenerator = (cumulativeWeights, playlist, advertorialLength) => {
    let counts = {},
        countsArr = [],
        equalize, advertorial = new Array(advertorialLength);
    const min = playlist.reduce(function (prev, curr) {
        if (prev)
            if (prev.weight < curr.weight) return prev.weight;
            else return null;
        else return null;
    }) || null;
    for (let i = 0; i < advertorialLength; i++) {
        advertorial[i] = randomIndexGenerator(cumulativeWeights, playlist);
        counts[advertorial[i]] = (counts[advertorial[i]] || 0) + 1;
        for (let j = 0; j < playlist.length; j++) {
            if (advertorial[i] == playlist[j].name) equalize = playlist[j].probWeightInt;
        }
        let whileCounter = 0;
        //DEBUG console.log(`${advertorial[i-1]} --- ${advertorial[i]} --- ${advertorial[i]}'si için equalize: ${equalize}`)
        while ((i != 0) && (advertorial[i - 1] == advertorial[i]) || (equalize < counts[advertorial[i]])) {
            counts[advertorial[i]] = counts[advertorial[i]] - 1;
            advertorial[i] = randomIndexGenerator(cumulativeWeights, playlist);
            counts[advertorial[i]] = (counts[advertorial[i]] || 0) + 1;
            whileCounter++;
            for (let j = 0; j < playlist.length; j++) {
                if (advertorial[i] == playlist[j].name) equalize = playlist[j].probWeightInt;
            }
            if(whileCounter == 15) break;
            //DEBUG console.log("HATA: while çalıştı. yeni equalize: "+ equalize);
        }
        isMin = false;
        //DEBUG console.log(counts);
    }
    for (let i = 0; i < playlist.length; i++) {
        if (counts[playlist[i].name]) countsArr[i] = counts[playlist[i].name];
        else countsArr[i] = 0;
    }
    return {
        advertorial,
        countsArr
    }
}

const makeStatistic = (cumulativeWeights, playlist, advertorialLength) => {
    let statistic = [];
    for (let i = 0; i < 10000; i++) {
        let {
            countsArr
        } = randomAdvertorialGenerator(cumulativeWeights, playlist, advertorialLength);
        countsArr.forEach((element, index) => {
            if (!statistic[index]) statistic.push({
                name: '',
                weight: 0,
                percentageWeight: 0
            })
            statistic[index].weight += element;
        });
    }
    playlist.forEach((element, index) => {
        statistic[index].name = element.name;
    });
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
        if (element.percentageWeight > 50) return false;
    });
    return true;
}

module.exports = {
    calculatePercentage,
    calculateProb,
    calcCumulativeWeights,
    randomAdvertorialGenerator,
    makeStatistic,
    errorState
}