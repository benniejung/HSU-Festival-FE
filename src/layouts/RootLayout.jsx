import React from "react";
import { Outlet } from "react-router-dom";
import * as S from "../styles/layouts/RootLayout.styles";
import BottomNavBar from "../shared/bottomnavbar/BottomNavBar";

export default function RootLayout() {
  return (
    <S.AppBackground>
      <S.AppContainer>
        <S.MainContent>
          <Outlet />
        </S.MainContent>
        <BottomNavBar />
      </S.AppContainer>
    </S.AppBackground>
  );
}
