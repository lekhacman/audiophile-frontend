import http from "./http.js";

/**
 * @typedef {object} Asset
 * @property {string} id
 * @property {string} name
 * @property {string} mimeType
 */

/**
 * @return {Promise<Array<Asset>>}
 */
export function list() {
  return http.get("/v1/asset");
}

/**
 * @param {File} file
 * @return {Promise<void>}
 */
export function upload(file) {
  const formData = new FormData();
  formData.append("myFile", file);
  return http.post("/v1/asset", formData);
}
