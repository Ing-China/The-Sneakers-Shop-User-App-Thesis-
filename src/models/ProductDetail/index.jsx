export default class ProductDetail {
  constructor(
    id,
    name,
    description,
    price,
    priceAfterDiscount,
    discountAmount,
    size,
    imageUrl,
    imageGallery,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.priceAfterDiscount = priceAfterDiscount;
    this.discountAmount = discountAmount;
    this.size = size;
    this.imageUrl = imageUrl;
    this.imageGallery = imageGallery;
  }
}
