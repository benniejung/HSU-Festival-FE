import * as S from "../../styles/home/home.styles";
import DeleteImg from "../../assets/home/delete.svg";
import TimeImg from "../../assets/home/time.svg";

const Modal = ({ onClose, schedule }) => {
  return (
    <S.Overlay>
      <S.ModalContainer>
        <S.ModalImg src={schedule.imageUrl} />
        <S.CloseButton onClick={onClose}>
          <img src={DeleteImg} alt="delete" />
        </S.CloseButton>
        <S.ModalContent>
          <S.ModalP>{schedule.title}</S.ModalP>
          <S.ModalTime>
            <img src={TimeImg} alt="time" />
            <p>{schedule.time}</p>
          </S.ModalTime>
          <S.ModalP2>{schedule.content}</S.ModalP2>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default Modal;
