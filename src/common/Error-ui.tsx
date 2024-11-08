import {
  ErrorContainer,
  ErrorLabel,
  TryAgainButton,
} from "../styles/account-list";
import { ReactComponent as NetworkErrorIcon } from "../assets/svg/error.svg";

interface IErrorUI {
  handleClick: () => void;
}

export const ErrorUI = (props: IErrorUI) => {
  return (
    <ErrorContainer>
      <NetworkErrorIcon />
      <ErrorLabel>Network error</ErrorLabel>
      <TryAgainButton onClick={props.handleClick}>Try again</TryAgainButton>
    </ErrorContainer>
  );
};
