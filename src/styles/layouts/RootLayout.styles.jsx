import styled from "styled-components";
import colors from "../common/colors";

export const AppBackground = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${colors.black};
  position: relative;
`;

export const AppContainer = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 420px;
  background-color: ${colors.bg_white};
  position: relative;
`;

export const MainContent = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  //align-items: center;
  height: calc(100vh - 8vh); // 바텀 네비 높이 제외
  overflow-y: auto; // 내부에서만 스크롤이 되도록
`;
