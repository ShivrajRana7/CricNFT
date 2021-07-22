Hello World

Upload:

1st: Original Video
2nd: Thumbnail

3rd: Metadata.json (with 1st and 2nd)
3rd's Link => TokenURI

#Required APIs:
[*]Player Stats: Still Finding
[*]For Collection(of a particular user): "https://testnets-api.opensea.io/api/v1/assets" {queryString => owner: User's Wallet Address}
[*]For MarketPlace (all tokens): "https://testnets-api.opensea.io/api/v1/asset_contract/OurContractAddress"
[*]Particular Set for Marketplace(Gold, Silver etc.): "https://testnets-api.opensea.io/api/v1/assets" {queryString => asset_contract_address: OurContractAddress} then fetch the token's metadata and from that the particular class
[*]If needed a single asset: "https://testnets-api.opensea.io/api/v1/asset/asset_contract_address/token_id/"
