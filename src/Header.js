import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


function Header({ spotify }) {
  const [{ user }, ] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Albums "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar alt={user?.zee} src="https://instagram.fixu1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120144538_662474197725478_1723620364324831664_n.jpg?_nc_ht=instagram.fixu1-1.fna.fbcdn.net&_nc_ohc=kf3dxw7g804AX9Ww-bw&oh=ec14d3539ec944db7927fbbde7a2d7af&oe=5FAF9988" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
