const axios = require("axios");

const axiosclient = axios.create({
  timeout: 1000 * 20,
});

exports.GET_API_SW = async (id) => {
  try {
    const _id = parseInt(id);
    const { data } = await axiosclient({
      method: "GET",
      url: `/people/${_id}`,
      baseURL: process.env.URL_STARTWARS,
    });

    return {
      status: true,
      message: "success",
      data,
    };
  } catch (error) {
    console.error("error", error);
    throw new Error({
      status: false,
      message: "Some error",
    });
  }
};
