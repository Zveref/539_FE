import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Header from "./components/Header/Header";
import Login from "./routes/Login";
import Error from "./routes/Error";
import shortid from "shortid";
import Register from "./routes/Register";
import { AuthProvider } from "./context/AuthProvider";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route exac path="/singin" element={<Register />} />
            <Route exac path="/login" element={<Login />} />
            <Route path="/*" element={<Error />} />
            <Route path='/privacy-policy' component={() => { 
                window.location.href = 'https://example.com/1234'; 
                return null;
            }}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
