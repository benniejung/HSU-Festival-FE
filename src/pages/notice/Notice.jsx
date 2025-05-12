import React, { useState, useEffect } from "react";
import * as S from "../../styles/notice/notice.styles";
import NoticeItem from "../../components/notice/NoticeItem";
import NoticeHeader from "../../components/notice/NoticeHeader";

// hooks
import useGet from "../../hooks/useGet";

// store
import { useNoticeStore } from "../../stores/noticeStore";

export default function Notice() {
  //const { data, loading, error } = useGet("/notice");
  const { notices, setNotices } = useNoticeStore();
  const [loading, setLoading] = useState(false);
  /*   useEffect(() => {
    setNotices(data);
    console.log(data);
  }, [data]); */

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
