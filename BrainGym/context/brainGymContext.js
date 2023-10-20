import React, { useState, createContext, useEffect, useRef } from "react";
// import { SUPER_COOL_NFT_CONTRACT, abi } from "../constant/constant";
import { Buffer } from 'buffer';
import { create } from 'ipfs-http-client';
import { ethers } from 'ethers';
// import axios from 'axios';
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// import { getDatabase, ref, set } from "firebase/database";
export const BrainGymAuthContext = createContext(undefined);

export const BrainGymAuthContextProvider = (props) => {

  //   const [walletConnected, setWalletConnected] = useState(false);
  //   const [loading, setLoading] = useState(false);
  //   const [allNfts, setAllNfts] = useState([]);
  //   const [prompt, setPrompt] = useState("");
  //   const [userAdd, setUserAdd] = useState();
  //   const [genRanImgLoding, setGenRanImgLoding] = useState(false);
  //   const [provider, setProvider] = useState(null);
  //   const [signer, setSigner] = useState(null);

  //   console.log(allNfts);
  //   useEffect(() => {
  //     getSignerFromProvider();
  //   }, [])

  //   const firebaseConfig = {
  //     apiKey: "AIzaSyDllIicX42GplfgbeZTqZG5aqI_Xg3PUt0",
  //     authDomain: "supercool-fbc8f.firebaseapp.com",
  //     projectId: "supercool-fbc8f",
  //     storageBucket: "supercool-fbc8f.appspot.com",
  //     messagingSenderId: "76744592998",
  //     appId: "1:76744592998:web:c7a075000ef0629135e7a7",
  //     measurementId: "G-QJZKGMDTX3"
  //   };


  //   const app = initializeApp(firebaseConfig);
  //   // const analytics = getAnalytics(app);
  //   const firestore = getFirestore();
  //   const collectionRef = collection(firestore, "TokenUri");

  //   // const database = getDatabase(app);
  //   const totalNfts = async () => {
  //     const contractPro = new ethers.Contract(
  //       SUPER_COOL_NFT_CONTRACT,
  //       abi,
  //       provider
  //     );
  //     const numOfNfts = await contractPro.getTotalSupply();
  //     return Number(numOfNfts) + 1;
  //   }
  //   // totalNfts()
  //   async function storeDataInFirebase(metadataUrl) {
  //     let tokenid = await totalNfts();
  //     console.log(tokenid);
  //     const newData = {
  //       id: tokenid,
  //       url: metadataUrl
  //     };
  //     const docRef = await addDoc(collectionRef, newData);
  //     console.log("Data stored successfully! Document ID:", docRef.id);
  //   }
  //   // storeDataInFirebase()


  //   // fetchAllDataFromCollection()

  //   async function getSignerFromProvider() {
  //     if (typeof window !== "undefined" && window.ethereum) {
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);
  //       setProvider(provider);
  //       const signer = provider.getSigner();
  //       setSigner(signer);
  //     } else {
  //       console.log('No wallet connected or logged out');
  //     }
  //   }


  //   const login = async () => {
  //     if (!window.ethereum) return;
  //     try {
  //       const accounts = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       setUserAdd(accounts[0]);
  //       if (typeof window !== 'undefined') {
  //         localStorage.setItem('address', accounts[0]);
  //       }

  //       if (window.ethereum.networkVersion === '80001') {
  //         setWalletConnected(true);
  //       } else {
  //         await window.ethereum.request({
  //           method: 'wallet_switchEthereumChain',
  //           params: [{ chainId: '0x13881' }] // Polygon Mumbai chain ID
  //         });
  //         setWalletConnected(true);
  //       }

  //       if (ethereum && ethereum.selectedAddress) {
  //         const address = await signer.getAddress();

  //       } else {
  //         console.log('No wallet connected or logged out');
  //       }
  //       getAllNfts();
  //     } catch (error) {
  //       console.error('Login error:', error);
  //     }
  //     getAllNfts();
  //   }

  //   const logout = async () => {
  //     localStorage.removeItem('address');
  //     setWalletConnected(false);
  //   }

  const auth =
    "Basic " +
    Buffer.from(
      process.env.infuraProjectKey + ":" + process.env.infuraSecretKey
    ).toString("base64");

  const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  });



  //   const getProfileData = async (add) => {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();

  //     const contract = new ethers.Contract(
  //       SUPER_COOL_NFT_CONTRACT,
  //       abi,
  //       signer
  //     );
  //     console.log('use add--', add);
  //     if (add !== undefined) {
  //       const dataurl = await contract.getUserProfile(add);
  //       console.log(dataurl);
  //       const response = await axios.get(dataurl);
  //       // console.log(response.data);
  //       return response;
  //     }
  //   }

  //   async function getAllNfts() {
  //     try {
  //       const querySnapshot = await getDocs(collectionRef);
  //       const data = querySnapshot.docs.map((doc) => doc.data());
  //       console.log("Fetched data:", data);
  //       const metadatas = [];

  //       for (let i = 0; i <= data.length - 1; i++) {
  //         console.log(data[i], '------------');
  //         let tokenURI = data[i].url;
  //         // console.log(tokenURI);
  //         const response = await fetch(tokenURI);
  //         const metadata = await response.json();

  //         // console.log(await response.json());
  //         metadatas.push(metadata);
  //       }
  //       setAllNfts(metadatas);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //       return [];
  //     }
  //   }

  //   useState(() => {
  //     setTimeout(() => {
  //       console.log('running usestate');
  //       getAllNfts()
  //     }, 5000);
  //   }, [loading])

  //   const maticToUsdPricee = async (_price) => {
  //     const contractPro = new ethers.Contract(
  //       SUPER_COOL_NFT_CONTRACT,
  //       abi,
  //       provider
  //     );
  //     return await contractPro.convertMaticUsd(ethers.utils.parseUnits(_price, 'ether'));
  //   }

  //   const uploadOnIpfs = async (e) => {
  //     let dataStringify = JSON.stringify(e);
  //     const ipfsResult = await client.add(dataStringify);
  //     const contentUri = `https://superfun.infura-ipfs.io/ipfs/${ipfsResult.path}`;

  //     return contentUri;
  //   }
  const uploadOnIpfs = async (e) => {
    let dataStringify = JSON.stringify(e);
    const ipfsResult = await client.add(dataStringify);
    const contentUri = `https://superfun.infura-ipfs.io/ipfs/${ipfsResult.path}`;

    return contentUri;
  }

  const handleImgUpload = async (file) => {
    console.log(file);
    const added = await client.add(file);
    const hash = added.path;
    const ipfsURL = `https://superfun.infura-ipfs.io/ipfs/${hash}`;
    return ipfsURL;
  };

  // Edit profile

  //   const uploadDatainIpfs = async (e) => {
  //     let dataStringify = JSON.stringify(e);
  //     const ipfsResult = await client.add(dataStringify);
  //     const contentUri = `https://superfun.infura-ipfs.io/ipfs/${ipfsResult.path}`;
  //     console.log('contentUri', contentUri);
  //     return contentUri;
  //   }



  return (
    <BrainGymAuthContext.Provider
      value={{
        // login,
        // logout,
        uploadOnIpfs,
        // allNfts,
        handleImgUpload,
        // client,
        // loading,
        // setLoading,
        // GenerateNum,
        // prompt,
        // setPrompt,
        // genRanImgLoding,
        // userAdd,
        // uploadDatainIpfs,
        // getAllNfts,
        // getProfileData,
        // generateText,
        // storeDataInFirebase,
        // maticToUsdPricee,
        // provider
      }}
      {...props}
    >
      {props.children}
    </BrainGymAuthContext.Provider>
  );
};
