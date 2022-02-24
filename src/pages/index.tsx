import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { ReactElement, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { useMoralisWeb3Api } from 'react-moralis'
import { useMoralis } from 'react-moralis'
import { Box, Button, Input, Text, FormControl, useDisclosure, Grid } from '@chakra-ui/react'
import { useNft } from '../context/main-data'

export default function Home() {
  const {nft} = useNft()
  console.log("nft data: ", nft)
  return (
    <Box>
      <Grid>
        
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
