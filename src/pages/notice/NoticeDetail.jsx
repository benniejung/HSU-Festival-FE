import React from "react";
import { useParams } from "react-router-dom";
import * as S from "../../styles/notice/notice.styles";
import NoticeHeader from "../../components/notice/NoticeHeader";

// hooks
import useGet from "../../hooks/useGet";

// store
import { useNoticeStore } from "../../stores/noticeStore";

const data = {
  id: 1,
  title: "2025 축제 일정 안내",
  content:
    "2025학년도 학생 축제 대동제 안내 대동제 행사가 5월 28일 (화) ~ 5월 30일 (목) 까지 교내 전역에서 진행될 예정입니다. 많은 관심과 참여 바랍니다.  * 장터에서는 주류를 판매하지 않으므로 개인 지참하셔야 합니다. 축제 기간 중 주류 구매 가능처 : 창의관 이마트 24 편의점, 상상빌리지 CU 편의점",

  date: "2025-05-01",
};

export default function NoticeDetail() {
  const { id } = useParams();
  //const { data } = useGet(`/notice/${id}`);

  return (
    <S.DetailLayout>
      <NoticeHeader title="공지사항" />
      <S.DetailTitle>{data.title}</S.DetailTitle>
      <S.DetailDate>{data.date}</S.DetailDate>
      <S.DetailDivider />
      <S.DetailContent>{data.content}</S.DetailContent>
    </S.DetailLayout>
  );
}
