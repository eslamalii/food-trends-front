import axios from "axios";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmVkN2Y4ZjBlNGEyOTc0MmNiYTkyMmMiLCJpYXQiOjE2NTk3MzE4NTUsImV4cCI6MTY1OTk5MTA1NX0.tOMKnVocs68gTXKvepMWhrnQ2-UD6oZInrhtnhHS5co";

const fetchReviewsById = async (productId) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/products/${productId}/reviews`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const addReview = async (reviewDetails) => {
  try{
    const response = await axios.post(
      "http://localhost:5000/api/v1/reviews",
      reviewDetails,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }

};

export default { fetchReviewsById, addReview };
