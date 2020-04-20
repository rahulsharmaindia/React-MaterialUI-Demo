const BASE_URL = "https://qmkjbvj35b.execute-api.eu-north-1.amazonaws.com/";
const GET = "get/";
const USER = "user/";
const INVESTMENTS = "investments/"
const X_API_KEY = "ifGIBNTP5b4TVSbDylpST5vhabFJCSBJ7fqmMSKB";
const headers = {
  "x-api-key": X_API_KEY,
};

export const fetchUserDetails = async (userId) => {
  const response = await fetch(`${BASE_URL}${GET}${USER}${userId}`, {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      return null;
    });
  if (response !== null) {
    const data = await response;
    return data;
  } else {
    return null;
  }
};

export const fetchUserInvestment = async (userId) => {
    const response = await fetch(`${BASE_URL}${GET}${USER}${userId}/${INVESTMENTS}`, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        return null;
      });
    if (response !== null) {
      const data = await response;
      return data;
    } else {
      return null;
    }
}