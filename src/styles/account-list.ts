import styled from "styled-components";

const WalletSection = styled.div`
  padding: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Divider = styled.div`
  border-bottom: 1px solid #d3d5d8;
  opacity: 50%;
  marging-top: 16px;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #000000;
  font-weight: bold;
  margin: 0;
`;

const AddButton = styled.button`
  background: none;
  border: none;
  color: #000000;
  font-weight: medium;
  font-size: 16px;
  cursor: pointer;
`;

const WalletGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

const WalletCard = styled.div`
  background: #111111;
  border-radius: 10px;
  padding: 16px;
  color: white;
`;

const WalletHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const CurrencyIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const CurrencyName = styled.span`
  font-size: 14px;
  color: #9aa5b1;
  font-weight: regular;
`;

const WalletContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Balance = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ArrowButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const TryAgainButton = styled.button`
  padding: 18px 48px;
  font-size: 18px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 40px;
  cursor: pointer;
`;

const ErrorLabel = styled.div`
  color: #3e4c59;
  font-size: 18px;
  font-weight: regular;
  margin-top: 26px;
  margin-bottom: 32px;
`;

export {
  ErrorLabel,
  TryAgainButton,
  ErrorContainer,
  LoadingSpinner,
  ArrowButton,
  ArrowContainer,
  WalletCard,
  WalletGrid,
  WalletContent,
  WalletHeader,
  Balance,
  CurrencyIcon,
  CurrencyName,
  AddButton,
  Title,
  Header,
  WalletSection,
  Divider,
};
