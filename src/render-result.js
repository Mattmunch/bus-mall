export const renderResults = (shownArray, selectedArray) => {
    let resultsArray = [];
    shownArray.forEach(shown => {
        selectedArray.forEach(selected => {
            if (shown.id === selected.id){
                const percentage = Math.round((selected.timesSelected / shown.timesShown) * 100);
                resultsArray.push(`You selected the ${shown.name} ${selected.timesSelected} out of ${shown.timesShown} times; ${percentage}%.`);
            }
        });
    });
    return resultsArray;
};

export const makeLi = (content) => {
    const liElement = document.createElement('li');
    liElement.textContent = content;
    return liElement;

};

export const displayData = (shownArray, selectedArray) => {
    const resultsArray = renderResults(shownArray, selectedArray);
    const ul = document.getElementById('results');
    resultsArray.forEach(result => {
        const li = makeLi(result);
        ul.appendChild(li);
    });
};