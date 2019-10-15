import { ProductArray } from './ProductArray.js';
import { productData } from './api.js';

const voteSpan = document.getElementById('vote-span');
const submitButton = document.querySelector('button');
const productImageTags = document.querySelectorAll('img');
const productRadioTags = document.querySelectorAll('input');
// const productName = document.getElementById('prodcut-name');
const products = new ProductArray(productData);
let votesRemaining = 25;
voteSpan.textContent = votesRemaining;



const initializeProductButtons = () => {
    const randomProduct = products.getRandomProduct();
    let randomProductTwo = products.getRandomProduct();
    let randomProductThree = products.getRandomProduct();
    
    while (randomProduct === randomProductTwo || randomProductTwo === randomProductThree || randomProductThree === randomProduct) {
        randomProductTwo = products.getRandomProduct();randomProductThree = products.getRandomProduct();
    }

    productImageTags.forEach((imageTag, i) => {
        if (i === 2) {
            imageTag.src = randomProduct.image;
        } else if (i === 1) {
            imageTag.src = randomProductTwo.image;
        } else if (i === 0) {
            imageTag.src = randomProductThree.image;
        }
    });
    productRadioTags.forEach((radioTag, i) => {
        if (i === 2) {
            radioTag.value = randomProduct.id;
        } else if (i === 1) {
            radioTag.value = randomProductTwo.id;
        } else if (i === 0) {
            radioTag.value = randomProductThree.id;
        }
    });


};

const nonDuplicateProductButtons = () => {
    
}

submitButton.addEventListener('click', () => {
    votesRemaining--;
    // initializeProductButtons();
    voteSpan.textContent = votesRemaining;
    if (votesRemaining === 0) {
        submitButton.disabled = true;
    }
});
initializeProductButtons();

// productRadioTags.forEach((radioTag) => {
//     radioTag.addEventListener('click', (event) => {
//         //Assign radio button value to === id of product
//         if (event.target.value) {

//         }

        
//     });
// });