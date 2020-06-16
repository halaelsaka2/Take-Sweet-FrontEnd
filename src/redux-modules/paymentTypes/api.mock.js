export const getPaymentTypes = () =>
  new Promise((resolve, reject) => {
    setTimeout(() =>
      resolve(paymentTypes), 1000);
  });


export const addPaymentType = (paymentType) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(paymentType), 1000);
  });

export const editPaymentType = (paymentType) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(paymentType), 1000);
  });

export const deletePaymentType = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(id), 1000);
  });

export const getPaymentTypeById = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(paymentType), 1000);
  });

export const paymentTypes = [{
  id: 1,
  src: "assets/images/Cash.png",
  name: "Cash"
}, {
  id: 2,
  src: "assets/images/visa.png",
  name: "Visa"
}, {
  id: 3,
  src: "assets/images/Credit Card.png",
  name: "Credit Card"
}, {
  id: 4,
  src: "assets/images/mobile-payment.jpg",
  name: "Mobile payment"
}, {
  id: 5,
  src: "assets/images/E-wallet.jpg",
  name: "E-Wallet"
}, {
  id: 6,
  src: "assets/images/Bank.png",
  name: "Bank Transfer"
}]
const paymentType = {
  id: 7,
  src: "assets/images/Cash.png",
  name: "Cash"

}