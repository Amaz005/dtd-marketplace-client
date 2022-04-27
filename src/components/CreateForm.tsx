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
  Image,
  useDisclosure
} from '@chakra-ui/react'
import {Form, Formik} from 'formik'
import React, { useEffect, useState } from 'react'
import { InputField } from './Input'
import { useMoralisWeb3Api,useMoralis } from 'react-moralis'
import * as Yup from 'yup'
import uploadToIPFS from '../utils/Ipfs'
import {readFileSync, showFile} from '../utils/readFileSync'
import axios from 'axios'
import Dog from '../contracts-abi/dog-abi.json'
import AlertComponent, { AlertProps } from './Alert'

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
  const { authenticate, isAuthenticated, user, logout} = useMoralis();
  const [listFiles, setListFiles] = useState<any[]>([]);
  const [listFilesToUpload, setListFilesToUpload] = useState<any[]>([]);
  const { 
    isOpen: isAlertOpen, 
    onToggle
} = useDisclosure()
  const [alertProps, setAlertProps] = useState<AlertProps>()

  useEffect(() => {
    if(isOpen) {
      setListFiles([])
      setListFilesToUpload([])
    }
  }, [isOpen])

  async function callContract(values: createType) {
    const fullObjectHash: any[] = [];
    for (let i = 0; i < listFilesToUpload.length; i++) {
      const fileAsArrayBuffer = await readFileSync(listFilesToUpload[i]);
      const ipfsImagePath = await uploadToIPFS(fileAsArrayBuffer);
      if (!fileAsArrayBuffer) {
          return null
      }
      console.log("ipfsImagePath: ", ipfsImagePath)
      console.log(listFiles[i])
      console.log(`image uri: https://ipfs.io/ipfs/${ipfsImagePath}?filename=${listFiles[i].fileName}`)
      const json = {
          name: values.title,
          description: values.description || ``,
          image: `https://ipfs.io/ipfs/${ipfsImagePath}?filename=${listFiles[i].fileName}`,
          external_url: "",
          attributes: [],
      };
      fullObjectHash.push(await uploadToIPFS(JSON.stringify(json)));
    }
    console.log({fullObjectHash})
    // const userWallet = user?.attributes.ethAddress
    // const _options: optionsCall = {
    //   chain: "bsc testnet",
    //   address: "0xc98498Eba01A506AD277FD9254A238B44D8882dc",
    //   function_name: "mint",
    //   abi: Dog,
    //   params: {
    //     to: userWallet,
    //     quantity: fullObjectHash.length,
    //     cids: [...fullObjectHash]
    //   },
    // };
    // const transaction = await Web3Api.native.runContractFunction(_options);
    
    // console.log(JSON.stringify(transaction))
    onClose()
  }

  const onChange = async (e: any) => {
    const _listFilesUpload: any[] = []
    const _listFiles: any[] = []
    for (let file of e.target.files) {
      _listFilesUpload.push(file)
      const fileToShow = await showFile(file)
      _listFiles.push({
        data: fileToShow,
        fileName: file.name
      })
    }
    setListFilesToUpload(_listFilesUpload)
    setListFiles(_listFiles)
    console.log({listFiles})
  }

  return (
    <>
      <AlertComponent isOpen={isAlertOpen} onToggle={onToggle} status="success" message="success"/>
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
            .required("Required!")
          })}
          onSubmit={async function(values) {
            onToggle()
            await callContract(values)
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
                              multiple
                              accept="image/*"
                              onChange={onChange}
                          />
                          { 
                            (listFiles|| []).map((data, index) => 
                              <Box key={index} style={{display: 'flex', justifyContent: 'center', margin: "4px 0px 4px 0px"}}>
                                <Image 
                                    alt="Mountains" 
                                    src={data.data} 
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
