import axios from "axios";

const url = "http://localhost:3000/product/imageUpload";
export const uploadImageFile = async (image) => {
  const { data } = await axios.post(url, image, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const addNewProduct = async (product) => {
  const data = await axios.post(
    "http://localhost:3000/product/addProduct",
    product
  );
  return data;
};
