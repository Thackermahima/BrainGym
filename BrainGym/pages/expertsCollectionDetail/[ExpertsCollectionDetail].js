import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const ExpertsCollectionDetail = () => {

    const router = useRouter();
    const id = router.query.ExpertsCollectionDetail;

    console.log(id, '---id');

    return (
        <>
            <h1 style={{ marginTop: "10%", fontSize: "30px", fontWeight: "bolder" }} className="ml-5" > Disha' Collections</h1>

            <div className="container-fluid grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4 ml-5 mr-5"
                style={{ marginTop: "5%" }}>

                <article >
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                        <figure className="relative">
                            <Image
                                width={230}
                                height={230}
                                src="/images/meme.jpeg"
                                alt="item 5"
                                className="w-full h-[230px] rounded-[0.625rem] object-cover"
                            />
                        </figure>
                        <div className="mt-7  items-center justify-between" style={{ textAlign: "center" }} >

                            <span className="font-display text-jacarta-700 hover:text-jacarta-500 text-base dark:text-white " >
                                21 DSA
                            </span>
                            <div className="font-display text-jacarta-700 hover:text-jacarta-500 text-base dark:text-white mt-5 mb-3">


                                <Link
                                    href="/collection/explore_collection"
                                    className=" mt-5 text-accent shadow-white-volume hover:bg-jacarta-500-dark hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white "
                                >
                                    Buy for : 1 MNT
                                </Link>
                            </div>

                        </div>
                    </div>
                </article>




            </div>

        </>
    )
}
export default ExpertsCollectionDetail;
