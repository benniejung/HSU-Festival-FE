import React from "react";
import * as S from "../../styles/credits/credits.styles";
import NoticeHeader from "../../components/notice/NoticeHeader";

// 예시 이미지 import (실제 경로에 맞게 수정)
import profile1 from "../../assets/credits/profile1.svg";
import profile2 from "../../assets/credits/profile2.svg";
import profile3 from "../../assets/credits/profile3.svg";
import profile4 from "../../assets/credits/profile4.svg";
import profile5 from "../../assets/credits/profile5.svg";

const developers = [
  {
    name: "임혜정",
    major: "모바일소프트웨어/ 웹공학 트랙",
    role: "백엔드, 기획",
    img: profile1,
  },
  {
    name: "김혜진",
    major: "모바일소프트웨어/ 웹공학 트랙",
    role: "백엔드, 기획",
    img: profile2,
  },
  {
    name: "김건우",
    major: "디지털콘텐츠, 가상현실/웹공학 트랙",
    role: "프론트엔드, 기획",
    img: profile3,
  },
  {
    name: "정예빈",
    major: "모바일소프트웨어/ 웹공학 트랙",
    role: "프론트엔드, 기획",
    img: profile4,
  },
  {
    name: "이지민",
    major: "동양화과 / 미디어디자인 트랙",
    role: "디자인",
    img: profile5,
  },
];

export default function Credits() {
  return (
    <S.CreditsLayout>
      <NoticeHeader title="만든이들 정보" />
      <S.Title>DEVELOPER</S.Title>
      <S.List>
        {developers.map((dev, idx) => (
          <S.Item key={dev.name}>
            <S.ProfileImg src={dev.img} alt={dev.name} />
            <S.Info>
              <S.NameMajor>
                <S.Name>{dev.name}</S.Name>
                <S.Major>{dev.major}</S.Major>
              </S.NameMajor>
              <S.Divider />
              <S.Role>{dev.role}</S.Role>
            </S.Info>
          </S.Item>
        ))}
      </S.List>
    </S.CreditsLayout>
  );
}
