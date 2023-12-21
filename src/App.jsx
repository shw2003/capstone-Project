import { Routes, Route, Outlet } from "react-router-dom";
import "./categories.style.scss";
import Home from "../src/routes/home/home.component";
import Navigation from "./routes/navigation/navigation.components";
import SignIn from "./routes/sign-in/sign-in.component";
const Shop = () => {
  return <h1>I am shop</h1>;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
        {/* Make "shop" a sibling route to "home" */}\
      </Routes>
    </>
  );
};

export default App;
