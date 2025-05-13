import React from "react";
import * as S from "../../styles/notice/notice.styles";
import NoticeItem from "../../components/notice/NoticeItem";
import NoticeHeader from "../../components/notice/NoticeHeader";

// hooks
import useGet from "../../hooks/useGet";

export default function Notice() {
  const { data, loading, error } = useGet("/notice");

  // null 안전 처리 (데이터 구조에 따라 수정 가능)
  const notices = data?.data ?? [];

  return (
    <S.NoticeLayout>
      <NoticeHeader title="공지사항" />
      <S.NoticeCount>
        총 <span>{notices.length}</span>건
      </S.NoticeCount>
      <S.NoticeList>
        {loading ? (
          <S.NoticeLoading>로딩 중...</S.NoticeLoading>
        ) : (
          notices.map((notice) => (
            <NoticeItem key={notice.id} notice={notice} />
          ))
        )}
      </S.NoticeList>
    </S.NoticeLayout>
  );
}
