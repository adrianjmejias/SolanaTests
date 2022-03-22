import { Cluster, clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { encodeURL, createQR } from "@solana/pay";
import BigNumber from "bignumber.js";

async function main() {
  // Variable to keep state of the payment status
  let paymentStatus: string;

  // Connecting to devnet for this example
  console.log("1. ✅ Establish connection to the network");
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
}

main();
