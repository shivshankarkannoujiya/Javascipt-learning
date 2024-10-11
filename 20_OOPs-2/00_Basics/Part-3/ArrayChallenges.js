/* 
    1. Declare an Array named `teaFlavours` that contains the strings `green tea`, `black tea`, `oolong tea`
    TODO: Access the first element of the array and store it in a varible named `firstTea`
*/

let teaFlavours = ["green tea", "black tea", "oolong tea"]
let firstTea = teaFlavours[0]


/* 
    2.  Declare an Array named `cities` containing  `London`, `Tokyo`, `Paris`, `New York`
    TODO: Access the third element of the array and store it in a varible named `favouriteCity`
*/

let cities = ["London", "Tokyo", "Paris", "New Yoork"]
let favouriteCity = cities[2]


/* 
    3.  You have an array named `teaTypes` containing `herbal tea`, `white tea`, `masala chai`
    TODO: Change the second element of the array to `jasmine tea`
*/

let teaTypes = ["herbal tea", "white tea", "masala chai"]
teaTypes[1] = "jasmine tea"


/* 
    4. Declare an array named `citieVisited` containing `Mumbai` and `Sydney`
    TODO: Add `Berlin` to the array using the `push` method
*/

let citieVisited = ["Mumbai", "Sydney"]
citieVisited.push("Berlin") // Added at last 


/* 
    5. You have an array named `teaOrders` with `chai`, `iced tea`, `matcha`, `earl grey`
    TODO: Remove last element of the array using the `pop` method and store it iin a variable named `lastOrder`
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
let lastOrder = teaOrders.pop()


/* 
    6. You have an array named `popularTeas` containing `green tea`, `oolong tea`, and `chai`.
    TODO: Create a soft copy of the array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopyTeas = popularTeas
popularTeas.pop()
// console.log(popularTeas)
// console.log(softCopyTeas)

/* 
    6. You have an array named `topCities` containing `Berlin`, `Singapur`, and `New York`.
    TODO: Create a hard copy of the array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"]
let hardCopyCities = [...topCities]
// let hardCopyCities = topCities.slice()
topCities.pop()
// console.log(topCities)
// console.log(hardCopyCities)



/*
    8. You have two arrays: `europeanCities` containing `Paris`,`Rome` and `asianCities` containing `Tokyo`, `Bangkok`.
    TODO: Merge these two arrays into array named `worldCities`
*/

let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]

// 1.
// let worldCities = europeanCities + asianCities
// console.log(typeof worldCities) // string

// 2.
// let worldCities = [europeanCities, asianCities]
// console.log(worldCities) // [ [ 'Paris', 'Rome' ], [ 'Tokyo', 'Bangkok' ] ]

// 3. 
// let worldCities = [...europeanCities, ...asianCities]
// console.log(worldCities);

// 4.
let worldCities = europeanCities.concat(asianCities)
// console.log(worldCities)


/* 
    9. You have an array named `teaMenu` containing `masala tea`, `oolong tea`, `green tea`, `earl grey` 
    TODO: Find the length of the array and store it in a variable named `menuLength`
*/

let teaMenu = ["masala tea", "oolong tea", "green tea", "earl grey"]
let menuLength = teaMenu.length
// console.log(menuLength)


/* 
    10. You have an array named `cityBucketList` containing `Kyoto`, `London`, `Cape Town` and `Vancouver`
    TODO: Check if `London` is in array and store the result in a variable named `isLondonInList`
*/

let cityBucketList = ["Kyoto", "London", "Cape City", "Vancouver"]
let isLondonInList = cityBucketList.includes("London")
// console.log(isLondonInList)
