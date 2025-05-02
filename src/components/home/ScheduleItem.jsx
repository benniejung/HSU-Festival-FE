import React from "react";
import * as S from "../../styles/home/home.styles";

export default function ScheduleItem({ schedule }) {
  const { status, time, title } = schedule;

  return (
    <S.ScheduleItem>
      <S.ScheduleStatus $status={status}>{status}</S.ScheduleStatus>
      <S.ScheduleTime>{time}</S.ScheduleTime>
      <S.ScheduleTitle>{title}</S.ScheduleTitle>
    </S.ScheduleItem>
  );
}
