console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item){
    basket.push(item);
    return true;
}

function listItems(){
    for(let i=0; i<basket.length; i++){
        console.log(basket[i]);
    }
}

function empty(){
    basket.splice(0, basket.length);
    }

console.log(`Basket is ${basket}`);
console.log('Adding Cheese (expect true)', addItem(' ' + 'Cheese'));
console.log(`Basket is ${basket}`);
console.log('Adding Strawberries (expect true)', addItem(' ' + 'Strawberries'));
console.log(`Basket is ${basket}`);
console.log('Adding Mountain Dew Code Red (expect true)', addItem(' ' + 'Mountain Dew Code Red'));
console.log(`Basket is ${basket}`);
console.log('Adding Broccoli (expect true)', addItem(' ' + 'Broccoli'));
console.log(`Basket is ${basket}`);
console.log('Adding Coffee (expect true)', addItem(' ' + 'Coffee'));
console.log(`Basket is ${basket}`);

listItems();

empty();
console.log(basket);
console.log(`Basket is now empty ${basket}`);


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
