let prices = {
    "btc": 37740,
    "eth": 2020,
    "xrp": 0.607,
    "ltc": 69.620,
    "ada": 0.384,
    "dot": 5.210,
    "bnb": 227.390,
    "link": 14.540,
    "xlm": 0.118,
    "doge": 0.081
}

let keys = {
    "bitcoin" : "btc",
    "ethereum" : "eth",
    "ripple" : "xrp",
    "litecoin" : "ltc",
    "cardano" : "ada",
    "polkadot" : "dot",
    "binancecoin" : "bnb",
    "chainlink" : "link",
    "stellar" : "xlm",
    "dogecoin" : "doge"
}

function convert(amount1, coin1, coin2) {
    return amount1 * prices[coin1] / prices[coin2];
}

function get_key(coinname) {
    return keys[coinname];
}

let convert_left_to_right_button = document.getElementById("convert-left-to-right-button");
let convert_right_to_left_button = document.getElementById("convert-right-to-left-button");
let quantity_left = document.getElementById("quantity-left");
let quantity_right = document.getElementById("quantity-right");
let cryptocurrency_left = document.getElementById("cryptocurrency-left");
let cryptocurrency_right = document.getElementById("cryptocurrency-right");

convert_left_to_right_button.onclick = function (event) {
    event.preventDefault();
    quantity_right.value = convert(parseFloat(quantity_left.value), get_key(cryptocurrency_left.value), get_key(cryptocurrency_right.value));
};

convert_right_to_left_button.onclick = function (event) {
    event.preventDefault();
    quantity_left.value = convert(parseFloat(quantity_right.value), get_key(cryptocurrency_right.value), get_key(cryptocurrency_left.value));
};