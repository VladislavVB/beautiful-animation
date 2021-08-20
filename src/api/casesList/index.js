
import api from "../../instance/api";
import { GET_CASES_URL } from "./urls";

export function getCases() {
  return api.get(GET_CASES_URL);
}

