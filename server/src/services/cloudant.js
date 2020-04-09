import axios from "axios";
import {
  CLOUDANT_URL,
  CLOUDANT_USERNAME,
  CLOUDANT_PASSWORD,
  CLOUDANT_DONATIONS_DB,
  CLOUDANT_REQUESTS_DB,
} from "../config";

if (!CLOUDANT_URL) {
  console.error(
    "Please put the URL of your Cloudant instance in an environment variable 'CLOUDANT_URL'"
  );
  process.exit(1);
}

const axiosInstance = axios.create({
  baseURL: CLOUDANT_URL,
  auth: {
    username: CLOUDANT_USERNAME,
    password: CLOUDANT_PASSWORD,
  },
  headers: {
    "Content-Type": "application/json",
  },
});

const createCloudantAPI = (db) => {
  const fetchOne = async (id) => {
    const response = await axiosInstance({
      method: "GET",
      url: `/${db}/${id}`,
    }).catch((error) => {
      throw error;
    });
    return response.data;
  };

  const query = async (query) => {
    const response = await axiosInstance({
      method: "POST",
      url: `/${db}/_find`,
      data: query,
    }).catch((error) => {
      throw error;
    });
    return response.data.docs;
  };

  const updateOne = async (document) => {
    const response = await axiosInstance({
      method: "PUT",
      url: `/${db}/${document._id}`,
      data: document,
    }).catch((error) => {
      throw error;
    });
    return response.data;
  };

  const deleteOne = async (id) => {
    const document = await fetchOne(id);
    const response = await axiosInstance({
      method: "DELETE",
      url: `/${db}/${document._id}`,
      params: {
        rev: document._rev,
      },
    }).catch((error) => {
      throw error;
    });
    return response.data;
  };

  const createOne = async (payload) => {
    const response = await axiosInstance({
      method: "POST",
      url: `/${db}`,
      data: payload,
    }).catch((error) => {
      throw error;
    });
    return response.data;
  };

  const fetchAll = async () => {
    const response = await axiosInstance({
      method: "GET",
      url: `/${db}/_all_docs`,
      params: {
        include_docs: true,
      },
    }).catch((error) => {
      throw error;
    });
    return response.data.rows.map((document) => {
      return document.doc;
    });
  };

  return {
    fetchOne,
    query,
    updateOne,
    deleteOne,
    createOne,
    fetchAll,
  };
};

export const donationsApi = createCloudantAPI(CLOUDANT_DONATIONS_DB);
export const requestsApi = createCloudantAPI(CLOUDANT_REQUESTS_DB);
