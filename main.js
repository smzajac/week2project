// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:

let total = 0;

  for (var i = 0; i < data.length; i++) {
    let price = data[i].price;
    total += price;
    // data[i] += i;
    // averagePrice = price/data.length;
    // console.log(total);
  }
  let averagePrice = total/data.length;
  console.log(averagePrice);

}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
  let itemss = [];

  for (var i = 0; i < data.length; i++) {
    let int = data[i].price;
    if(int > 14 && int < 18){
      let items = data[i].title + " " + data[i].price;
      itemss.push(items);
    }
  }
console.log(itemss);
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  for (var i = 0; i < data.length; i++) {
    let currency = data[i].currency_code;
      if(currency === "GBP"){
      console.log(data[i].title + " " + data[i].price);
    }
  }

}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:

  // let wood = data[4].materials[1];
  // if (wood === "wood"){
  //   console.log(data[4].title);
  // }
//
// for (var i = 0; i < data.length; i++) {
//
//   let wood = data[i].materials[0];
//   if (wood === "wood"){
//     console.log(data[i].title);
//   }
//
// }




  for (var i = 0; i < data.length; i++) {
    let materials = data[i].materials;
    // console.log(materials);
      for (var j = 0; j < data[i].materials.length; j++) {
        // console.log(materials);
        let woodFinder = data[i].materials[j];
        if (woodFinder === "wood"){
          console.log(data[i].title + " is made of Wood.");
        }
      }
  }


  // for (var i = 0; i < data.length; i++) {
  //   let woodFinder = data[i].materials[i];
  //   if(woodFinder === "wood"){
  //     console.log(data[i].title)
  //   }

}
  // console.log(wood);



// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:

  for (var i = 0; i < data.length; i++) {
    let materialNum = data[i].materials.length;
    if(materialNum > 7){
      console.log(data[i].title + " " + materialNum + " " + data[i].materials);
    }

  }

}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let totalStock = 0;
  for (var i = 0; i < data.length; i++) {
    let internalStock = data[i].who_made;
    // console.log(internalStock);
    if(internalStock === "i_did"){
      totalStock++;

    }

  }
  // Answer:
console.log(totalStock + " were made by their sellers.");
}
