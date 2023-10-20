import React from 'react'

export default function expertsCollectionDetail() {
    return (
        <>
            <div style={{ marginBottom: "0px" }} className="app-container">



                <div className="profile-layout">
                    <header className="background background-lg" style={{ backgroundColor: "#4b2caa" }}>
                        <div className="avatar avatar-profile center-block">
                            <Avatar name="Foo Bar" round={true} />
                        </div>
                        <div className="badges">
                            <h1 className="profile-name h3">{obj[0].attributes.authorName}</h1>
                            <h5>{AllTokenIds?.length}  NFTs</h5>
                        </div>
                    </header>
                </div>
                <div style={{ marginTop: "62px" }} className="container">
                    <div className="row">
                        {imageURls.map((img) => {
                            return (
                                <div className="col-md-3 col-sm-6">
                                    <div className="card-readership-detail card-block">
                                        <h4 className="card-title-readership text-right"></h4>
                                        <img className="Nft-img" src={img.imageUrl} alt="Photo of sunset" />
                                        <h5 className="card-title-readership mt-3 mb-3"> {img.tokenId} {obj[0].attributes.symbol}</h5>
                                        {img.sold ? (
                                            <button
                                                type="button"
                                                className="btn btn-outline-success"
                                                disabled
                                            >
                                                Sold Out
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                className="btn btn-outline-success"
                                                onClick={() => {
                                                    buyMarketItem(img.tokenId);
                                                }}
                                            >
                                                Buy for {obj[0].attributes.tokenPrice} MATIC
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}
