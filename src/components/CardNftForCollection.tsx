import { Badge, Box, Button, Grid, GridItem, Image } from "@chakra-ui/react";

interface ICardNft {
  metadata?: string
  name?: string
  price?: number
  token_id?: string
  reviewCount?: string
}

let object: {image: string}
const CardNftForCollection: React.FC<(ICardNft)> = (props) => {
  const {metadata} = props
  if(metadata) {
    object = JSON.parse(metadata.replace("\\\"", ""))
    object.image = object.image.replace("ipfs://", "https://ipfs.io/ipfs/")
  }
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    {!metadata ? (
      <>loading...</>
    ): (
      <>
      <Image src={object.image} alt="" /><Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                New
              </Badge>
            </Box>

            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated
            >
              {props.name ? props.name + ' #' + props.token_id : "0"}
            </Box>

            <Box>
              <Button onClick={() => console.log(1)}>Put on sale</Button>
            </Box>

            <Box display='flex' mt='2' alignItems='center'>
              <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                {props.reviewCount} description
              </Box>
            </Box>
          </Box>
          </>
    )}
    </Box>
  )
}

export default CardNftForCollection