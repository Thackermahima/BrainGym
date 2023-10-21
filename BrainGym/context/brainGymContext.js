import React, { useState, createContext, useEffect, useRef } from "react";
// import { SUPER_COOL_NFT_CONTRACT, abi } from "../constant/constant";
import { Buffer } from 'buffer';
import { create } from 'ipfs-http-client';
import { ethers } from 'ethers';
// import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { basicABI } from "../constant/constant";

// import { getDatabase, ref, set } from "firebase/database";
export const BrainGymAuthContext = createContext(undefined);

export const BrainGymAuthContextProvider = (props) => {

  //   const [walletConnected, setWalletConnected] = useState(false);
  //   const [loading, setLoading] = useState(false);
  const [allCollection, setAllCollection] = useState([]);
  //   const [prompt, setPrompt] = useState("");
  //   const [userAdd, setUserAdd] = useState();
  //   const [genRanImgLoding, setGenRanImgLoding] = useState(false);
  //   const [provider, setProvider] = useState(null);
  //   const [signer, setSigner] = useState(null);

  //   console.log(allNfts);
  useEffect(() => {
    getCollection();
  }, [])

  const firebaseConfig = {
    apiKey: "AIzaSyDabE8BEXQknn_AJ8i18UNscrI1g_-5h5s",
    authDomain: "braingym-db041.firebaseapp.com",
    projectId: "braingym-db041",
    storageBucket: "braingym-db041.appspot.com",
    messagingSenderId: "578803923022",
    appId: "1:578803923022:web:e2928f285bbc318c826b1f"
  };



  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore();
  const collectionRef = collection(firestore, "NFTCollection");

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


  async function storeDataInFirebase(metadataUrl, tokenContractAddress) {
    const newData = {
      userAddress: localStorage.getItem("walletAddress"),
      url: metadataUrl,
      tokenContractAddress: tokenContractAddress
    };
    const docRef = await addDoc(collectionRef, newData);
    console.log("Data stored successfully! Document ID:", docRef.id);
  }


  async function getCollection() {
    try {
      const querySnapshot = await getDocs(collectionRef);
      const data = querySnapshot.docs.map((doc) => doc.data());
      console.log("Fetched data:", data);
      const metadatas = [];

      for (let i = 0; i <= data.length - 1; i++) {
        // console.log(data[i], '------------');
        let tokenURI = data[i].url;
        // console.log(tokenURI);
        const response = await fetch(tokenURI);
        const metadata = await response.json();

        // console.log(await response.json());
        metadatas.push(metadata);
      }
      setAllCollection(metadatas);
    } catch (error) {
      console.error("Error fetching data: ", error);
      return [];
    }
    console.log(allCollection);
  }

  // const getCollection = async () => {
  //   const q = query(
  //     collection(db, "NFTCollection"),
  //     where("userAddress", "==", localStorage.getItem("walletAddress"))
  //   );
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((fire) => {
  //     const data = {
  //       owner: localStorage.getItem('address'),
  //     };
  //     const dataref = doc(db, "TokenUri", fire.id);
  //     updateDoc(dataref, data);
  //   })
  // }


  const getTokensOfCollection = async (tokenContractAddress) => {


    


    // console.log('both----', tokenContractAddress);
    // const q = query(
    //   collection(firestore, "NFTCollection"),
    //   where("tokenContractAddress", "==", tokenContractAddress)
    // );


    // const provider = await new ethers.providers.Web3Provider(window.ethereum);
    // const contract = new ethers.Contract(
    //   tokenContractAddress,
    //   basicABI,
    //   provider
    // );
    // const result = await contract.getCounter();
    // let count = result.toNumber();



    // const querySnapshot = await getDocs(q);
    // console.log(querySnapshot);
    // for (let i = 0; i < count; i++) {
    //   console.log('log in loop');
    //   const fire = querySnapshot.data;
    //   console.log('fire h', fire);


    }
    // querySnapshot.forEach((fire) => {
    //   const data = {
    //     owner: localStorage.getItem('address'),
    //   };
    //   const dataref = doc(db, "TokenUri", fire.id);
    //   updateDoc(dataref, data);
    // })
  }

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


  const login = async () => {
    if (!window.ethereum) return;
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (typeof window !== 'undefined') {
        localStorage.setItem('walletAddress', accounts[0]);
      }

    } catch (error) {
      console.error('Login error:', error);
    }
  }

  const logout = async () => {
    localStorage.removeItem('walletAddress');
  }

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
        login,
        logout,
        uploadOnIpfs,
        handleImgUpload,
        // getProfileData,
        getCollection,
        allCollection,
        storeDataInFirebase,
        getTokensOfCollection
      }}
      {...props}
    >
      {props.children}
    </BrainGymAuthContext.Provider>
  );
};
