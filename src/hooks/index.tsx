import { ReactComponent as NairaIcon } from "../assets/svg/NGN.svg";
import { ReactComponent as BitcoinIcon } from "../assets/svg/BTC.svg";
import { ReactComponent as EthereumIcon } from "../assets/svg/ETH.svg";
import { ReactComponent as LitecoinIcon } from "../assets/svg/LTC.svg";
import { ReactComponent as StellarIcon } from "../assets/svg/XLM.svg";
import { ReactComponent as SureRemitIcon } from "../assets/svg/RMT.svg";
import { ReactComponent as TronIcon } from "../assets/svg/TRX.svg";
import { ReactComponent as DogeCoinIcon } from "../assets/svg/DOGE.svg";
import { ReactComponent as RippleIcon } from "../assets/svg/DOGE.svg";
import { ReactComponent as TetherIcon } from "../assets/svg/USDT.svg";

export const getCurrencyIcon = (currency: string) => {
  switch (currency?.toLowerCase()) {
    case "ngn":
      return <NairaIcon />;
    case "btc":
      return <BitcoinIcon />;
    case "eth":
      return <EthereumIcon />;
    case "ltc":
      return <LitecoinIcon />;
    case "xlm":
      return <StellarIcon />;
    case "trx":
      return <TronIcon />;
    case "doge":
      return <DogeCoinIcon />;
    case "xrp":
      return <RippleIcon />;
    case "usdt":
      return <TetherIcon />;
    case "rmt":
      return <SureRemitIcon />;
    default:
      return null;
  }
};

export const getFallbackName = (currency: string) => {
  switch (currency?.toLowerCase()) {
    case "ltc":
      return "Litecoin";
    case "rmt":
      return "SureRemit";
    case "usdt":
      return "Tether";
    case "xrp":
      return "Ripple";
    case "doge":
      return "Dogecoin";
    case "trx":
      return "TRON";
    default:
      return "Unknown";
  }
};

export const formatBalance = (balance: string, currency: string) => {
  if (currency === "NGN") {
    return `₦ ${parseFloat(balance).toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }
  return `${balance} ${currency}`;
};
