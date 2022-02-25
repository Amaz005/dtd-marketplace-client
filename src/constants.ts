export const AppId = process.env.NEXT_PUBLIC_REACT_APP_MORALIS_APP_ID ? process.env.NEXT_PUBLIC_REACT_APP_MORALIS_APP_ID : ""
export const ServerUrl = process.env.NEXT_PUBLIC_REACT_APP_MORALIS_SERVER_URL ? process.env.NEXT_PUBLIC_REACT_APP_MORALIS_SERVER_URL : ""
export const GET_NFTs_BY_CONTRACT_ADDRESS_AND_OWNER_ADDRESS = 1
export const GET_NFTs_BY_CONTRACT_ADDRESS = 2
export const GET_NFTs_BY_OWNER_ADDRESS = 3
export const GET_NFT_BY_TOKENID = 4
export const GET_NFT_OWNER_BY_CONTRACT_ADDRESS = 5
export const GET_NFTs_BY_KEYWORD = 6
export const CHAIN = [
  {
    label: "eth",
    value: "eth"
  } ,
  {
    label: "0x1",
    value: "0x1"
  } ,
  {
    label: "ropsten",
    value: "ropsten"
  } ,
  {
    label: "0x3",
    value: "0x3"
  } ,
  {
    label: "rinkeby",
    value: "rinkeby"
  } ,
  {
    label: "0x4",
    value: "0x4"
  } ,
  {
    label: "goerli",
    value: "goerli"
  } ,
  {
    label: "0x5",
    value: "0x5"
  } ,
  {
    label: "kovan",
    value: "kovan"
  } ,
  {
    label: "0x2a",
    value: "0x2a"
  } ,
  {
    label: "polygon",
    value: "polygon"
  } ,
  
  {
    label: "0x89",
    value: "0x89"
  } ,
  {
    label: "mumbai",
    value: "mumbai"
  } ,
  {
    label: "0x13881",
    value: "0x13881"
  } ,
  {
    label: "bsc",
    value: "bsc"
  } ,
  {
    label: "0x38",
    value: "0x38"
  } ,
  {
    label: "bsc testnet",
    value: "bsc testnet"
  } ,
  {
    label: "0x61",
    value: "0x61"
  } ,
  {
    label: "avalanche",
    value: "avalanche"
  } ,
  {
    label: "avalanche testnet",
    value: "avalanche testnet"
  } ,
  {
    label: "0xa869",
    value: "0xa869"
  } ,
  {
    label: "fantom",
    value: "fantom"
  } ,
  {
    label: "0xfa",
    value: "0xfa"
  } 
]

export type nftSearchType = {
  total?: number | undefined;
  page?: number | undefined;
  page_size?: number | undefined;
  result?: ({
      token_address: string;
      token_id: string;
      contract_type: string;
      token_uri: string;
      metadata: string;
      synced_at: string;
  } & {
      token_hash: unknown;
  })[] | undefined;
}

export type resultType = {
  token_address: string;
  token_id: string;
  contract_type: string;
  token_uri?: string | undefined;
  metadata?: string | undefined;
  synced_at?: string | undefined;
  amount?: string | undefined;
  name: string;
  symbol: string;
}