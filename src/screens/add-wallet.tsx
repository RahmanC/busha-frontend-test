import { useState, useEffect } from "react";
import Modal from "../components/shared/Modal";
import { LoadingUI } from "../common/loading-ui";
import { ReactComponent as CloseIcon } from "../assets/svg/x.svg";
import { ReactComponent as ErrorIcon } from "../assets/svg/network.svg";
import { ReactComponent as CloseError } from "../assets/svg/Close.svg";
import { ErrorUI } from "../common/Error-ui";
import {
  ButtonContainer,
  CloseButton,
  CloseErrorButton,
  CreateButton,
  Description,
  ErrorContainer,
  ErrorLabel,
  ErrorLeftSide,
  Header,
  ModalContent,
  Select,
  SelectLabel,
  Title,
} from "../styles/add-wallet";
import { Account } from "./account-list";

interface IAddWallet {
  onClose: () => void;
  isOpen: boolean;
  existingAccounts: Account[];
  onWalletCreated?: (newWallet: any) => void;
}

interface Wallet {
  currency: string;
  name: string;
  type: string;
  imgURL: string;
}

const base_url = process.env.REACT_BASE_URL;

export const AddWallet = ({
  onClose,
  isOpen,
  onWalletCreated,
  existingAccounts,
}: IAddWallet) => {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [postError, setPostError] = useState("");
  const [creating, setCreating] = useState(false);

  const fetchWallets = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`${base_url}/wallets`);
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();
      setWallets(data);
      setSelectedCurrency(data[0]?.currency || "");
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const createWallet = async () => {
    if (!selectedCurrency) return;

    // Check if the wallet already exists in the account list
    const walletExists = existingAccounts?.some(
      (account) => account.currency === selectedCurrency
    );

    if (walletExists) {
      setPostError("Wallet already exists.");
      return;
    }

    setCreating(true);
    setPostError("");
    try {
      const response = await fetch(`${base_url}/accounts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currency: selectedCurrency }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Network error");
      }

      const newWallet = await response.json();
      onWalletCreated?.(newWallet);
      onClose();
    } catch (error: any) {
      setPostError(error.message || "Network error");
    } finally {
      setCreating(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchWallets();
    }
  }, [isOpen]);

  const renderContent = () => {
    if (loading) {
      return <LoadingUI />;
    }

    if (error) {
      return (
        <ErrorUI
          handleClick={fetchWallets}
          aria-label="Error fetching wallets"
        />
      );
    }

    return (
      <ModalContent data-testid="modal">
        <Header>
          <Title>Add new wallet</Title>
          <CloseButton
            onClick={onClose}
            aria-label="Close button"
            role="button"
          >
            <CloseIcon />
          </CloseButton>
        </Header>
        <Description>
          The crypto wallet will be created instantly and be available in your
          list of wallets.
        </Description>
        <SelectLabel>Select wallet</SelectLabel>
        <Select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          role="combobox"
        >
          {wallets.map((wallet) => (
            <option key={wallet.currency} value={wallet.currency}>
              {wallet.name}
            </option>
          ))}
        </Select>
        <ButtonContainer>
          <CreateButton
            onClick={createWallet}
            disabled={creating || !selectedCurrency}
            aria-label="Create wallet"
            title={creating ? "Loading..." : "Create wallet"}
          >
            {creating ? "Loading..." : "Create wallet"}
          </CreateButton>
        </ButtonContainer>

        {postError && (
          <ErrorContainer>
            <ErrorLeftSide>
              <ErrorIcon />
              <ErrorLabel>{postError}</ErrorLabel>
            </ErrorLeftSide>
            <CloseErrorButton
              onClick={() => setPostError("")}
              aria-label="Close error"
            >
              <CloseError />
            </CloseErrorButton>
          </ErrorContainer>
        )}
      </ModalContent>
    );
  };

  return (
    <Modal isOpen={isOpen} aria-label="Add Wallet Modal">
      {renderContent()}
    </Modal>
  );
};
