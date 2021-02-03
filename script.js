const convertToUSD = (price) => {
    let changeUSD = price * 1.4 - price * 0.01
    return changeUSD
}

//console.log(convertToUSD(200))

const convertToBRL = (price) => {
    let changeBRL = price * 5.7 - price * 0.01
    return changeBRL
}

//console.log(convertToBRL(100))

const convertToMoney = (currency, value) => {
    let changeCurrency = currency * value - currency * 0.01
    return changeCurrency 
    }

//console.log(convertToMoney(120, 29.90))

const convertTest = (currency, value, expValue) => {
    let changeCurrency = currency * value - currency * 0.01
    if(value === expValue){
        return 'Your economy is good'
    } 
    else{
        return 'You need to do something for your economy'
    }
}

console.log(convertToMoney(200, 1.2))
console.log(convertTest(200, 1.2, 1.2))