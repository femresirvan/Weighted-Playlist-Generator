let advertorialList = document.querySelector('#advertorial-list'),
    playlistTable = document.querySelector('#playlist-table'),
    mainWrapper = document.querySelector('.main-wrapper'),
    tablesContainer = document.querySelector('.tables-container');
    tablesContainer.style.display = 'none';
    const showTables = (playlist,advertorial) => {
        playlist.forEach(element => {
            let html = `<tr><td>${element.name}</td><td>${element.weight}</td><td>${element.percentageWeight}</td><td>${element.probWeight}</td><td>${element.probWeightInt}</td></tr>`;
            // DEBUG console.log(html);
            playlistTable.innerHTML += html;    
        });
        advertorial.forEach(element => {
            let html = `<LI>${element}`;
            // DEBUG console.log(html);
            advertorialList.innerHTML += html;
        });
        mainWrapper.classList.remove("main-wrapper");
        mainWrapper.classList.add("main-wrapper-result");
        tablesContainer.style.display = 'block';
}

module.exports = {
    showTables
}