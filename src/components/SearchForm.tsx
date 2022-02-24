import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Box
} from '@chakra-ui/react'
import {Form, Formik, useFormik} from 'formik'
import { FocusableElement } from '@chakra-ui/utils'
import React, { RefObject, useState } from 'react'
import Yup from 'yup'
import { InputField } from './Input'
import { useMoralisWeb3Api } from 'react-moralis'
import { CHAIN, GET_NFTs_BY_CONTRACT_ADDRESS, GET_NFTs_BY_CONTRACT_ADDRESS_AND_OWNER_ADDRESS, GET_NFTs_BY_KEYWORD, GET_NFTs_BY_OWNER_ADDRESS, GET_NFT_BY_TOKENID, GET_NFT_OWNER_BY_CONTRACT_ADDRESS } from '../constants'
import SelectInput from './SelectInput'
import { useNft } from '../context/main-data'

export type nftsType = {
  status?: string | undefined;
  total?: number | undefined;
  page?: number | undefined;
  page_size?: number | undefined;
  result?: {
      token_address: string;
      token_id: string;
      contract_type: string;
      owner_of: string;
      block_number: string;
      block_number_minted: string;
      token_uri?: string | undefined;
      metadata?: string | undefined;
      synced_at?: string | undefined;
      amount?: string | undefined;
      name: string;
      symbol: string;
  }[] | undefined;
}

type searchType = {
  ownerAddress: string,
  contractAddress: string,
  keyword: string,
  chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined,
  // type
  // 1: get nfts from contract Address and owner address
  // 2: get nfts from contract Address
  // 3: get nfts from owner Address
  // 4: get nft by tokenId
  // 5: get nfts owners by contract address
  type: number,
  tokenId: string
}

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

type nftSearchByTokenType = {
  total?: number | undefined;
  page?: number | undefined;
  page_size?: number | undefined;
  result?: {
      token_address: string;
      token_id: string;
      contract_type: string;
      token_uri?: string | undefined;
      metadata?: string | undefined;
      synced_at?: string | undefined;
      amount?: string | undefined;
      name: string;
      symbol: string;
  }[] | undefined;
}

type nftSearchByOwnerAddress = {
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

const initialSearch: searchType = {
  ownerAddress: "",
  contractAddress: "",
  keyword: "",
  chain: "eth",
  type: 1,
  tokenId: ""
}

type selectType = {
  label: string,
  value: string
}

const chains: selectType[] = CHAIN

const types: selectType[] = [
  {
    label: "GET_NFTs_BY_CONTRACT_ADDRESS_AND_OWNER_ADDRESS",
    value: GET_NFTs_BY_CONTRACT_ADDRESS_AND_OWNER_ADDRESS.toString()
  },
  {
    label: "GET_NFTs_BY_CONTRACT_ADDRESS",
    value: GET_NFTs_BY_CONTRACT_ADDRESS.toString()
  },
  {
    label: "GET_NFTs_BY_OWNER_ADDRESS",
    value: GET_NFTs_BY_OWNER_ADDRESS.toString()
  },
  {
    label: "GET_NFT_BY_TOKENID",
    value: GET_NFT_BY_TOKENID.toString()
  },
  {
    label: "GET_NFT_OWNER_BY_CONTRACT_ADDRESS",
    value: GET_NFT_OWNER_BY_CONTRACT_ADDRESS.toString()
  },
  {
    label: "GET_NFTs_BY_KEYWORD",
    value: GET_NFTs_BY_KEYWORD.toString()
  }
]

export const SearchForm: React.FC<({onOpen: () => void, isOpen: boolean, onClose: () => void})> = ({onOpen, isOpen, onClose}) => {
  const Web3Api = useMoralisWeb3Api()
  const [NFTs, setNFTs] = useState<nftsType>()
  const {nft, setNft} = useNft()
  const [NFTsSearch, setNFTsSearch] = useState<nftSearchType>()
  const [nftSearchByToken, setnftSearchByToken] = useState<nftSearchByTokenType>()
  const [nftSearchByOwner, setnftSearchByOwner] = useState<nftSearchByTokenType>()
  const [chain, setChain] = useState<searchType["chain"]>("eth");
  const [type, setType] = useState<number>(1);

  async function getNFTs(values: searchType) {
    switch (values.type) {
      case GET_NFTs_BY_CONTRACT_ADDRESS_AND_OWNER_ADDRESS: {
        const tmpNFTs = await Web3Api.account.getNFTsForContract({
          chain: values.chain, 
          address: values.ownerAddress, 
          token_address: values.contractAddress
        });
        setNFTs(tmpNFTs)
        break
      }
      case GET_NFTs_BY_CONTRACT_ADDRESS: {
        const tmpNFTs = await Web3Api.token.getAllTokenIds({
          chain: values.chain, 
          address: values.contractAddress
        })
        console.log("tmpNFTs: ", tmpNFTs)
        break
      }
      case GET_NFTs_BY_OWNER_ADDRESS: {
        const tmpNFTs = await Web3Api.account.getNFTs({
          chain: values.chain, 
          address: values.ownerAddress
        })
        setNFTs(tmpNFTs)
        console.log("tmpNFTs: ", tmpNFTs)
        break
      }
      case GET_NFT_BY_TOKENID: {
        const tmpNFTs = await Web3Api.token.getTokenIdMetadata({
          address: values.contractAddress,
          chain: values.chain,
          token_id: values.tokenId
        })
        console.log("tmpNFTs: ", tmpNFTs)
        break
      }
      case GET_NFT_OWNER_BY_CONTRACT_ADDRESS: {
        const tmpNFTs = await Web3Api.token.getNFTOwners({
          chain: values.chain,
          address: values.contractAddress
        })
        console.log("tmpNFTs: ", tmpNFTs)
        setNFTs(tmpNFTs)
        
        break
      }
      case GET_NFTs_BY_KEYWORD: {
        const tmpNFTs = await Web3Api.token.searchNFTs({
          chain: values.chain, 
          q: values.keyword,
          filter: "name"
        })
        console.log("tmpNFTs: ", tmpNFTs)
        setNFTsSearch(tmpNFTs)
        break
      }
    }
    setNft(NFTs)
  }

  const handleChangeChain = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChain(e.target.value as searchType["chain"])
  }

  const handleChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(parseInt(e.target.value))
  }
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <Formik
          initialValues={initialSearch}
          onSubmit={async function(values) {
            values.chain = chain
            console.log("values: ", values)
          }}
        >
          <Form >
            <ModalContent>
              <ModalHeader>Search NFTs</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                      <InputField
                        autoComplete="false"
                        name="keyword"
                        placeholder="keyword"
                        label="Keyword"
                      />
                    <Box mt={4}>
                      <InputField
                        autoComplete="false"
                        name="ownerAddress"
                        placeholder="owner's Address"
                        label="Owner's Address"
                      />
                    </Box>
                    <Box mt={4}>
                      <InputField
                        autoComplete="false"
                        name="contractAddress"
                        placeholder="contract address"
                        label="Contract address"
                      />
                    </Box>
                    <Box mt={4}>
                      <SelectInput 
                        name="chain"
                        placeholder="chain"
                        label="Chain"
                        values={chains}
                        value={chain}
                        handleChange={handleChangeChain}
                      />
                    </Box>
                    
                    <Box mt={4}>
                      <SelectInput 
                        name="type"
                        placeholder="type"
                        label="Type"
                        values={types}
                        value={type}
                        handleChange={handleChangeType}
                      />
                    </Box>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} type="submit">
                  Search
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Form>
        </Formik>
      </Modal>
    </>
  ) 

}
