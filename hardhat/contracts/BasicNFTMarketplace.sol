// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";



contract BasicNFTMarketplace is ERC721 {

    uint private tokenCounter;
    mapping(uint256 => Item) public Items;

     struct Item {
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    function getCounter() public view returns (uint){
        return tokenCounter;
    }


    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}

    function safeMint(address to, uint256 price) public returns (uint256) {
        uint256 tokenId = tokenCounter;
        _safeMint(to, tokenId);

        Items[tokenId] = Item(
            address(this),
            tokenId,
            payable(to),
            payable(address(0)),
            price,
            false
        );

        tokenCounter++;
        return tokenId;
    }



     function purchaseItem(uint256 tokenId, address to) external payable {
        uint256 price = Items[tokenId].price;
        Item memory item = Items[tokenId];

        require(
            msg.value >= price,
            "not enough matic to cover item price and market fee"
        );
        require(!item.sold, "item already sold");

        item.seller.transfer(item.price);
        item.sold = true;
        IERC721(item.nftContract).transferFrom(item.seller, to, tokenId);
        Items[tokenId].owner = payable(to);

    }
 


}
