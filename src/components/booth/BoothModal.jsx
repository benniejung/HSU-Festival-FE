import * as S from "../../styles/home/home.styles";
import DeleteImg from "../../assets/home/delete.svg";

const BoothModal = ({ onClose, imgUrl, title, content }) => {
  if (!imgUrl && !title && !content) return null; // 비어있는 모달 방지

  return (
    <S.Overlay>
      <S.ModalContainer>
        <S.ModalImgContainer>
          <S.ModalImg src={imgUrl || "https://hsu-festival-bucket.s3.ap-northeast-2.amazonaws.com/form/2025-05-13/a2f5a035-1b85-487d-a3eb-b4c5f0750388.png"} alt="booth" />
        </S.ModalImgContainer>

        <S.CloseButton onClick={onClose}>
          <img src={DeleteImg} alt="close" />
        </S.CloseButton>

        <S.ModalContent>
          {title && <S.ModalP>{title}</S.ModalP>}
          {content && <S.ModalP2>{content}</S.ModalP2>}
        </S.ModalContent>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default BoothModal;
