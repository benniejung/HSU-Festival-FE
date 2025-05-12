import React, { useState, useEffect } from "react";
import { useScheduleStore } from "../../stores/scheduleStore";
import ScheduleItem from "./ScheduleItem";
import * as S from "../../styles/home/home.styles";
import Modal from "./Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import useGet from "../../hooks/useGet";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  // 날짜 변경시 일정 불러오기
  useEffect(() => {
    fetchSchedules(selectedDate);
  }, [selectedDate]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleScheduleClick = (schedule) => {
    console.log(schedule);
    setSelectedSchedule(schedule);
    setModalOpen(true);
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
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={3}
            pagination={{ clickable: true }}
            style={{ width: "100%", padding: "0 16px" }}
          >
            {schedules.map((schedule) => (
              <SwiperSlide key={schedule.id}>
                <ScheduleItem
                  schedule={schedule}
                  onClick={() => handleScheduleClick(schedule)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </S.ScheduleContainer>
      {modalOpen && selectedSchedule && (
        <Modal
          onClose={() => setModalOpen(false)}
          schedule={selectedSchedule}
        />
      )}
    </S.TimeTableLayout>
  );
}
