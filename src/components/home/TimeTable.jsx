import React, { useState, useEffect } from "react";
import { useScheduleStore } from "../../stores/scheduleStore";
import ScheduleItem from "./ScheduleItem";
import * as S from "../../styles/home/home.styles";

export default function TimeTable() {
  const {
    dates,
    selectedDate,
    schedules,
    loading,
    error,
    setSelectedDate,
    fetchSchedules,
  } = useScheduleStore();

  // 날짜 변경시 일정 불러오기
  useEffect(() => {
    fetchSchedules(selectedDate);
  }, [selectedDate]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <S.TimeTableLayout>
      <S.DateSelector>
        {dates.map((item) => (
          <S.DateButton
            key={item.date}
            $isSelected={selectedDate === item.date}
            onClick={() => handleDateSelect(item.date)}
          >
            <S.DateText $isSelected={selectedDate === item.date}>
              {item.date}
            </S.DateText>
            <S.DayText $isSelected={selectedDate === item.date}>
              {item.day}
            </S.DayText>
          </S.DateButton>
        ))}
      </S.DateSelector>
      <S.ScheduleContainer>
        {loading ? (
          <S.LoadingText>일정을 불러오는 중...</S.LoadingText>
        ) : (
          schedules.map((schedule) => (
            <ScheduleItem key={schedule.id} schedule={schedule} />
          ))
        )}
      </S.ScheduleContainer>
    </S.TimeTableLayout>
  );
}
