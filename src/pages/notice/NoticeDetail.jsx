import React from "react";
import { useParams } from "react-router-dom";
import * as S from "../../styles/notice/notice.styles";
import NoticeHeader from "../../components/notice/NoticeHeader";

// hooks
import useGet from "../../hooks/useGet";

export default function NoticeDetail() {
  const { id } = useParams();
  const { data, loading, error } = useGet(`/notice/${id}`);

  const notice = data?.data;

  return (
    <S.DetailLayout>
      <NoticeHeader title="공지사항" />

      {loading ? (
        <S.DetailContent>로딩 중...</S.DetailContent>
      ) : error || !notice ? (
        <S.DetailContent>존재하지 않는 공지사항입니다.</S.DetailContent>
      ) : (
        <>
          <S.DetailTitle>{notice.title}</S.DetailTitle>
          <S.DetailDate>{notice.date}</S.DetailDate>
          <S.DetailDivider />
          <S.DetailContent>{notice.content}</S.DetailContent>
        </>
      )}
    </S.DetailLayout>
  );
}
