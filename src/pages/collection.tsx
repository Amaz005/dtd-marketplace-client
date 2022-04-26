import { Box, Grid, GridItem } from "@chakra-ui/react"
import { ReactElement, useEffect, useState } from "react"
import { useMoralisWeb3Api } from "react-moralis"
import CardNft from "../components/CardNft"
import { optionsCall } from "../components/CreateForm"
import Layout from "../components/Layout"

type dataType = {
    name: string,
    description: string,
    imagePath: string
}

export default function Collection() {
    const Web3Abi = useMoralisWeb3Api()
    const [datas, setDatas] = useState<dataType[]>([])
    
    useEffect(() => {
        handleInit()
    }, [])
    const handleInit = async () => {
        const tmpNFTs = await Web3Abi.token.getAllTokenIds({
            chain: "bsc testnet", 
            address: "0xfdC26cd4214702bd724032f789a28dc6Ab869b68",
            offset: 0,
            limit: 10
        })
        console.log({tmpNFTs})
    }
    return (
        <Box>
            <Grid templateColumns='repeat(5, 1fr)' gap={6} p={2}>
            {
                // !result ? (
                // <div>Loading...</div>
                // ) : (
                // result.map((nft, index) => <GridItem w='100%' h='auto' key={index}><CardNft token_id={nft.token_id} metadata={nft.metadata} name={nft.name}/></GridItem>)
                // )
            }
            </Grid>
        </Box>
    )
}

Collection.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}