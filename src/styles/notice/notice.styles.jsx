import styled from "styled-components";
import colors from "../common/colors";
export const NoticeLayout = styled.div`
  width: 100%;
  background: ${colors.bg_gray_light};
  min-height: 100vh;
  padding: 24px 24px 3vh 24px;
`;

export const NoticeHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  height: 48px;
`;

export const BackButton = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.2rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export const NoticeTitle = styled.h2`
  margin: 0 auto;
  font-size: 24px;
  font-weight: 700;
  line-height: 20px; /* 100% */
  letter-spacing: 0.7px;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; /* 클릭 방지 */
`;

export const NoticeCount = styled.div`
  margin-top: 3vh;
  font-size: 1.8rem;
  color: #888;

  span {
    color: ${colors.primary_base};
    font-weight: bold;
  }
`;

export const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 2vh;
`;

export const NoticeCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 20px 18px 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NoticeCardTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  color: #222;
`;

export const NoticeCardDate = styled.div`
  font-size: 1.3rem;
  color: #888;
`;

export const NoticeLoading = styled.div`
  text-align: center;
  color: #888;
  margin-top: 40px;
`;

// NoticeItem.jsx
export const NoticeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 14vh;
  justify-content: center;
  align-items: flex-start;
  border-radius: 15px;
  background: ${colors.white};
  color: #222; // 기본 글자 색
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  padding: 19px;
  transition: all 0.15s ease-in-out;

  &:active {
    background-color: #469AF6;
    color: white;

    * {
      color: white; // 자식 요소에도 적용되도록
    }
  }
`;


export const NoticeItemTitle = styled.div`
  font-size: 1.9rem;
  font-weight: 700;
  color: #222;
  line-height: 1.5; 
`;

export const NoticeItemDate = styled.div`
  font-size: 1.5rem;
  color: #888;
`;

// NoticeDetail.jsx
export const DetailLayout = styled.div`
  background: ${colors.bg_gray_light};
  min-height: 100vh;
  padding: 32px 24px;
`;

export const DetailTitle = styled.h2`
  font-size: 19px;
  font-weight: 700;
  color: #222;
  margin-bottom: 8px;
  margin-top: 6vh;
  line-height: 1.4;
`;

export const DetailDate = styled.div`
  color: #bdbdbd;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const DetailDivider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin-bottom: 18px;
`;

export const DetailContent = styled.div`
  color: #222;
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 40px;
  white-space: pre-line;
`;
