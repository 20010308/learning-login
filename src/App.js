import {ToastContainer} from "react-toastify";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./component/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
     <ToastContainer/>
    </>
  );
}

export default App;
