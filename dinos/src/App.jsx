import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Home from "./Pages/Home.jsx";
import Details from "./Pages/Details.jsx";
import NotFound from "./Pages/NotFound.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
};

const App =() => {
  return (
    <>
    <Routes>
       <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="/Details" element={<Details />} />
           <Route path="*" element={<NotFound />} />
       </Route>
    </Routes>
    </>
  )
};

export default App;
