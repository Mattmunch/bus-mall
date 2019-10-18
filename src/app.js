import { ProductArray } from './ProductArray.js';
import { productData } from './api.js';
import { compare } from './compare.js';
import { renderResults } from './render-result.js';
import { displayData } from './render-result.js';



const voteSpan = document.getElementById('vote-span');
const submitButton = document.querySelector('button');
const productImageTags = document.querySelectorAll('img');
const productRadioTags = document.querySelectorAll('input');
const products = new ProductArray(productData);
let votesRemaining = 25;
let shownArray = [];
let selectedArray = [];
let randomProductOne;
let randomProductTwo;
let randomProductThree;

let previousProductOne = randomProductOne;
let previousProductTwo = randomProductTwo;
let previousProductThree = randomProductThree;

voteSpan.textContent = votesRemaining;

const checkPrevious = () => {
    while (randomProductOne === previousProductOne || randomProductOne === previousProductTwo || randomProductOne === previousProductThree) {
        randomProductOne = products.getRandomProduct();
    }
    while (randomProductTwo === previousProductOne || randomProductTwo === previousProductTwo || randomProductTwo === previousProductThree) {
        randomProductTwo = products.getRandomProduct();
    }
    while (randomProductThree === previousProductOne || randomProductThree === previousProductTwo || randomProductThree === previousProductThree) {
        randomProductThree = products.getRandomProduct();
    }
    while (randomProductOne === randomProductTwo || randomProductOne === randomProductThree) {
        randomProductOne = products.getRandomProduct();
    }
    while (randomProductTwo === randomProductThree) {
        randomProductTwo = products.getRandomProduct();
    }
};

const initializeProductButtons = () => {
    randomProductOne = products.getRandomProduct();
    randomProductTwo = products.getRandomProduct();
    randomProductThree = products.getRandomProduct();
    checkPrevious();
    
    while (randomProductOne === randomProductTwo || randomProductOne === randomProductThree) {
        randomProductOne = products.getRandomProduct();
    }
    while (randomProductTwo === randomProductThree) {
        randomProductTwo = products.getRandomProduct();
    }


    productImageTags.forEach((imageTag, i) => {
        if (i === 2) {
            imageTag.src = randomProductOne.image;
        } else if (i === 1) {
            imageTag.src = randomProductTwo.image;
        } else if (i === 0) {
            imageTag.src = randomProductThree.image;
        }
    });
    productRadioTags.forEach((radioTag, i) => {
        if (i === 2) {
            radioTag.value = randomProductOne.id;
        } else if (i === 1) {
            radioTag.value = randomProductTwo.id;
        } else if (i === 0) {
            radioTag.value = randomProductThree.id;
        }
    });

    [randomProductOne, randomProductTwo, randomProductThree].forEach(product => {
        incrementShown(shownArray, product.id, product.name);
    });


};

const incrementShown = (shownArray, choicesId, choicesName) => {
    let shown = compare(shownArray, choicesId, choicesName);
    if (!shown) {
        shown = {
            name: choicesName,
            id: choicesId,
            timesShown: 1
        };
        shownArray.push(shown);
    } else {
        shown.timesShown++;
    }


};
const incrementSelected = (selectedArray, choiceId) => {
    let selected = compare(selectedArray, choiceId);
    if (!selected) {
        selected = {
            id: choiceId,
            timesSelected: 1
        };
        selectedArray.push(selected);
    } else {
        selected.timesSelected++;
        return;

    }
};


submitButton.addEventListener('click', () => {
    votesRemaining--;
    voteSpan.textContent = votesRemaining;

    if (votesRemaining === 0) {
        submitButton.disabled = true;
        displayData(shownArray, selectedArray);
        const element = document.getElementById('result-section');
        element.classList.remove('hidden');


    }
    let chosenProduct = document.querySelector('input:checked').value;
    incrementSelected(selectedArray, chosenProduct);
    initializeProductButtons();

    

    console.log(selectedArray);
    console.log(shownArray);

    
});




initializeProductButtons();
