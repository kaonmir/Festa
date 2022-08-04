const axios = require("axios").default;

// Make a request for a user with a given ID
export function getData(url: string): string {
  return axios
    .get(url)
    .then((response: any) => response.data as string)
    .catch((error: any) => console.log(error));
}
