import {
  createNetworkConfig,
  IotaClientProvider,
  WalletProvider,
} from "@iota/dapp-kit";
import { getFullnodeUrl } from "@iota/iota-sdk/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import "@iota/dapp-kit/dist/index.css";
import Layout from "./components/layout";
import Details from "./components/details";

const queryClient = new QueryClient();
// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl("localnet") },
  testnet: { url: getFullnodeUrl("testnet") },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IotaClientProvider networks={networkConfig} defaultNetwork="localnet">
        <WalletProvider autoConnect>
          <Layout>
            <Details />
          </Layout>
        </WalletProvider>
      </IotaClientProvider>
    </QueryClientProvider>
  );
}

export default App;
