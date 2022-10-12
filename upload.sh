#!/bin/bash
FILES="/Users/benyarb/Code/NFTG/Ballerz/ballerz-cloud/transparent/*"
for f in $FILES
do
  filename=$(basename -- "$f")
  filename="${filename%.*}"
  echo "Processing file: $f id: $filename ..."
  curl -X POST -F file=@$f -H "Authorization: Bearer $IMAGE_API_KEY" https://api.cloudflare.com/client/v4/accounts/$IMAGE_ACCOUNT_ID/images/v1 --form "id=$filename"
done