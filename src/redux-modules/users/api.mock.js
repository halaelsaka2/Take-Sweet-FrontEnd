export const register = (user) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
    }, 3000);
  });

export const login = (user) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const token = "3a1sd231sd2f1a2s2d32a";
      resolve(token);
    });
  });
};

export const getAllOrders = (orders) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(orders);
    });
  });
};

export const addtoShoppingCart = (product) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(product);
    });
  });
};
