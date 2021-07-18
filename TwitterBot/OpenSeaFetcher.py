import requests
import io
import json


def OpenSeaFetchingSchema(token_id_of_nft, asset_contract_address_of_nft):
    url = "https://testnets-api.opensea.io/api/v1/asset/" + \
        asset_contract_address_of_nft + "/" + token_id_of_nft + "/?force_update=true"

    response = requests.request("GET", url)
    # print(response.json())
    #print(json.dumps(response.json(), indent=4))
    response2 = requests.request("GET", response.json()['token_metadata'])
    # print(json.dumps(response2.json()['image_poster_url']))
    getImage(response2.json()['image_poster_url'])
    return response.json()['permalink']


def getImage(url):
    with open('pic1.jpg', 'wb') as handle:
        response = requests.get(url, stream=True)

        if not response.ok:
            print(response)

        for block in response.iter_content(1024):
            if not block:
                break

            handle.write(block)


#OpenSeaFetchingSchema("3", "0x7c3a306e7e2adbc918ec8777d12335045471b110")
