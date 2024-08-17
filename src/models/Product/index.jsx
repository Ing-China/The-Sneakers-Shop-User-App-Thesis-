export default class Product {
  constructor(
    id,
    name,
    price,
    priceAfterDiscount,
    discountType,
    discountAmount,
    isFavorite,
    imageUrl,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.priceAfterDiscount = priceAfterDiscount;
    this.discountType = discountType;
    this.discountAmount = discountAmount;
    this.isFavorite = isFavorite;
    this.imageUrl = imageUrl;
  }
}
