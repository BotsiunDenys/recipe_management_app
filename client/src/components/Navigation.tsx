import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { checkAuth, logout } from "../store/slices/authSlice";
import "../style/nav.css";

const Navigation = () => {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  return (
    <>
      <nav className="bg-slate-900 text-white">
        <ul className="flex gap-6 justify-center p-5">
          <li>
            <Link className="navLink" to=".">
              Home
            </Link>
          </li>
          <li>
            <Link className="navLink" to="/app">
              App
            </Link>
          </li>
          <li className="navLink">
            <Link className="navLink" to="/saved">
              Favorite
            </Link>
          </li>
          {isLogged ? (
            <li className="navLink">
              <button onClick={() => dispatch(logout())} className="navLink">
                Log out
              </button>
            </li>
          ) : (
            <li className="navLink">
              <Link className="navLink" to="/authorization">
                Log in
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
