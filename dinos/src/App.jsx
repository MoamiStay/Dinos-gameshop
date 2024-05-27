import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Pages/Home.jsx";
import Dogs from "./Pages/Dogs.jsx";
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
    <p className='headerRed'>Dinosaurs</p>
    <p className='copytext'>some smaller Themed text</p>
    <Routes>
       <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="/Dogs" element={<Dogs />} />
           <Route path="*" element={<NotFound />} />
       </Route>
    </Routes>
    </>
  )
};

export default App;
