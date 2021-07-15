import requests
import io


def OpenSeaFetchingSchema(token_id_of_nft, asset_contract_address_of_nft):
    print(token_id_of_nft, asset_contract_address_of_nft)
    url = "https://api.opensea.io/api/v1/asset/" + \
        token_id_of_nft + "/" + asset_contract_address_of_nft

    queryString = {"token_ids": token_id_of_nft,
                   "asset_contract_address": asset_contract_address_of_nft}

    response = requests.request("GET", url)
    # fname = "./scripts/OpenSeaOutput.json"

    # with io.open(fname, "w", encoding="utf-8") as f:
    #     writer = response.text
    #     writer.replace("'", '"')
    #     writer.replace("True", '"True"')
    #     writer.replace("False", '"False"')
    #     f.write(writer)
    #     f.close()

    print(response)

    # return response.json()['assets'][0]['name'], response.json()['assets'][0]['permalink']


OpenSeaFetchingSchema("1",
                      "0x7c3a306e7e2adbc918ec8777d12335045471b110")
