import { IdlAccounts, Program  } from "@coral-xyz/anchor";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import idl from "./counter.json";
import type { Counter } from "./counter";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

export const program = new Program(idl as unknown as Counter, {
    connection,
} );

export const [counterPDA] = PublicKey.findProgramAddressSync(
    [Buffer.from("counter")],
    new PublicKey("8fVLhVFu2zPFyZedD4T267DpgFCuKhoF83n2om63zV7M")
);

export type CounterData = IdlAccounts<Counter>["counter"];