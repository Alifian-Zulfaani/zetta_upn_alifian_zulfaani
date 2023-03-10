// Book Purchasing Function
function purchasingBook(bookDetails, discountPercentage, taxPercentage) {
  const BOOK_PRICE = bookDetails.price;
  const DISCOUNT_RATE = discountPercentage / 100;
  const TAX_RATE = taxPercentage / 100;

  const discountAmount = BOOK_PRICE * DISCOUNT_RATE;
  const priceAfterDiscount = BOOK_PRICE - discountAmount;
  const taxAmount = priceAfterDiscount * TAX_RATE;
  const priceAfterTax = priceAfterDiscount + taxAmount;

  const result = {
    bookDetails,
    discountPercentage,
    taxPercentage,
    discountAmount,
    priceAfterDiscount,
    taxAmount,
    priceAfterTax,
  };

  return result;
}

const book = {
  title: "Laskar Pelangi",
  author: "Andrea Hirata",
  price: 8.41,
};

const discount = 20;
const tax = 10;

const purchasingDetails = purchasingBook(book, discount, tax);

console.log(purchasingDetails);
