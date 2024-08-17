export class SellLine {
  constructor(productId, productName, quantity, productPrice, imageUrl) {
    this.productId = productId;
    this.productName = productName;
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.imageUrl = imageUrl;
  }
}

export class Order {
  constructor(id, orderStatus, transactionDate, sellLines) {
    this.id = id;
    this.orderStatus = orderStatus;
    this.transactionDate = transactionDate;
    this.sellLines = sellLines;
  }
}
