import {
  useCurrentAccount,
  useCurrentWallet,
  useDisconnectWallet,
  useWallets,
} from "@iota/dapp-kit";

import { truncateAddress } from "./helpers";
import { useTranslation } from "../lib/i18n";

const Details = () => {
  const { t } = useTranslation("details");
  const wallets = useWallets();
  const account = useCurrentAccount();
  const { currentWallet, connectionStatus } = useCurrentWallet();
  const { mutate: disconnect } = useDisconnectWallet();

  return (
    <div className="container">
      <h1 className="title">{t("hello")}</h1>
      {connectionStatus === "connected" ? (
        <>
          <div className="card">
            <h2 className="cardTitle">{t("accountDetails")}</h2>
            <p className="cardText">
              <strong>{t("address")}:</strong>{" "}
              {account ? truncateAddress(account.address) : "-"}
            </p>
            <p className="cardText">
              <strong>{t("label")}:</strong>{" "}
              {account ? account.label || "-" : "-"}
            </p>
            <p className="cardText">
              <strong>{t("chains")}:</strong>{" "}
              {account ? account.chains.join(", ") : "-"}
            </p>
          </div>

          <div className="card">
            <h2 className="cardTitle">{t("walletDetails")}</h2>
            <p className="cardText">
              <strong>{t("name")}:</strong>{" "}
              {currentWallet ? currentWallet.name : "-"}
            </p>
            <p className="cardText">
              <strong>{t("version")}:</strong>{" "}
              {currentWallet ? currentWallet.version : "-"}
            </p>
            <p className="cardText">
              <strong>{t("chains")}:</strong>{" "}
              {currentWallet ? currentWallet.chains.join(", ") : "-"}
            </p>
          </div>

          <div className="card">
            <h2 className="cardTitle">{t("installedWallets")}</h2>
            {wallets.length === 0 ? (
              <p className="cardText">{t("noWalletsInstalled")}</p>
            ) : (
              <ul className="walletList">
                {wallets.map((wallet) => (
                  <li key={wallet.name} className="walletItem">
                    <img
                      src={wallet.icon}
                      alt={`${wallet.name} Icon`}
                      width={24}
                      height={24}
                    />
                    {wallet.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button onClick={() => disconnect()} className="disconnectButton">
            {t("disconnect")}
          </button>
        </>
      ) : (
        <p className="connectMessage">{t("connectMessage")}</p>
      )}
    </div>
  );
};

export default Details;
