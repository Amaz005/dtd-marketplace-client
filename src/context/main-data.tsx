import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import { nftSearchByTokenType, nftsType } from '../components/SearchForm'

type NftContext = {
  nfts?: nftSearchByTokenType,
  saveNft?: (nft: nftSearchByTokenType | undefined) => void,
}

const NftContext = createContext<NftContext| null | undefined>(undefined)

export function NftProvider({ children }: {children: ReactNode}) {
  const [nfts, setNft] = useState<nftSearchByTokenType>()
  const saveNft = (nft: nftSearchByTokenType | undefined) => {
    setNft(nft)
  }

  return (
    <NftContext.Provider
      value={{
        nfts,
        saveNft
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