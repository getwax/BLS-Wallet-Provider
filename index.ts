import { providers } from "ethers";

export class QuillProvider extends providers.JsonRpcProvider {
  constructor(public jsonRpcUrl: string, public aggregatorUrl: string) {
    super(jsonRpcUrl);
  }
}
