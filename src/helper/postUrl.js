import axios from "axios";

const postUrl = async (path) => {
  let originalWeb;

  const query = `${process.env.REACT_APP_API_URL}${path}`

  try {
    originalWeb = await axios.get(query);
  } catch (error) {
    return error;
  }

  const { short_link, code } = originalWeb.data.result;

  const data = {
    original: path,
    short: short_link,
    code: code
  };

  return data;
};
export default postUrl;
