
import api from "../../instance/api";
import { GET_CASES_URL, GET_CASES_BY_ID } from "./urls";

export function getCases() {
  return api.get(GET_CASES_URL);
}

export function getPostsId(id) {
  return api.get(`${GET_CASES_BY_ID}/${id}`);
}

