import axios from "axios";
import { Entry, NewEntryNoId } from "../types";

import { apiBaseUrl } from "../constants";

const create = async (object: NewEntryNoId, id: string) => {
  const { data } = await axios.post<Entry>(
    `${apiBaseUrl}/patients/${id}/entries`,
    object
  );

  return data;
};

export default { create };