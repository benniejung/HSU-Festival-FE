import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../styles/home/home.styles";
import TimeTable from "../../components/home/TimeTable";
import InfoCard from "../../components/home/InfoCard";

// images
import FESTIVALMAINBANNER from "../../assets/home/main-banner.png";
import FESTIVALMAINBANNERSPARKLES from "../../assets/home/sparkles.png";
import NOTIFYINFO from "../../assets/home/notify-info.png";
import SITEINFO from "../../assets/home/site-info.png";
import CHATBOT from "../../assets/home/chatbot.png";

export default function Home() {
  const navigate = useNavigate();

  const handleChatbotClick = () => {
    navigate("/chatbot"); // 채팅봇 페이지로 이동
  };
  return (
    <S.HomeLayout>
      <S.FestivalMainBanner>
        <S.FestivalMainBannerImage
          src={FESTIVALMAINBANNER}
          alt="festivalMainBanner"
        />
        <S.FestivalMainBannerSparkles
          src={FESTIVALMAINBANNERSPARKLES}
          alt="sparkles"
        />
      </S.FestivalMainBanner>
      <S.MainContentContainer>
        <TimeTable />
        <S.InfoCardContainer>
          <InfoCard
            img={NOTIFYINFO}
            text="공지 확인하러 가기"
            onClick={() => navigate("/notice")}
          />
          <InfoCard
            img={SITEINFO}
            text="사이트 정보"
            onClick={() => navigate("/credits")}
          />
        </S.InfoCardContainer>
      </S.MainContentContainer>
      <S.ChatbotButton
        onClick={handleChatbotClick}
        aria-label="채팅봇으로 이동"
      >
        <img src={CHATBOT} alt="chatbot" />
      </S.ChatbotButton>
    </S.HomeLayout>
  );
}
