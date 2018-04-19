var shopper = {
  name: "Courtney",
  gender: "Female",
  age: 28,
  isHungry: true,
  groceryCart: ["apples", "salad greens", "avocados", "lemons", "coffee beans"],
  buysOreos: function() {
    if (this.isHungry == true) {
      return this.name + " buys Oreos";
    } else {
      return this.name + " does not buy Oreos";
    }
  }
}


console.log(shopper.buysOreos());
console.log(shopper.groceryCart[2]);
