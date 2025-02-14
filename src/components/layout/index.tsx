import { ConnectButton } from "@iota/dapp-kit";
import { useTranslation } from "../../lib/i18n";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation("layout");
  return (
    <>
      <header className="header">
        <span className="header-title">{t("title")}</span>
        <ConnectButton />
      </header>

      <main className="main-content">{children}</main>
    </>
  );
};

export default Layout;
