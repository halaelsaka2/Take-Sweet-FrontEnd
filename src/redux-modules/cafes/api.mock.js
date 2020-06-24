export const getCafes = () =>
    new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve(cafes), 1000);
    });


export const addCafe = (cafe) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(cafe), 1000);
    });

export const editCafe = (cafe) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(cafe), 1000);
    });

export const deleteCafe = (id) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(id), 1000);
    });

export const getCafeById = (id) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(cafe), 1000);
    });

export const cafes = [{
        id: 1,
        orders: [1, 2, 3, 4, 5],
        description: "this is moka cafe",
    },
    {
        id: 2,
        orders: [6, 7, 8, 9, 10],
        description: "this is moka cafe",
    },
    {
        id: 3,
        orders: [11, 12, 13, 14, 15],
        description: "this is moka cafe",
    }
];

const cafe = {
    id: 10,
    orders: [1, 2, 3, 4, 5],
    description: "this is moka cafe",
}