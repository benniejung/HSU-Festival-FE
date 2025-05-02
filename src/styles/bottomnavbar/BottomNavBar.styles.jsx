import styled from "styled-components";
import colors from "../common/colors";

export const BottomNavBarLayout = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 999;
  width: 100%;
  max-width: 420px;
  border-radius: 20px 20px 0px 0px;
  border-top: 1px solid #e0e0e0;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.nav_bg_gray};
`;

export const BottomNavItem = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vh;
  cursor: pointer;
`;

export const BottomNavItemP = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ $active }) =>
    $active ? `${colors.primary_base}` : `${colors.gray}`};
`;
