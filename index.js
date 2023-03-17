function purchasingBook(
  bookDetails,
  discountPercentage,
  taxPercentage,
  stock,
  purchasedAmount,
  credit
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

  const pricePerTerm = totalPrice / credit.length;
  const creditDetails = credit.map((term, index) => {
    const termPrice =
      index + 1 === credit.length
        ? totalPrice - pricePerTerm * index
        : pricePerTerm;
    return {
      term: index + 1,
      dueDate: term,
      price: termPrice.toFixed(2),
    };
  });

  const result = {
    bookDetails,
    discountPercentage,
    taxPercentage,
    stock,
    purchasedAmount,
    totalPrice,
    stockLeft,
    credit: creditDetails,
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

const creditTerms = [
  "2023-04-01",
  "2023-05-01",
  "2023-06-01",
  "2023-07-01",
  "2023-08-01",
  "2023-09-01",
];

const purchasingDetails = purchasingBook(
  book,
  discount,
  tax,
  stock,
  purchasedAmount,
  creditTerms
);

console.log("Credit Details:");
purchasingDetails.credit.forEach((term) => {
  console.log(
    `Term ${term.term}: Due on ${term.dueDate}, Price: $${term.price}`
  );
});
