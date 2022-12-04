import { useState, useEffect, useContext } from "react";
import postUrl from "../helper/postUrl";
import validator from "validator";
import ShortList from "../components/ShortList/ShortList";
import AuthContext, { AuthProvider } from "../context/AuthProvider";
import pie from "./pie.png"
import char from "./char.png"
import overview from "./overview.png"

const Main = () => {
  const [url, setUrl] = useState("");
  const [valid, setValid] = useState(true);
  const [listUrl, setListUrl] = useState([]);
  const {user, setUser} = useContext(AuthContext)
  // const [user] = useState();

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validator.isURL(url)) {
      const data = await postUrl(url);
      let tempData = listUrl ? [...listUrl] : [];
      tempData.unshift(data);
      if (!user.username) {
        localStorage.setItem("visitorList", JSON.stringify(tempData.slice(0, 4)));
      }else{
        localStorage.setItem("userList", JSON.stringify(tempData));
      }
      setListUrl(tempData);
      setUrl("");
    } else {
      setValid(false);
    }
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
    setValid(true);
  };

  const managerUrls = () => {
    const visitorList = localStorage.getItem("visitorList");
    const userList = localStorage.getItem("userList")
    let initialValue
    if (user.username) {
      initialValue = JSON.parse(userList);
      setListUrl(initialValue);
    } else if (user.username == "") {
      initialValue = JSON.parse(visitorList);
      setListUrl(initialValue);
    }
  };

  useEffect(() => {
    managerUrls();
  }, [user.username]);
  console.log("here: ", user);
  return (
    <>
      <div className="container">

        <div>
          <form className="form-shorter" onSubmit={handleSubmit}>
            <input
              type="text"
              value={url}
              placeholder="Original Long URL"
              id="url"
              className="input-shorter"
              onChange={handleChange}
            ></input>
            <button className=" button button-shorter">cut off</button>
            {!valid ? <p className="error-input">Please use a valid link!</p> : null}
          </form>
        </div>

        {listUrl && listUrl.length ? <ShortList url={listUrl}></ShortList> : null}
        {user.username && <img src={overview} alt=""/>}
        {user.username && <img src={pie} alt=""/>}
        {user.username && <img src={char} alt=""/>}
      </div>
    </>
  );
};

export default Main;
