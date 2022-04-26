import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Image
} from '@chakra-ui/react'
import {Form, Formik} from 'formik'
import React, { useState } from 'react'
import { InputField } from './Input'
import { useMoralisWeb3Api,useMoralisWeb3ApiCall } from 'react-moralis'
import * as Yup from 'yup'
import uploadToIPFS from '../utils/Ipfs'
import {readFileSync, showFile} from '../utils/readFileSync'
import axios from 'axios'
import Dog from '../contracts-abi/dog-abi.json'

type createType = {
  price: number;
}

export type optionsCall = {
  chain: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined,
  address: string,
  function_name: string,
  abi: any,
  params: any
}

const initialCreate: createType = {
  price: 0,
}

export const PutOnSale: React.FC<({onOpen: () => void, isOpen: boolean, onClose: () => void})> = ({isOpen, onClose}) => {
  const Web3Api = useMoralisWeb3Api()
  const { native } = useMoralisWeb3Api();
  const [type, setType] = useState<number>(1);


  async function getNFTs(values: createType) {
      console.log({values})

      // const _options: optionsCall = {
      //   chain: "bsc testnet",
      //   address: "0xfdC26cd4214702bd724032f789a28dc6Ab869b68",
      //   function_name: "ownerOf",
      //   abi: Dog,
      //   params: {
      //     tokenId: 1
      //   },
      // };
      // const transaction = await Web3Api.native.runContractFunction(_options);
      
      // console.log(JSON.stringify(transaction))
    onClose()
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <Formik
          initialValues={initialCreate}
          validationSchema={Yup.object({
            title: Yup.string()
            .min(2, "Mininum 3 characters")
            .max(15, "Maximum 15 characters")
            .required("Required!")
          })}
          onSubmit={async function(values) {
            console.log("values: ", values)

            await getNFTs(values)
          }}
        >
          <Form >
            <ModalContent>
              <ModalHeader>Create NFT</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                      <InputField
                        autoComplete="false"
                        name="price"
                        placeholder="price"
                        label="Price"
                      />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} type="submit">
                  Put on sale
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
