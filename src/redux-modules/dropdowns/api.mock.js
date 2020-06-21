export const getSortList = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(sortByList);
    }, 1000);
  });

export const getCategoryList = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(category);
    }, 1000);
  });

export const sortByList = ["Name", "Price"];

export const category = [{
  id: 0,
  name: "Bakery"
}, {
  id: 1,
  name: "Pastery"
}];