import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { ReactElement, useEffect, useState } from 'react'
import { Box, Button, Grid, GridItem, Text } from '@chakra-ui/react'
import { useNft } from '../context/main-data'
import CardNft from '../components/CardNft'
import { resultType } from '../constants'

export default function Home() {
  const {nfts} = useNft()
  const [result, setResult] = useState<resultType[]>([])
  useEffect(() => {
    if(nfts && nfts.result) {
      console.log("index nft: ",nfts)
      setResult(nfts?.result)
    }
  }, [nfts])

  return (
    <Box>
      <Grid templateColumns='repeat(5, 1fr)' gap={6} p={2}>
        {
          !result ? (
            <div>Loading...</div>
          ) : (
            result.map((nft, index) => <GridItem w='100%' h='auto' key={index}><CardNft token_id={nft.token_id} metadata={nft.metadata} name={nft.name}/></GridItem>)
          )
        }
      </Grid>
    </Box>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
