import styled from "styled-components";

const ModalContent = styled.div`
  padding: 74px 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 49px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: medium;
  color: #000000;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Description = styled.p`
  color: #3e4c59;
  margin-bottom: 43px;
  font-size: 18px;
  font-weight: regular;
`;

const SelectLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 14px;
  color: #3e4c59;
`;

const Select = styled.select`
  width: 100%;
  padding: 24px;
  border: 1px solid #cbd2d9;
  border-radius: 8px;
  font-size: 16px;
  color: #000000;
  font-weight: regular;
  margin-bottom: 24px;
  appearance: none;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")
    no-repeat;
  background-position: right 24px center;
  background-color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreateButton = styled.button`
  padding: 18px 48px;
  font-size: 18px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #1a1a1a;
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
  }
`;

const ErrorContainer = styled.div`
  background: #fff4f4;
  border-radius: 8px;
  border: 1px solid #e0b3b2;
  padding: 13px 20px;
  margin-top: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ErrorLeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
`;

const ErrorLabel = styled.div`
  color: #d72c0d;
  font-size: 16px;
  font-weight: 500;
`;

const CloseErrorButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export {
  ModalContent,
  Header,
  Title,
  CloseButton,
  Description,
  SelectLabel,
  Select,
  CreateButton,
  ButtonContainer,
  ErrorContainer,
  ErrorLabel,
  ErrorLeftSide,
  CloseErrorButton,
};
