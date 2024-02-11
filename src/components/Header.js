import React from "react";

const Header = () => {
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 ">
      <div className="flex w-10/12 mx-auto justify-between items-center ">
        <img
          className="w-44 mx-8 "
          alt="logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
    </div>
  );
};

export default Header;
