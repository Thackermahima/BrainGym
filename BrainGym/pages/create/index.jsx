import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import Collection_dropdown2 from "../../components/dropdown/collection_dropdown2";
import {
  collectionDropdown2_data,
  EthereumDropdown2_data,
} from "../../data/dropdown";
// import ethers from 'ethers';
const { ethers } = require('ethers');

import { RECORD_KEEPER_CONTRACT, basicABI, recordABI } from "../../constant/constant";
import { FileUploader } from "react-drag-drop-files";
import Proparties_modal from "../../components/modal/proparties_modal";
import { useDispatch } from "react-redux";
import { showPropatiesModal } from "../../redux/counterSlice";
import Meta from "../../components/Meta";
import Image from "next/image";
import { BrainGymAuthContext } from "../../context/brainGymContext";


const Create = () => {

  const superCbrainGymContext = React.useContext(BrainGymAuthContext);
  const { handleImgUpload, uploadOnIpfs, storeDataInFirebase, getCollection } = superCbrainGymContext;
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [sessionTime, SetSessionTime] = useState();
  const [numberOfCollection, setNumberOfCollection] = useState();
  const [price, setPrice] = useState();
  const [chain, setChain] = useState("");



  const handleChange = async (event) => {
    let img = await handleImgUpload(event.target.files[0]);
    console.log(img);
    setImage(img);

  };
  const handleOptionChange = (event) => {
    SetSessionTime(event.target.value);
    console.log(sessionTime);
  };

 
  const GenerateCollection = async () => {

    const nftCollectionData = {
      title: title,
      description: description,
      price: price,
      chain: chain,
      img: image,
      numOfCollection: numberOfCollection,
      sessionTime: sessionTime,
      owner: localStorage.getItem('walletAddress'),
    }

    console.log(nftCollectionData);



    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      RECORD_KEEPER_CONTRACT,
      recordABI,
      signer
    );
    const tx = await contract.createNFTCollection("dhruv", "DRV");
    let txc = await tx.wait();
    let event = txc.events[0];
    let tokenContractAddress = event.args[1];
    console.log('tokenContractAddress', tokenContractAddress);

    if (txc) {

      console.log(tokenContractAddress, "token add");

      nftCollectionData.tokenContractAddress = tokenContractAddress;

      let metadataurl = await uploadOnIpfs(nftCollectionData);
      console.log(metadataurl);
      await storeDataInFirebase(metadataurl, tokenContractAddress);
      console.log(txc, "Successfully created!");
    }

    let address = localStorage.getItem("walletAddress")

    let transactionBulkMint = await contract.bulkMintERC721(
      address,
      tokenContractAddress,
      numberOfCollection,
      parseInt(price),
    );
    let txb = await transactionBulkMint.wait();
    // console.log('bulk tx', txb);
    console.log('bulk tx', txb);
    await getCollection();
  }

  return (
    <div>
      <Meta title="Create" />
      {/* <!-- Create --> */}
      <section className="relative py-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <Image
            width={1519}
            height={773}
            priority
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="container">
          <h1 className="font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white">
            Create
          </h1>

          <div className="mx-auto max-w-[48.125rem]">
            {/* <!-- File Upload --> */}
            <div className="mb-6">
              <label className="font-display text-jacarta-700 mb-2 block dark:text-white">
                Image
                {/* <span className="text-red">*</span> */}
              </label>

              {image ? (
                <p className="dark:text-jacarta-300 text-2xs mb-3">
                  successfully uploaded : {image}
                </p>
              ) : (
                <p className="dark:text-jacarta-300 text-2xs mb-3">
                  choose your image to upload
                </p>
              )}

              <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white py-20 px-5 text-center">
                <div className="relative z-10 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-jacarta-500 mb-4 inline-block dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z" />
                  </svg>
                  <p className="dark:text-jacarta-300 mx-auto max-w-xs text-xs">

                  </p>
                </div>
                <div className="dark:bg-jacarta-600 bg-jacarta-50 absolute inset-4 cursor-pointer rounded opacity-0 group-hover:opacity-100 ">

                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 cursor-pointer opacity-0"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Name --> */}
            <div className="mb-6">
              <label
                htmlFor="item-name"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Title
                {/* <span className="text-red">*</span> */}
              </label>
              <input
                value={title}
                type="text"
                id="item-name"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="Item name"
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* <!-- Description --> */}
            <div className="mb-6">
              <label
                htmlFor="item-description"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Description
              </label>
              <p className="dark:text-jacarta-300 text-2xs mb-3">
                The description will be included on the {"item's"} detail page
                underneath its image. Markdown syntax is supported.
              </p>
              <textarea
                id="item-description"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Provide a detailed description of your item."
              ></textarea>
            </div>
            {/* time duration */}
            <label
              htmlFor="item-description"
              className="font-display text-jacarta-700 mb-2 block dark:text-white"
            >
              Session for:
            </label>
            <div style={{ display: "inline-flex" }} >
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="15 min"
                  checked={sessionTime === "15 min"}
                  onChange={handleOptionChange} />
                <label class="form-check-label ml-3" for="inlineRadio1">15 min</label>
              </div>
              <div class="form-check form-check-inline ml-5">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="30 min"
                  checked={sessionTime === "30 min"}
                  onChange={handleOptionChange} />
                <label class="form-check-label ml-3" for="inlineRadio2 ">30 min</label>
              </div>
              <div class="form-check form-check-inline ml-5">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="60 min"
                  checked={sessionTime === "60 min"}
                  onChange={handleOptionChange} />
                <label class="form-check-label ml-3" for="inlineRadio3">60 min</label>
              </div>
            </div>


            {/* <!-- Price --> */}
            <div className="mb-6 mt-5">
              <label
                htmlFor="item-name"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Price
                {/* <span className="text-red">*</span> */}
              </label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                id="item-name"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="Price"
                required
              />
            </div>
            {/* <!-- Collection --> */}
            <div className="relative">
              <div>
                <label className="font-display text-jacarta-700 mb-2 block dark:text-white">
                  What do you plan to offer?
                </label>
                <div className="mb-3 flex items-center space-x-2">
                  <p className="dark:text-jacarta-300 text-2xs">
                    Choose plan that you would like to offer

                  </p>
                </div>
              </div>

              {/* dropdown */}
              <div className="dropdown my-1 cursor-pointer">
                <Collection_dropdown2
                  data={collectionDropdown2_data}
                  collection={true}
                />
              </div>
            </div>

            {/* <!-- Properties --> */}


            {/* <!-- Supply --> */}
            <div className="mb-6">
              <label
                htmlFor="item-supply"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              > <br></br>
                NFT collection
              </label>

              <div className="mb-3 flex items-center space-x-2">
                <p className="dark:text-jacarta-300 text-2xs">
                  The number of items that can be minted.

                </p>
              </div>

              <input
                type="number"
                id="item-supply"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="1"
                value={numberOfCollection}
                onChange={(e) => setNumberOfCollection(e.target.value)}
              />
            </div>

            {/* <!-- Blockchain --> */}
            <div className="mb-6">
              <label
                htmlFor="item-supply"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Blockchain
              </label>

              {/* dropdown */}
              <div className="dropdown relative mb-4 cursor-pointer ">
                <Collection_dropdown2 data={EthereumDropdown2_data} />
              </div>
            </div>


            {/* <!-- Submit --> */}
            <button
              onClick={GenerateCollection}
              className="bg-accent-lighter cursor-default rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
            >
              Create
            </button>
          </div>
        </div>
      </section>
      {/* <!-- end create --> */}
    </div>
  );
};

export default Create;

// comment on index for push code in dhruv branch
