import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "../../styles/bottomnavbar/BottomNavBar.styles";

// images
import HOME from "../../assets/bottomnavbar/home.svg";
import INFO from "../../assets/bottomnavbar/info.svg";
import COMMUNITY from "../../assets/bottomnavbar/community.svg";
import HOMESELECTED from "../../assets/bottomnavbar/home-selected.svg";
import INFOSELECTED from "../../assets/bottomnavbar/info-selected.svg";
import COMMUNITYSELECTED from "../../assets/bottomnavbar/community-selected.svg";

export default function BottomNavBar() {
  const location = useLocation();
  return (
    <S.BottomNavBarLayout>
      <Link to="/">
        <S.BottomNavItem>
          <img src={location.pathname === "/" ? HOMESELECTED : HOME} />
          <S.BottomNavItemP $active={location.pathname === "/"}>
            홈
          </S.BottomNavItemP>
        </S.BottomNavItem>
      </Link>

      <Link to="/booth">
        <S.BottomNavItem>
          <img
            src={location.pathname === "/booth" ? INFOSELECTED : INFO}
            alt="부스정보"
          />
          <S.BottomNavItemP $active={location.pathname === "/booth"}>
            부스정보
          </S.BottomNavItemP>
        </S.BottomNavItem>
      </Link>
      <Link to="/community">
        <S.BottomNavItem>
          <img
            src={
              location.pathname === "/community" ? COMMUNITYSELECTED : COMMUNITY
            }
            alt="커뮤니티"
          />
          <S.BottomNavItemP $active={location.pathname === "/community"}>
            커뮤니티
          </S.BottomNavItemP>
        </S.BottomNavItem>
      </Link>
    </S.BottomNavBarLayout>
  );
}
