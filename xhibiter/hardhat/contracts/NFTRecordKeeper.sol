// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./BasicNFTMarketplace.sol";

contract NFTRecordKeeper {
    mapping(address => uint256[]) contractTokenIds;
    address[] tokenContracts;
    event TokenCreated(address, address);


    function createNFTCollection(string memory name, string memory symbol)
        public
    {
        address _address = address(new BasicNFTMarketplace(name, symbol)); // Created Token contract.
                emit TokenCreated(msg.sender, _address);

    }

    function bulkMintERC721(
        address mintor,
        address tokenAddress,
        uint256 end,
        uint256 price
    ) public {
        uint256 count = 0;
        for (uint256 i = count; i < end; i++) {
            uint256 tokenId = BasicNFTMarketplace(tokenAddress).safeMint(
                mintor,
                price
            );

            contractTokenIds[tokenAddress].push(tokenId);
            count++;
        }
    }


    // function getNFTCollections() external view returns (address[] memory) {
    //     return nftCollections;
    // }
 
}
