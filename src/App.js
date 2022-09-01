import "./App.scss"
import { BrowserRouter,Routes,Route } from "react-router-dom"

import Header from "./Components/Header/Header"
import HomePage from "./Pages/HomePage/HomePage"
import Vid from "./Pages/Vid/Vid"
import UploadPage from "./Pages/UploadPage/UploadPage"
import ErrorPage from "./Pages/ErrorPage/ErrorPage"
import GoodUpload from "./Pages/GoodUpload/GoodUpload"


function App() {




  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/:id" element={<HomePage />} />
        <Route path="/upload" exact element={<UploadPage />} />
        <Route path="/good" exact element={<GoodUpload />} />
        <Route path="*" exact element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
