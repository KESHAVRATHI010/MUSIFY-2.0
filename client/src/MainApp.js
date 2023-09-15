import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./MainApp.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { isLoggedIn } from "./store/thunks/user";
import Nav from "./components/nav/Nav";
import Player from "./components/player/Player";
import App from "./components/app/App";
import Home from "./components/app/Home/Home";
import Artist from "./components/app/Artist/Artist";
import Playlist from "./components/app/Playlist/Playlist";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Profile from "./components/app/Profile/Profile";
import Search from "./components/app/Search/Search";

function MainApp() {
  const [loading, setLoading] = useState(true);

  // Redux
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(isLoggedIn());
  }, []);

  useEffect(() => {
    if (user.auth === true) {
      setLoading(false);
    }
  }, [user]);

  return (
    <BrowserRouter>
      <div className="main-app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <App>
                  <Home />
                </App>

                <Player />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                <Nav />
                <App>
                  <Search />
                </App>

                <Player />
              </>
            }
          />
          <Route
            path="/artist/:id"
            element={
              <>
                <Nav />
                <App>
                  <Artist />
                </App>

                <Player />
              </>
            }
          />
          <Route
            path="/playlist/:id"
            element={
              <>
                <Nav />
                <App>
                  <Playlist />
                </App>

                <Player />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Nav />
                <App>
                  <Profile />
                </App>

                <Player />
              </>
            }
          ></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MainApp;
