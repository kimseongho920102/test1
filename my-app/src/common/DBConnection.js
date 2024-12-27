import axios from "axios";

// Axios 인스턴스 생성
const API_URL = process.env.REACT_APP_API_URL || "http://34.64.32.164:8080";

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

  /**
   * GET 요청 메서드
   * @param {string} url - 요청 경로
   * @param {object} [params] - 쿼리 파라미터 객체 (옵션)
   * @returns {Promise<object>} - 응답 데이터
   */

export const get = (url, params) => {
  return instance.get(url, { params })
    .then(response => response.data)
    .catch(error => { throw error; });
};

  /**
   * POST 요청 메서드
   * @param {string} url - 요청 경로
   * @param {object} [data] - 요청 본문 데이터 (옵션)
   * @returns {Promise<object>} - 응답 데이터
   */

export const post = (url, data) => {
  return instance.post(url, data)
    .then(response => response.data)
    .catch(error => { throw error; });
};

  /**
   * PUT 요청 메서드
   * @param {string} url - 요청 경로
   * @param {object} [data] - 요청 본문 데이터 (옵션)
   * @returns {Promise<object>} - 응답 데이터
   */

export const put = (url, data) => {
  return instance.put(url, data)
    .then(response => response.data)
    .catch(error => { throw error; });
};

 /**
   * DELETE 요청 메서드
   * @param {string} url - 요청 경로
   * @returns {Promise<object>} - 응답 데이터
   */
  
export const del = (url) => {
  return instance.delete(url)
    .then(response => response.data)
    .catch(error => { throw error; });
};

// 모든 메서드를 하나의 객체로 내보내기
const DBConnection = {
  get,
  post,
  put,
  delete: del,
};

export default DBConnection;
