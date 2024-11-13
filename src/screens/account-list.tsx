import { useEffect, useState } from "react";
import { ReactComponent as CaretIcon } from "../assets/svg/arrow.svg";
import { AddWallet } from "./add-wallet";
import {
  AddButton,
  ArrowButton,
  ArrowContainer,
  Balance,
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
import { formatBalance, getCurrencyIcon, getFallbackName } from "../hooks";

export interface Account {
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

const base_url = process.env.REACT_BASE_URL;

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

  return (
    <WalletSection>
      <Header>
        <Title>Wallets</Title>
        {!loading && !error && (
          <AddButton
            aria-label="Add new wallet"
            onClick={() => setIsModal(true)}
          >
            + Add new wallet
          </AddButton>
        )}
      </Header>
      {loading ? (
        <LoadingUI />
      ) : error ? (
        <ErrorUI handleClick={fetchAccounts} />
      ) : (
        <>
          <Divider />
          <WalletGrid>
            {accounts?.map((account) => (
              <WalletCard key={account.id}>
                <WalletHeader>
                  {getCurrencyIcon(account.currency)}
                  <CurrencyName data-testid={`name-${account.id}`}>
                    {account.name ?? getFallbackName(account.currency)}
                  </CurrencyName>
                </WalletHeader>
                <WalletContent>
                  <Balance data-testid={`balance-${account.id}`}>
                    {formatBalance(account.balance ?? 0.0, account.currency)}
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
        </>
      )}
      <AddWallet
        isOpen={isModal}
        onClose={() => setIsModal(false)}
        onWalletCreated={handleWalletCreated}
        existingAccounts={accounts}
      />
    </WalletSection>
  );
};
