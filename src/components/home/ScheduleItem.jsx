import React from "react";
import * as S from "../../styles/home/home.styles";
import searchIcon from "../../assets/home/search.png";

export default function ScheduleItem({ schedule, onClick }) {
  const { status, time, title } = schedule;

  return (
    <S.ScheduleItem onClick={onClick}>
      <S.ScheduleStatus $status={status}>
        {status}
        <S.IconHint>
          <img src={searchIcon} alt="상세 보기" />
        </S.IconHint>
      </S.ScheduleStatus>
      <S.ScheduleTime>{time}</S.ScheduleTime>
      <S.ScheduleTitle>{title}</S.ScheduleTitle>
    </S.ScheduleItem>
  );
}
