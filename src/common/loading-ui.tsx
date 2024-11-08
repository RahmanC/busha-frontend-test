import Loader from "../components/shared/Loader";
import { LoadingSpinner } from "../styles/account-list";

export const LoadingUI = () => {
  return (
    <LoadingSpinner aria-label="Loading...">
      <Loader />
    </LoadingSpinner>
  );
};
