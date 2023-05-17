// computed
totalPrice: function () {
    var total = 0;
    for (var i = 0; i < this.cartItems.length; i++) {
      total += this.cartItems[i].price * this.cartItems[i].count;
    }
    return total;
  }