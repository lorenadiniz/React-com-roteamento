import axios from "axios";

const httpClient = axios.create({

  baseURL: "https://leilao-rest-api.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
})

export const getAll = () => {
  return httpClient.get("/partipante");
};

export const get = id => {
  return httpClient.get(`/partipante/${id}`);
};

export const create = data => {
  return httpClient.post("/partipante", data);
};

export const update = (id, data) => {
  return httpClient.put(`/partipante/${id}`, data);
};

export const remove = id => {
  return httpClient.delete(`/partipante/${id}`);
};