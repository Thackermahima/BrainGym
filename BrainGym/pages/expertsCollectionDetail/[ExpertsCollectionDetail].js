import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
const { ethers } = require('ethers');
import { BrainGymAuthContext } from '../../context/brainGymContext';
import { basicABI } from '../../constant/constant';

const ExpertsCollectionDetail = () => {

  const router = useRouter();
  const contractAdd = router.query.ExpertsCollectionDetail;
  console.log();
  const superCbrainGymContext = React.useContext(BrainGymAuthContext);
  const { getTokensOfCollection, buyNftToken } = superCbrainGymContext;
  const [allNfts, setAllNfts] = useState([]);

  useEffect(() => {
    const delay = 2000;
    const timer = setTimeout(() => {
      getTokens();
    }, delay);

    return () => clearTimeout(timer);
  }, [contractAdd]);

  const getTokens = async () => {
    let allTokens = await getTokensOfCollection(contractAdd);
    console.log('alltkns', allTokens);
    setAllNfts(allTokens);
  }

  // const buyNftToken = async (tokenId,price) => {

  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   const contract = new ethers.Contract(
  //     contractAdd,
  //     basicABI,
  //     signer
  //   );

  //   let tx = await contract.purchaseItem(tokenId, localStorage.getItem("walletAddress"), { value: ethers.utils.parseUnits(price.toString(), "ether"), })
  //   let txc = await tx.wait();

  // }




  return (
    <>
      <h1 style={{ marginTop: "10%", fontSize: "30px", fontWeight: "bolder" }} className="ml-5" > Disha' Collections</h1>

      <div className="container-fluid grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4 ml-5 mr-5"
        style={{ marginTop: "5%" }}>


        {allNfts?.length > 0 && allNfts.map((item) => {
          return (
            <article >
              {/* <Link
            href="/expertsCollectionDetail/[id]"
            as={`/expertsCollectionDetail/${2}`}  // Manually set the ID for now
          > */}

              <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                <figure className="relative">
                  <img
                    width={230}
                    height={230}
                    src={item?.img}
                    alt="item 5"
                    className="w-full h-[230px] rounded-[0.625rem] object-cover"
                  />




                </figure>
                <div className="mt-7  items-center justify-between" style={{ textAlign: "center" }} >

                  <span className="font-display text-jacarta-700 hover:text-accent text-base dark:text-white " >
                    # 21 DSA
                  </span>
                  <div className="font-display text-jacarta-700 hover:text-accent text-base dark:text-white mt-5 mb-3">


                    <button
                      onClick={() => {
                        buyNftToken(contractAdd, item?.tokenid, item?.price);
                      }}
                      className=" text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-56 rounded-full bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white "
                    >
                      Buy for : {item?.price} ETH
                    </button>
                  </div>

                </div>
                {/* </Link> */}
              </div>
            </article>
          )
        })}


      </div>

    </>
  )
}
export default ExpertsCollectionDetail;