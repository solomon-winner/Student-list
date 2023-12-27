import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import  "bootstrap/dist/css/bootstrap.min.css"
import Create from "./create"
import Read from "./read"

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path = "/" element = {<Home />} />
    <Route path = "/create" element = {<Create />} />
    <Route path = "/read/:id" element = {<Read />} />

   </Routes>
   </BrowserRouter>
  );
}

export default App;
