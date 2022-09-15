import { providers } from "ethers";

export class BlsWalletProvider extends providers.JsonRpcProvider {
  constructor(public jsonRpcUrl: string, public aggregatorUrl: string) {
    super(jsonRpcUrl);
  }
}
