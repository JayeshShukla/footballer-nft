// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract FootballerNFT is ERC721, Ownable, ERC721URIStorage {
    uint256 private _nextTokenId;
    mapping(uint256 => uint) public tokensLevel;
    mapping(address => uint256[50]) public tokensPerAddress;
    mapping(address => uint256[]) public userTokenList;

    constructor(
        address initialOwner
    ) ERC721("footballer-NFT", "FNFT") Ownable(initialOwner) {}

    function createTokenURI(
        uint256 tokenId,
        string memory jerseyNo,
        string memory nftURI,
        string memory country,
        string memory club,
        string memory description
    ) public pure returns (string memory) {
        bytes memory dataURI = abi.encodePacked(
            "{",
            '"name": "#',
            Strings.toString(tokenId),
            '",',
            '"description": "',
            description,
            '",',
            '"image": "',
            nftURI,
            '",',
            '"attributes": [',
            '{"trait_type": "Country", "value": "',
            country,
            '"},',
            '{"trait_type": "Jersey Number", "value": "',
            jerseyNo,
            '"},',
            '{"trait_type": "Plays From Club", "value": "',
            club,
            '"}',
            "]",
            "}"
        );

        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(dataURI)
                )
            );
    }

    function addNFTUrl(
        string memory encodedImage
    ) public pure returns (string memory) {
        bytes memory dataURI = abi.encodePacked(encodedImage);
        return
            string(
                abi.encodePacked(
                    "data:image/svg+xml;base64,",
                    Base64.encode(dataURI)
                )
            );
    }

    function safeMint(
        address to,
        uint256 objectId,
        string memory jerseyNo,
        string memory nftURI,
        string memory country,
        string memory club,
        string memory description
    ) public returns (bool) {
        if (tokensPerAddress[to][objectId] == 0) {
            uint256 tokenId = ++_nextTokenId;
            tokensPerAddress[to][objectId] = tokenId;
            tokensLevel[tokenId]++;
            userTokenList[to].push(tokenId);
            string memory addedNFT = addNFTUrl(nftURI);
            string memory dynamicTokenURI = createTokenURI(
                tokenId,
                jerseyNo,
                addedNFT,
                country,
                club,
                description
            );
            _safeMint(to, tokenId);
            _setTokenURI(tokenId, dynamicTokenURI);
            return true;
        } else {
            return false;
        }
    }

    function usersTotalToken(address to) public view returns (uint256) {
        return userTokenList[to].length;
    }

    function burn(address owner, uint256 objectId) public {
        uint256 destroyTokenId = tokensPerAddress[owner][objectId];
        tokensLevel[destroyTokenId] = 0;
        tokensPerAddress[owner][objectId] = 0;
        _burn(destroyTokenId);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}