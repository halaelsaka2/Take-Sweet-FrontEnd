export const getAllBrands = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(brands);
    }, 1000);
  });
export const addCompany = (company) => {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(company), 1000);
  });
};

export const editCompany = (company) => {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(company), 1000);
  });
};

export const deleteCompany = (id) => {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(id), 1000);
  });
};

export const getCompanyById = (id) => {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(company), 1000);
  });
};
export const brands = [
  {
    src: "assets/images/ElAbd.jpg",
    description: "this is a brand",
    price: 20,
    name: "Al Abd",
  },
  {
    src: "assets/images/dd.jpg",
    description: "this is a brand",
    price: 20,
    name: "Dunkin Dounts",
  },
  {
    src: "assets/images/Logo.png",
    description: "this is a brand",
    price: 20,
    name: "La Poire",
  },
  {
    src: "assets/images/Logoo.jpg",
    description: "this is a brand",
    price: 20,
    name: "La Rosetta",
  },
  {
    src: "assets/images/stans-logo.png",
    description: "this is a brand",
    price: 20,
    name: "stan's Dounts",
  },
  {
    src: "assets/images/lo.png",
    description: "this is a brand",
    price: 20,
    name: "Sale Sucre",
  },
  {
    src: "assets/images/dd.jpg",
    description: "this is a brand",
    price: 20,
    name: "Dunkin Dounts",
  },
  {
    src: "assets/images/Logo.png",
    description: "this is a brand",
    price: 20,
    name: "La Poire",
  },
  {
    src: "assets/images/Logoo.jpg",
    description: "this is a brand",
    price: 20,
    name: "La Rosetta",
  },
  {
    src: "assets/images/stans-logo.png",
    description: "this is a brand",
    price: 20,
    name: "stan's Dounts",
  },
  {
    src: "assets/images/lo.png",
    description: "this is a brand",
    price: 20,
    name: "Sale Sucre",
  },
  {
    src: "assets/images/dd.jpg",
    description: "this is a brand",
    price: 20,
    name: "Dunkin Dounts",
  },
  {
    src: "assets/images/Logo.png",
    description: "this is a brand",
    price: 20,
    name: "La Poire",
  },
  {
    src: "assets/images/Logoo.jpg",
    description: "this is a brand",
    price: 20,
    name: "La Rosetta",
  },
  {
    src: "assets/images/stans-logo.png",
    description: "this is a brand",
    price: 20,
    name: "stan's Dounts",
  },
  {
    src: "assets/images/lo.png",
    description: "this is a brand",
    price: 20,
    name: "Sale Sucre",
  },
  {
    src: "assets/images/dd.jpg",
    description: "this is a brand",
    price: 20,
    name: "Dunkin Dounts",
  },
  {
    src: "assets/images/Logo.png",
    description: "this is a brand",
    price: 20,
    name: "La Poire",
  },
  {
    src: "assets/images/Logoo.jpg",
    description: "this is a brand",
    price: 20,
    name: "La Rosetta",
  },
  {
    src: "assets/images/stans-logo.png",
    description: "this is a brand",
    price: 20,
    name: "stan's Dounts",
  },
];

const company = {
  src: "assets/images/stans-logo.png",
  description: "this is a brand",
  price: 20,
  name: "stan's Dounts",
};
