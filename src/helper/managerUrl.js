import axios from "axios";

const managerUrl = (path) => {
  // try {
  //   const originalWeb = path
  //   console.log("here link: ", originalWeb)
  //   const test = "http://" + path
  //   return (window.location.assign(test));
  // } catch (error) {
  //   return error;
  // }
  const originalWeb = path
  const test = "http://" + path
  return (window.location.assign(test));
};
export default managerUrl;
