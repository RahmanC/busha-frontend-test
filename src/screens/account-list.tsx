import { useEffect, useState } from "react";
import { ReactComponent as NetworkErrorIcon } from "../assets/svg/error.svg";
import { ReactComponent as CaretIcon } from "../assets/svg/arrow.svg";
import Loader from "../components/shared/Loader";
import { AddWallet } from "./add-wallet";
import {
  AddButton,
  ArrowButton,
  ArrowContainer,
  Balance,
  CurrencyIcon,
  CurrencyName,
  ErrorContainer,
  ErrorLabel,
  Header,
  LoadingSpinner,
  Title,
  TryAgainButton,
  WalletCard,
  WalletContent,
  WalletGrid,
  WalletHeader,
  WalletSection,
} from "../styles/account-list";

interface Account {
  id: string;
  currency: string;
  hold: string;
  pending_balance: string;
  balance: string;
  name: string;
  type: string;
  deposit: boolean;
  payout: boolean;
  imgURL: string;
}

const formatBalance = (balance: string, currency: string) => {
  if (currency === "NGN") {
    return `₦ ${parseFloat(balance).toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }
  return `${balance} ${currency}`;
};

const base_url = "http://localhost:3090";

export const AccountList = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const fetchAccounts = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`${base_url}/accounts`);
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();
      setAccounts(data);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  if (loading) {
    return (
      <LoadingSpinner aria-label="Loading...">
        <Loader />
        <p>Loading...</p>
      </LoadingSpinner>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <NetworkErrorIcon />
        <ErrorLabel>Network error</ErrorLabel>
        <TryAgainButton onClick={fetchAccounts}>Try again</TryAgainButton>
      </ErrorContainer>
    );
  }

  return (
    <WalletSection>
      <Header>
        <Title>Wallets</Title>
        <AddButton onClick={() => setIsModal(true)}>+ Add new wallet</AddButton>
      </Header>
      <WalletGrid>
        {accounts?.map((account) => (
          <WalletCard key={account.id}>
            <WalletHeader>
              <CurrencyIcon src={account.imgURL} alt={`${account.name} icon`} />
              <CurrencyName>{account.name}</CurrencyName>
            </WalletHeader>
            <WalletContent>
              <Balance>
                {formatBalance(account.balance, account.currency)}
              </Balance>
              <ArrowContainer>
                <ArrowButton>
                  <CaretIcon />
                </ArrowButton>
              </ArrowContainer>
            </WalletContent>
          </WalletCard>
        ))}
      </WalletGrid>
      <AddWallet isOpen={isModal} onClose={() => {}} />
    </WalletSection>
  );
};
