import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reactions from "./pages/Reactions";
import Entertainments from "./pages/Entertainments";
import Sports from "./pages/Sports";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import User from "./pages/User";
import Meme from "./pages/Meme";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reactions" element={<Reactions />} />
        <Route path="/entertainments" element={<Entertainments />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/user" element={<User />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/meme/:id" element={<Meme />} />
      </Routes>
    </div>
  );
}

export default App;
