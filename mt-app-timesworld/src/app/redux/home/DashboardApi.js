import axios from "axios";

export const fetchCountriList = () => {
  const URL = "https://restcountries.com/v2/all?fields=name,region,flag";

  return axios
    .get(URL)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.message };
    });
};
