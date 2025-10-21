"use client";
import { Link } from "react-router-dom";
import React from "react";
import NavProducts from "./NavProducts";
import {
  blogMenuItems,
  demoItems,
  otherPages,
  productMenuItems,
  shopPages,
} from "@/data/menu";
import Collections from "./Collections";
import { recentBlogPosts } from "@/data/blogs";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  const isMenuActive = (link) => {
    return link.href?.split("/")[1] == pathname.split("/")[1];
  };
  const isMenuParentActive = (menu) => {
    return menu.some((elm) => isMenuActive(elm));
  };
  const isMenuParentActive2 = (menu) => {
    return menu.some((elm) => isMenuParentActive(elm.links));
  };

  return (
    <>
      <li className="menu-item"> <Link to="/" className="item-link"> Home </Link> </li>
      <li className="menu-item"><Link to="/" className="item-link"> About Us </Link></li>
      <li className="menu-item"><Link to="/" className="item-link"> Shop </Link></li>
      <li className="menu-item"><Link to="/" className="item-link"> Best Seller </Link></li>
      <li className="menu-item"><Link to="/" className="item-link"> Contact Us </Link></li>
    </>
  );
}
