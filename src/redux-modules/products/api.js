import axios from "axios";

const url = "http://localhost:3000/product/imageUpload";
export const uploadImageFile = async (image) => {
  const {
    data
  } = await axios.post(url, image, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const addNewProduct = async (product) => {
  const token = JSON.parse(localStorage.getItem("token"))
  console.log(token,"token in add new product");
  
  const data = await axios.post(
    "http://localhost:3000/product/addProduct",
    product, {
      headers: {
        authorization: token,
      },
    }
  );
  return data;
};

const uri = "http://localhost:3000/product";

export const getAllProductsByUserId = async (id, search, categoryId, sortBy) => {
  const {
    data
  } = await axios.get(`${uri}/products/${id}?search=${search}&categoryId=${categoryId}&sortBy=${sortBy}`);
  return data;
};

export const getProductById = async (id) => {
  const {
    data
  } = await axios.get(`${uri}/${id}`);
  return data;
};

export const addProduct = async (product) => {
  const {
    data
  } = await axios.post(`${uri}/addProduct`, product);
  return data;
};

export const deleteProduct = async (id) => {
  const token = JSON.parse(localStorage.getItem("token"))

  const {
    data
  } = await axios.delete(`${uri}/${id}`, {
    headers: {
      authorization: token,
    },
  });

  return data;
};

export const updateProduct = async (id, product) => {
  const token = JSON.parse(localStorage.getItem("token"))

  const {
    data
  } = await axios.patch(`${uri}/${id}`, product, {
    headers: {
      authorization: token,
    },
  });
  console.log(id, "id in api")
  return data;
};


export const getDealsProducts = async (id) => {
  const token = JSON.parse(localStorage.getItem("token"))

  const {
    data
  } = await axios.get(`http://localhost:3000/product/deals/${id}`, {
    headers: {
      authorization: token,
    },
  });
  console.log(id, "id in api")
  return data;
};