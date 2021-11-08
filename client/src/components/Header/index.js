import React, { useState, useEffect, useCallback } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";


import { logout } from "../../redux/reducers/slices/auth";
import EventBus from "../../common/EventBus";
import "./headers.css";
const Header = () => {

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.value)
    }
  };


  return (
    <div>
        <nav class="py-2 bg-set border-bottom">
        <div class="container d-flex flex-wrap">
            
        <ul class="nav me-auto">
          <li><a href="#" class="nav-link link-dark px-2 active text-dark" aria-current="page">Home</a></li>
          <li><a href="#" class="nav-link link-dark px-2 active text-dark" >Explore</a></li>
          <li><a href="#" class="nav-link link-dark px-2 active text-dark" >Stats</a></li>
          <li><a href="#" class="nav-link link-dark px-2 active text-dark" >Resources</a></li>
          <li><a href="/create-nft" class="nav-link link-dark px-2 active text-dark" >Create</a></li>
         </ul>
         <form class="nav me-auto ">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search" onKeyDown={handleKeyDown}/>
        </form>
          {currentUser ? (
          <ul class="nav ">
          <li class="nav-item">
            <Link to={"/profile"} class="nav-link link-dark px-2 text-dark">{currentUser.username}</Link>
          </li>
          <li class="nav-item">
            <a href="/" class="nav-link link-dark px-2 text-dark" onClick={logOut}>LogOut</a>
          </li>
          </ul>
          ) : (
          <ul class="nav">
            <li class="nav-item">
              <Link to={"/login"} class="nav-link link-dark px-2 text-dark">
                Login
              </Link>
            </li>

            <li class="nav-item">
              <Link to={"/register"} class="nav-link link-dark px-2 text-dark">
                Sign Up
              </Link>
            </li>
          </ul>
        )}
            </div>

        </nav>
        
    </div>

    // <div classname={classes.headpage}>
    // <nav className="navbar navbar-expand navbar-light bg-light">
    //   <div className="navbar-left ">
    //     <Link to={"/"} className="navbar-brand">
    //       Demo
    //     </Link>
    //    </div>

    //    <div>
    //    <Input type="search" class="form-control" placeholder="Search..." aria-label="Search"  onKeyDown={handleKeyDown}/>

    //     </div>
     
      // {currentUser ? (
      //   <div className="navbar-nav ml-auto">
      //     <li className="nav-item">
      //       <Link to={"/profile"} className="nav-link">
      //         {currentUser.username}
      //       </Link>
      //     </li>
      //     <li className="nav-item">
      //       <a href="/login" className="nav-link" onClick={logOut}>
      //         LogOut
      //       </a>
      //     </li>
      //   </div>
      // ) : (
      //   <div className="navbar-nav ml-auto">
      //     <li className="nav-item">
      //       <Link to={"/login"} className="nav-link">
      //         Login
      //       </Link>
      //     </li>

      //     <li className="nav-item">
      //       <Link to={"/register"} className="nav-link">
      //         Sign Up
      //       </Link>
      //     </li>
      //   </div>
      // )}

    
    // </nav>
    // </div>
  );
};

export default Header;
