import React from "react";
import Modal from "../components/shared/Modal";

interface IAddWallet {
  onClose: () => void;
  isOpen: boolean;
}

export const AddWallet = (props: IAddWallet) => {
  return <Modal isOpen={props.isOpen}>...</Modal>;
};
