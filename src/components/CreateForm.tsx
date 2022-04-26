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
  title: string;
  description: string;
}

export type optionsCall = {
  chain: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined,
  address: string,
  function_name: string,
  abi: any,
  params: any
}

const initialCreate: createType = {
  title: "",
  description: "",
}

export const CreateForm: React.FC<({onOpen: () => void, isOpen: boolean, onClose: () => void})> = ({isOpen, onClose}) => {
  const Web3Api = useMoralisWeb3Api()
  const { native } = useMoralisWeb3Api();
  const [type, setType] = useState<number>(1);
  const [fileURI, setFileURI] = useState(null)
  const [fileToUpload, setFileToUpload] = useState(null)


  async function getNFTs(values: createType) {
      console.log({values})
      console.log({fileURI})

      const _options: optionsCall = {
        chain: "bsc testnet",
        address: "0xfdC26cd4214702bd724032f789a28dc6Ab869b68",
        function_name: "ownerOf",
        abi: Dog,
        params: {
          tokenId: 1
        },
      };
      const transaction = await Web3Api.native.runContractFunction(_options);
      
      console.log(JSON.stringify(transaction))
    onClose()
  }

  const onChange = async (e: any) => {
    const fileToUpload = e.target.files[0]
    setFileToUpload(fileToUpload)
    console.log("Filename: ", fileToUpload.name)
    const fileToShow = await showFile(fileToUpload)
    setFileURI(fileToShow)
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
                        name="title"
                        placeholder="title"
                        label="Title"
                      />
                    <Box mt={4}>
                      <InputField
                        autoComplete="false"
                        name="description"
                        textarea={true}
                        placeholder="description"
                        label="Description"
                      />
                    </Box>
                    <Box mt={4}>
                      <input
                              type="file"
                              name="file"
                              accept="image/*"
                              onChange={onChange}
                          />
                          {
                              fileURI && (
                                <Box style={{display: 'flex', justifyContent: 'center'}}>
                                  <Image 
                                      alt="Mountains" 
                                      src={fileURI} 
                                      style={{objectFit: "contain"}}
                                  />
                                </Box>
                              )
                          }
                      </Box>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} type="submit">
                  Create
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
