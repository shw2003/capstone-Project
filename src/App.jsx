import { Routes, Route, Outlet } from "react-router-dom";
import "./categories.style.scss";
import Home from "../src/routes/home/home.component";

const Shop = () => {
  return <h1>I am shop</h1>;
};

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>Navigations</h1>
        <Outlet />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
        {/* Make "shop" a sibling route to "home" */}\
      </Routes>
    </>
  );
};

export default App;
