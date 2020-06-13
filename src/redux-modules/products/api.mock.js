export const getSortList = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(sortByList);
    }, 3000);
  });
export const getAllProducts = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
export const getCategoryList = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(category);
    }, 3000);
  });
export const addProduct = (product) => {
  const newProduct = product;
  new Promise((resolve, reject) => {
    setTimeout(() => newProduct, 3000);
  });
};
export const products = [
  { src: "assets/images/Product-1.jpg", amount: 5465, name: "ahmed" },
  { src: "assets/images/Product-1.jpg", amount: 5465, name: "ahmed" },
  { src: "assets/images/Product-1.jpg", amount: 5465, name: "ahmed" },
  { src: "assets/images/Product-1.jpg", amount: 5465, name: "ahmed" },
  { src: "assets/images/Product-1.jpg", amount: 5465, name: "ahmed" },
  { src: "assets/images/Product-1.jpg", amount: 5465, name: "ahmed" },
];

export const sortByList = [
  "ahmed",
  "ahmed",
  "ahmed",
  "ahmed",
  "ahmed",
  "ahmed",
  "ahmed",
  "ahmed",
];

export const category = [
  "category",
  "category",
  "category",
  "category",
  "category",
  "category",
  "category",
  "category",
  "category",
];
