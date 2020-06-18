export const getAllOrders = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(orders);
    }, 1000);
  });
export const deleteOrder = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
export const Add = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(order);
    }, 1000);
  });

const orders = [
  {
    id: 1,
    status: "Waiting",
    date: "20/6/2020",
    rows: [
      ["Caramle Cake", "10", "30", "300"],
      ["Figs Tart", "10", "20", "200"],
    ],
    companyLogoImgSrc: "",
  },
  {
    id: 2,
    status: "Arrived",
    date: "20/5/2020",
    rows: [
      ["cake", "20", "100", "2000"],
      ["cake", "30", "100", "3000"],
      ["cake", "40", "100", "4000"],
      ["cake", "50", "100", "5000"],
    ],
    companyLogoImgSrc: "",
  },
  {
    id: 3,
    status: "Arrived",
    date: "20/5/2020",
    rows: [
      ["cake", "20", "100", "2000"],
      ["cake", "30", "100", "3000"],
      ["cake", "40", "100", "4000"],
      ["cake", "50", "100", "5000"],
    ],
    companyLogoImgSrc: "",
  },
  {
    id: 4,
    status: "Arrived",
    date: "20/5/2020",
    rows: [
      ["cake", "20", "100", "2000"],
      ["cake", "30", "100", "3000"],
      ["cake", "40", "100", "4000"],
      ["cake", "50", "100", "5000"],
    ],
    companyLogoImgSrc: "",
  },
];
const order = {
  id: 5,
  status: "Arrived",
  date: "20/5/2020",
  rows: [
    ["product", "Quantity", "Price Per Piece", "Total Price"],
    ["cake", "20", "100", "2000"],
    ["cake", "30", "100", "3000"],
    ["cake", "40", "100", "4000"],
    ["cake", "50", "100", "5000"],
  ],
  companyLogoImgSrc: "",
};
