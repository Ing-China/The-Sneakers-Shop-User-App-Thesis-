export default class Profile {
  constructor(
    id,
    name,
    phoneNumber,
    email,
    oldPassword,
    confirmPassword,
    imageUrl,
  ) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.oldPassword = oldPassword;
    this.confirmPassword = confirmPassword;
    this.imageUrl = imageUrl;
  }
}
