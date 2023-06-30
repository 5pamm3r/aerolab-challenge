import {Product} from "~/types/typeProduct";

export const fetchRedeem = async (productId: Product["_id"]) => {
  const url = "https://coding-challenge-api.aerolab.co/redeem";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDUyZWM3NzA1YmY4YzAwMWE5ZTA4YjMiLCJpYXQiOjE2ODMxNTYwODd9.S3kCacIJmFLFOVXJx8OxQDiGEcD-wBKM3OQ-24ZYKYE";

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({productId}),
  };

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
