import React from "react";

const Navbar = () => {
  return (
    <div className="h-[10vh] bg-black text-white text-[20px] py-5 px-[40px] flex justify-end ">
      <ul className="flex gap-[60px]">
        <li className="list-none">
          <a href="#" className="text-white no-underline">
            Home
          </a>
        </li>
        <li className="list-none">
          <a href="#" className="text-white no-underline">
            About
          </a>
        </li>
        <li className="list-none">
          <a href="#" className="text-white no-underline">
            Projects
          </a>
        </li>
        <li className="list-none">
          <a href="#" className="text-white no-underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
