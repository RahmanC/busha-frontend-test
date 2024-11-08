import Loader from "../components/shared/Loader";
import { LoadingSpinner } from "../styles/account-list";

export const LoadingUI = () => {
  return (
    <LoadingSpinner>
      <Loader size={84} />
    </LoadingSpinner>
  );
};
