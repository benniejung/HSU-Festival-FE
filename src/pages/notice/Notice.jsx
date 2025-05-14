import React, { useEffect, useMemo } from "react";
import * as S from "../../styles/notice/notice.styles";
import NoticeItem from "../../components/notice/NoticeItem";
import NoticeHeader from "../../components/notice/NoticeHeader";

// hooks
import useGet from "../../hooks/useGet";

export default function Notice() {
  const { data, loading, error } = useGet("/notice");

  useEffect(() => {
    console.log(data);
  }, [data]);

  // 고정된 공지사항을 먼저 정렬
  const sortedNotices = useMemo(() => {
    if (!data?.data) return [];

    return [...data.data].sort((a, b) => {
      // isPinned가 true인 항목을 앞으로
      if (a.isPined && !b.isPined) return -1;
      if (!a.isPined && b.isPined) return 1;
      return 0;
    });
  }, [data]);

  return (
    <S.NoticeLayout>
      <NoticeHeader title="공지사항" />
      <S.NoticeCount>
        총 <span>{sortedNotices.length}</span>건
      </S.NoticeCount>
      <S.NoticeList>
        {loading ? (
          <S.NoticeLoading>로딩 중...</S.NoticeLoading>
        ) : (
          sortedNotices.map((notice) => (
            <NoticeItem key={notice.id} notice={notice} />
          ))
        )}
      </S.NoticeList>
    </S.NoticeLayout>
  );
}
