import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

interface INftContext {
  nft?: any,
  setNft?: any
}

type nftsType = {
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

const defaultNft = {}

const NftContext = createContext<INftContext>(defaultNft)

export function NftProvider({ children }: {children: ReactNode}) {
  const [nft, setNft] = useState({})
  return (
    <NftContext.Provider
      value={{
        nft,
        setNft
      }}
    >
      {children}
    </NftContext.Provider>
  )
}

export function useNft() {
  const context = useContext(NftContext)

  if (!context)
    throw new Error('usePokemon must be used inside a `PokemonProvider`')

  return context
}