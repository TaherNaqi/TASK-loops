/**
 * 
 * In this function, you will have to draw a vertical line with `n` length
 * for example `drawVLine(5) should print out 
  # 
  # 
  # 
  # 
  # 
 */
function print(text) {
  process.stdout.write(text);
}
// Continue the code here
function drawVLine(n) {
  for (let i = 0; i < n; i++) {
    console.log("#");
  }
}

drawTree(3);
/**
 *
 * In this function, you will have to draw a horizontal line with `n` length
 * for example `drawHLine(5) should print out # # # # # (there are spaces here!)
 */
function drawHLine(n) {
  // Continue the code here
  for (let index = 0; index < n; index++) {
    print("#");
  }
}

/**
 * 
 * In this function, you will have to draw a square with a length of `n` 
 * for example `drawSquare(5) should print out 
 
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #

 */
function drawSquare(n) {
  // Continue the code here
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      print("# ");
    }
    console.log();
  }
}

/**
 * 
 * In this function, you will have to draw a triangle with a length of `n` 
 * for example `drawLeftTriangle(5) should print out 
 
  #  
  #  #  
  #  #  #  
  #  #  #  #  
  #  #  #  #  #

 */
function drawLeftTriangle(n) {
  // Continue the code here
  for (let r = 0; r < n; r++) {
    for (let c = 0; c <= r; c++) {
      print("# ");
    }
    console.log();
  }
}

//drawLeftTriangle(4);

/**
 * 
 * In this function, you will have to draw a tree with a length of `n` 
 * for example `drawTree(5) should print out 
 
     #   
    # #   
   # # # 
  # # # # 
     #

 */
function drawTree(n) {
  // Continue the code here
  //row
  for (let r = 0; r < n; r++) {
    //Spaces
    for (let s = n - 1; s >= r; s--) {
      print(" ");
    }
    //column
    for (let c = 0; c <= r; c++) {
      print("# ");
    }
    console.log();
  }
  for (let i = 0; i < n; i++) {
    print(" ");
  }
  console.log("#");
}

/**
 *
 * In this example, you will create 4 arrays, `yellowCards`, `greenCards`, `redCards`, `blueCards`
 * (BONUS) Try to optimize the code with doing it with one gigantic loop
 */
function fillUnoDeck() {
  let greenCards = [];
  let yellowCards = [];
  let redCards = [];
  let blueCards = [];
  // Fill the cards here
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 2; j++) {
      greenCards.push(i);
      yellowCards.push(i);
      redCards.push(i);
      blueCards.push(i);
    }
  }
  console.log(greenCards, yellowCards, redCards, blueCards);
}
