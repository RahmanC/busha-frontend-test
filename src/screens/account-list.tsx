import { useEffect, useState } from "react";
import { ReactComponent as CaretIcon } from "../assets/svg/arrow.svg";
import { AddWallet } from "./add-wallet";
import {
  AddButton,
  ArrowButton,
  ArrowContainer,
  Balance,
  CurrencyIcon,
  CurrencyName,
  Divider,
  Header,
  Title,
  WalletCard,
  WalletContent,
  WalletGrid,
  WalletHeader,
  WalletSection,
} from "../styles/account-list";
import { LoadingUI } from "../common/loading-ui";
import { ErrorUI } from "../common/Error-ui";

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

  const handleWalletCreated = (newWallet: Account) => {
    setAccounts((prev) => [...prev, newWallet]);
  };

  if (loading) {
    return <LoadingUI />;
  }

  if (error) {
    return <ErrorUI handleClick={fetchAccounts} />;
  }

  return (
    <WalletSection>
      <Header>
        <Title>Wallets</Title>
        <AddButton aria-label="Add new wallet" onClick={() => setIsModal(true)}>
          + Add new wallet
        </AddButton>
      </Header>
      <Divider />
      <WalletGrid>
        {accounts.map((account) => (
          <WalletCard key={account.id}>
            <WalletHeader>
              <CurrencyIcon
                src={account.imgURL}
                alt={`${account.name} icon`}
                data-testid={`icon-${account.id}`}
              />
              <CurrencyName data-testid={`name-${account.id}`}>
                {account.name}
              </CurrencyName>
            </WalletHeader>
            <WalletContent>
              <Balance data-testid={`balance-${account.id}`}>
                {formatBalance(account.balance, account.currency)}
              </Balance>
              <ArrowContainer>
                <ArrowButton aria-label="View wallet details">
                  <CaretIcon />
                </ArrowButton>
              </ArrowContainer>
            </WalletContent>
          </WalletCard>
        ))}
      </WalletGrid>
      <AddWallet
        isOpen={isModal}
        onClose={() => setIsModal(false)}
        onWalletCreated={handleWalletCreated}
      />
    </WalletSection>
  );
};
