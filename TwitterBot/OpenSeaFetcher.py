import requests
import io
#import json


def OpenSeaFetchingSchema(token_id_of_nft, asset_contract_address_of_nft):
    url = "https://testnets-api.opensea.io/api/v1/asset/" + asset_contract_address_of_nft + "/" + token_id_of_nft + "/?force_update=true"

    response = requests.request("GET", url)
    print(response)
    #print(json.dumps(response.json()['image_original_url'], indent=4))
    # return response.json()['image_original_url']


OpenSeaFetchingSchema("1", "0x7c3a306e7e2adbc918ec8777d12335045471b110")
