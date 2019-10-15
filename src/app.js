import { ProductArray } from './ProductArray.js';
import { productData } from './api.js';
import { compare } from './compare.js';

const voteSpan = document.getElementById('vote-span');
const submitButton = document.querySelector('button');
const productImageTags = document.querySelectorAll('img');
const productRadioTags = document.querySelectorAll('input');
// const productName = document.getElementById('prodcut-name');
const products = new ProductArray(productData);
let votesRemaining = 25;
let shownArray = [];
let selectedArray = [];


voteSpan.textContent = votesRemaining;




const initializeProductButtons = () => {
    let randomProductOne = products.getRandomProduct();
    let randomProductTwo = products.getRandomProduct();
    let randomProductThree = products.getRandomProduct();

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
        incrementShown(shownArray, product.id);
    });


};

const incrementShown = (shownArray, choiceId) => {
    let shown = compare(shownArray, choiceId);
    if (!shown) {
        shown = {
            id: choiceId,
            quantity: 1
        };
        shownArray.push(shown);
    } else {
        shown.timeShown++;
    }
};

submitButton.addEventListener('click', () => {
    votesRemaining--;
    initializeProductButtons();
    voteSpan.textContent = votesRemaining;
    if (votesRemaining === 0) {
        submitButton.disabled = true;
    }
    
    
});









initializeProductButtons();

