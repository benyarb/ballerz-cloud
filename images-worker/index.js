addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Route the image request either to the original image on S3
 * or to Cloudflare Images, depending on the value of "?use_cf_images" in the URL
 * @param {Request} request
 */

const config = {
  // This is the Images account Hash you'll find in your Cloudflare Images Dashboard
  // It is safe to disclose publicly, as this is not a secret value.
  cloudflare_images_account_hash: "HfLkp4Rv9xEt4shRjwi1Gw",
}

async function handleRequest(request) {
  const url = new URL(request.url);

  const { variant, imageName } = extractVariant(url);
  if (!variant || !imageName) {
    return notFound();
  }

  // Use Cloudflare Images to deliver image ✨
  // by cosntructing the CF Images URL with parts extracted from
  // the original website image URLs that this worker intercepts
  return fetch("https://imagedelivery.net/" + config.cloudflare_images_account_hash + "/" + imageName + "/" + variant, {
    // relay request headers to Cloudflare Images,
    // to inform about the media types accepted by the HTTP client
    headers: request.headers,
  });
}

function extractVariant(url) {
  // takes website URLs like /image/baller/7562
  // and identifies the variant (here, "baller")
  // and imageName ( here, "7562")
  const parts = url.pathname.replace("/image/", "").split("/");
  const variant = parts.shift();
  return { variant: variant, imageName: parts.join("/") };
}

function notFound() {
  return new Response("Not found", { status: 404 });
}
