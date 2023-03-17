function purchasingBook(
  bookDetails,
  discountPercentage,
  taxPercentage,
  stock,
  purchasedAmount
) {
  const BOOK_PRICE = bookDetails.price;
  const DISCOUNT_RATE = discountPercentage / 100;
  const TAX_RATE = taxPercentage / 100;
  let stockLeft = stock;
  let totalPrice = 0;

  for (let i = 1; i <= purchasedAmount; i++) {
    if (stockLeft === 0) {
      console.log(`Sorry, ${bookDetails.title} is out of stock.`);
      break;
    }

    const discountAmount = BOOK_PRICE * DISCOUNT_RATE;
    const priceAfterDiscount = BOOK_PRICE - discountAmount;
    const taxAmount = priceAfterDiscount * TAX_RATE;
    const priceAfterTax = priceAfterDiscount + taxAmount;
    totalPrice += priceAfterTax;
    stockLeft--;
  }

  const result = {
    bookDetails,
    discountPercentage,
    taxPercentage,
    stock,
    purchasedAmount,
    totalPrice,
    stockLeft,
  };

  if (stockLeft > 0) {
    console.log(
      `There are ${stockLeft} ${bookDetails.title} books left in stock.`
    );
  } else {
    console.log(`Sorry, ${bookDetails.title} is out of stock.`);
  }

  return result;
}

const book = {
  title: "Laskar Pelangi",
  author: "Andrea Hirata",
  price: 8.41,
};

const discount = 20;
const tax = 10;
const stock = 10;
const purchasedAmount = 12;

const purchasingDetails = purchasingBook(
  book,
  discount,
  tax,
  stock,
  purchasedAmount
);

console.log(
  `Book Details: ${purchasingDetails.bookDetails.title} by ${purchasingDetails.bookDetails.author}`
);
console.log(`Discount Percentage: ${purchasingDetails.discountPercentage}%`);
console.log(`Tax Percentage: ${purchasingDetails.taxPercentage}%`);
console.log(`Stock: ${purchasingDetails.stock}`);
console.log(`Purchased Amount: ${purchasingDetails.purchasedAmount}`);
console.log(`Total Price: $${purchasingDetails.totalPrice.toFixed(2)}`);
console.log(`Stock Left: ${purchasingDetails.stockLeft}`);
