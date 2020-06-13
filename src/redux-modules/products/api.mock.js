export const getSortList = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(sortByList);
    }, 1000);
  });
export const getAllProducts = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
export const getAllBrands = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(brands);
    }, 1000);
  });
export const getCategoryList = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(category);
    }, 1000);
  });
export const addProduct = (product) => {
  const newProduct = product;
  new Promise((resolve, reject) => {
    setTimeout(() => newProduct, 1000);
  });
};
export const products = [{
    src: "assets/images/Product-1.jpg",
    amount: 5465,
    name: "Caramel Cake"
  },
  {
    src: "assets/images/Product-2.jpg",
    amount: 5465,
    name: "Figs Tart"
  },
  {
    src: "assets/images/cake6x6.jpg",
    amount: 5465,
    name: "Cup Cake"
  },
  {
    src: "assets/images/Product-3.jpg",
    amount: 5465,
    name: "Strawberry Cake"
  },
  {
    src: "assets/images/Product-4.jpg",
    amount: 5465,
    name: "Pastry Cream"
  }, {
    src: "assets/images/Product-1.jpg",
    amount: 5465,
    name: "Caramel Cake"
  },
  {
    src: "assets/images/Product-2.jpg",
    amount: 5465,
    name: "Figs Tart"
  },
  {
    src: "assets/images/cake6x6.jpg",
    amount: 5465,
    name: "Cup Cake"
  },
  {
    src: "assets/images/Product-3.jpg",
    amount: 5465,
    name: "Strawberry Cake"
  },
  {
    src: "assets/images/Product-4.jpg",
    amount: 5465,
    name: "Pastry Cream"
  }, {
    src: "assets/images/Product-1.jpg",
    amount: 5465,
    name: "Caramel Cake"
  },
  {
    src: "assets/images/Product-2.jpg",
    amount: 5465,
    name: "Figs Tart"
  },
  {
    src: "assets/images/cake6x6.jpg",
    amount: 5465,
    name: "Cup Cake"
  },
  {
    src: "assets/images/Product-3.jpg",
    amount: 5465,
    name: "Strawberry Cake"
  },
  {
    src: "assets/images/Product-4.jpg",
    amount: 5465,
    name: "Pastry Cream"
  }, {
    src: "assets/images/Product-1.jpg",
    amount: 5465,
    name: "Caramel Cake"
  },
  {
    src: "assets/images/Product-2.jpg",
    amount: 5465,
    name: "Figs Tart"
  },
  {
    src: "assets/images/cake6x6.jpg",
    amount: 5465,
    name: "Cup Cake"
  },
  {
    src: "assets/images/Product-3.jpg",
    amount: 5465,
    name: "Strawberry Cake"
  },
  {
    src: "assets/images/Product-4.jpg",
    amount: 5465,
    name: "Pastry Cream"
  },
];

export const brands = [{
  src: "assets/images/lo.png",
  description: "this is a brand",
  name: "Sale Sucre"
}, {
  src: "assets/images/dd.jpg",
  description: "this is a brand",
  name: "Dunkin Dounts"
}, {
  src: "assets/images/Logo.png",
  description: "this is a brand",
  name: "La Poire"
}, {
  src: "assets/images/Logoo.jpg",
  description: "this is a brand",
  name: "La Rosetta"
}, {
  src: "assets/images/stans-logo.png",
  description: "this is a brand",
  name: "stan's Dounts"
}, {
  src: "assets/images/lo.png",
  description: "this is a brand",
  name: "Sale Sucre"
}, {
  src: "assets/images/dd.jpg",
  description: "this is a brand",
  name: "Dunkin Dounts"
}, {
  src: "assets/images/Logo.png",
  description: "this is a brand",
  name: "La Poire"
}, {
  src: "assets/images/Logoo.jpg",
  description: "this is a brand",
  name: "La Rosetta"
}, {
  src: "assets/images/stans-logo.png",
  description: "this is a brand",
  name: "stan's Dounts"
}, {
  src: "assets/images/lo.png",
  description: "this is a brand",
  name: "Sale Sucre"
}, {
  src: "assets/images/dd.jpg",
  description: "this is a brand",
  name: "Dunkin Dounts"
}, {
  src: "assets/images/Logo.png",
  description: "this is a brand",
  name: "La Poire"
}, {
  src: "assets/images/Logoo.jpg",
  description: "this is a brand",
  name: "La Rosetta"
}, {
  src: "assets/images/stans-logo.png",
  description: "this is a brand",
  name: "stan's Dounts"
}, {
  src: "assets/images/lo.png",
  description: "this is a brand",
  name: "Sale Sucre"
}, {
  src: "assets/images/dd.jpg",
  description: "this is a brand",
  name: "Dunkin Dounts"
}, {
  src: "assets/images/Logo.png",
  description: "this is a brand",
  name: "La Poire"
}, {
  src: "assets/images/Logoo.jpg",
  description: "this is a brand",
  name: "La Rosetta"
}, {
  src: "assets/images/stans-logo.png",
  description: "this is a brand",
  name: "stan's Dounts"
}, ];

export const sortByList = [
  "Name", "Price"

];

export const category = [
  "Bakery", "Pastery", "Coffee"

];