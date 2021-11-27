import { DAppClient } from "@airgap/beacon-sdk";

const dAppClient = new DAppClient({ name: "Beacon Docs" });

async function initWallet() {
        try {
          console.log("Requesting permissions...");
          const permissions = await dAppClient.requestPermissions();
          console.log("Got permissions:", permissions.address);
        } catch (error) {
          console.log("Got error:", error);
        }
}

initWallet();


/*
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";

const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

async function initWallet() {
        console.log("Asd");
        Tezos.setWalletProvider(wallet);

        try {
                console.log("Requesting permissions...");
                const permissions = await wallet.client.requestPermissions();
                console.log("Got permissions:", permissions.address);
        } catch (error) {
                console.log("Got error:", error);
        }
}

initWallet();
*/
