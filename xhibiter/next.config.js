/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ["cdn.jsdelivr.net"],
  },
   env: {
      apiKey: "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",
      infuraProjectKey: "2DQRq820rLbznhFlkIbTkuYAyCS",
      infuraSecretKey: "33d97cf6366f9565421e36ff7e018e60",
      privateKey: "022cee959834961a1d85fe253789846d986ed1e375ea7f5cf5d2d170e1b31e7c",
      quicknodehttpurl: "https://neat-newest-putty.matic-testnet.discover.quiknode.pro/c25c07f578926c8303dce090ce12850ab5debcf4/",
      polygonkey: "6MK7IU8PX7BN5NII42EEVYCHT3MMHZJWTN",
      accountprivetkey: "022cee959834961a1d85fe253789846d986ed1e375ea7f5cf5d2d170e1b31e7c",
      REACT_APP_NFT_STORAGE_TOKEN : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDlkNTYwMUJiOWNFOTkyQjZkYjU4OWYzMGY1NDZGMmYxODJhM0RCOTAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MzM0NzIzNzMwNSwibmFtZSI6InRydXN0aWZpZWQtZnZtIn0.YDlyBmcRUT0lb2HmMzT0tS1AUY8pGNp1NHqN4xr8_fk"
    },
};

module.exports = nextConfig;
