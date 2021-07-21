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
    # print(json.dumps(response2.json()['image_preview_url']))
    getImage(response2.json()['image_poster_url'])
    # getVid(response.json()['image_preview_url'])
    return response.json()['permalink']


def retrieveCollection(asset_owner):
    url = "https://testnets-api.opensea.io/api/v1/assets/"
    querystring = {"owner": asset_owner,
                   "order_direction": "desc", "offset": "0", "limit": "20"}

    response = requests.request("GET", url, params=querystring)
    print(json.dumps(response.json(), indent=4))
    return response


def getImage(url):
    with open('pic1.jpg', 'wb') as handle:
        response = requests.get(url, stream=True)

        if not response.ok:
            print(response)

        for block in response.iter_content(1024):
            if not block:
                break

            handle.write(block)


def getVid(url):
    r = requests.get(url, stream=True)
    with open('vid1.mp4', 'wb') as f:
        for chunk in r.iter_content(chunk_size=1024*1024):
            if chunk:
                f.write(chunk)


#OpenSeaFetchingSchema("3", "0x7c3a306e7e2adbc918ec8777d12335045471b110")
retrieveCollection("0x0e1aFDCD7BCa770aD9DD17d04c6F82816B156D47")
