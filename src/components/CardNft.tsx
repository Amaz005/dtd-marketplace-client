import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import {nftSearchType} from './SearchForm'

const nft: nftSearchType = {
  total: 936,
  page: 1,
  page_size: 10,
  result: [
    {
      token_id: "33570",
      token_address: "0x06012c8cf97bead5deae237070f9587f8e7a266d",
      token_uri: "https://api.cryptokitties.co/kitties/33570",
      metadata: "{\"id\":33570,\"name\":\"Brisk Batman, Zephyr, really\",\"generation\":12,\"created_at\":\"2017-12-02T23:28:51.000Z\",\"birthday\":\"2017-12-02T00:00:00.000Z\",\"image_url\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/33570.png\",\"image_url_cdn\":\"https://img.cn.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/33570.png\",\"color\":\"strawberry\",\"kitty_type\":\"fancy\",\"is_fancy\":true,\"is_exclusive\":false,\"is_special_edition\":false,\"fancy_type\":\"DuCat\",\"language\":\"en\",\"is_prestige\":false,\"prestige_type\":null,\"prestige_ranking\":null,\"prestige_time_limit\":null,\"status\":{\"is_ready\":true,\"is_gestating\":false,\"cooldown\":1517870590695,\"dynamic_cooldown\":1517227375815,\"cooldown_index\":12,\"cooldown_end_block\":4707386,\"pending_tx_type\":null,\"pending_tx_since\":null},\"purrs\":{\"count\":1,\"is_purred\":false},\"watchlist\":{\"count\":0,\"is_watchlisted\":false},\"hatcher\":{\"address\":\"0x43b6b8eb06a622d274cecd234510b26da6605c22\",\"image\":\"16\",\"nickname\":\"POOPYPIE\",\"hasDapper\":false,\"twitter_id\":null,\"twitter_image_url\":null,\"twitter_handle\":null},\"auction\":{},\"offer\":{},\"owner\":{\"address\":\"0x43b6b8eb06a622d274cecd234510b26da6605c22\",\"hasDapper\":false,\"twitter_id\":null,\"twitter_image_url\":null,\"twitter_handle\":null,\"image\":\"16\",\"nickname\":\"POOPYPIE\"},\"matron\":{\"id\":31811,\"name\":\"George Catliot | Bird Sire\",\"generation\":11,\"enhanced_cattributes\":[{\"type\":\"body\",\"kittyId\":12042,\"position\":29,\"description\":\"cymric\"},{\"type\":\"coloreyes\",\"kittyId\":31811,\"position\":-1,\"description\":\"topaz\"},{\"type\":\"eyes\",\"kittyId\":31811,\"position\":-1,\"description\":\"thicccbrowz\"},{\"type\":\"pattern\",\"kittyId\":31811,\"position\":-1,\"description\":\"totesbasic\"},{\"type\":\"mouth\",\"kittyId\":31811,\"position\":-1,\"description\":\"soserious\"},{\"type\":\"colorprimary\",\"kittyId\":31811,\"position\":-1,\"description\":\"orangesoda\"},{\"type\":\"colorsecondary\",\"kittyId\":31811,\"position\":-1,\"description\":\"swampgreen\"},{\"type\":\"colortertiary\",\"kittyId\":18298,\"position\":33,\"description\":\"bloodred\"}],\"owner_wallet_address\":\"0xc7af99fe5513eb6710e6d5f44f9989da40f27f26\",\"owner\":{\"address\":\"0xc7af99fe5513eb6710e6d5f44f9989da40f27f26\"},\"created_at\":\"2017-12-02T20:00:16.000Z\",\"image_url\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/31811.svg\",\"image_url_cdn\":\"https://img.cn.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/31811.svg\",\"color\":\"topaz\",\"is_fancy\":false,\"kitty_type\":null,\"is_exclusive\":false,\"is_special_edition\":false,\"fancy_type\":null,\"status\":{\"is_ready\":true,\"is_gestating\":false,\"cooldown\":1517468012402},\"hatched\":true,\"wrapped\":false,\"image_url_png\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/31811.png\",\"image_url_kitty_items\":\"https://img.cryptokitties.cohttps://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/31811.items.svg\"},\"sire\":{\"id\":32397,\"name\":\"Silly Stone Pure Coat\",\"generation\":7,\"enhanced_cattributes\":[{\"type\":\"body\",\"kittyId\":32397,\"position\":-1,\"description\":\"sphynx\"},{\"type\":\"coloreyes\",\"kittyId\":32397,\"position\":-1,\"description\":\"strawberry\"},{\"type\":\"eyes\",\"kittyId\":32397,\"position\":-1,\"description\":\"crazy\"},{\"type\":\"pattern\",\"kittyId\":32397,\"position\":-1,\"description\":\"totesbasic\"},{\"type\":\"mouth\",\"kittyId\":28247,\"position\":231,\"description\":\"tongue\"},{\"type\":\"colorprimary\",\"kittyId\":32397,\"position\":-1,\"description\":\"aquamarine\"},{\"type\":\"colorsecondary\",\"kittyId\":32397,\"position\":-1,\"description\":\"lemonade\"},{\"type\":\"colortertiary\",\"kittyId\":25149,\"position\":31,\"description\":\"peach\"}],\"owner_wallet_address\":\"0xac44479eb2ab2eab82c90c9a0836950c1af67853\",\"owner\":{\"address\":\"0xac44479eb2ab2eab82c90c9a0836950c1af67853\"},\"created_at\":\"2017-12-02T21:15:08.000Z\",\"image_url\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/32397.svg\",\"image_url_cdn\":\"https://img.cn.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/32397.svg\",\"color\":\"strawberry\",\"is_fancy\":false,\"is_exclusive\":false,\"is_special_edition\":false,\"fancy_type\":null,\"status\":{\"is_ready\":true,\"is_gestating\":false,\"cooldown\":1518347536645},\"kitty_type\":null,\"hatched\":true,\"wrapped\":false,\"image_url_png\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/32397.png\",\"image_url_kitty_items\":\"https://img.cryptokitties.cohttps://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/32397.items.svg\"},\"children\":[{\"id\":34578,\"name\":\"Peach! Scarlet!Bird daddy!\",\"generation\":13,\"enhanced_cattributes\":[{\"type\":\"body\",\"kittyId\":34578,\"position\":-1,\"description\":\"himalayan\"},{\"type\":\"coloreyes\",\"kittyId\":34578,\"position\":-1,\"description\":\"sizzurp\"},{\"type\":\"eyes\",\"kittyId\":34578,\"position\":-1,\"description\":\"crazy\"},{\"type\":\"pattern\",\"kittyId\":34578,\"position\":-1,\"description\":\"luckystripe\"},{\"type\":\"mouth\",\"kittyId\":15786,\"position\":160,\"description\":\"tongue\"},{\"type\":\"colorprimary\",\"kittyId\":17621,\"position\":69,\"description\":\"mauveover\"},{\"type\":\"colorsecondary\",\"kittyId\":18466,\"position\":28,\"description\":\"scarlet\"},{\"type\":\"colortertiary\",\"kittyId\":23008,\"position\":21,\"description\":\"peach\"}],\"owner_wallet_address\":\"0x641324985a41d2d1061817010f407ab8efadd493\",\"owner\":{\"address\":\"0x641324985a41d2d1061817010f407ab8efadd493\"},\"created_at\":\"2017-12-03T01:04:01.000Z\",\"image_url\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/34578.svg\",\"image_url_cdn\":\"https://img.cn.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/34578.svg\",\"color\":\"sizzurp\",\"is_fancy\":false,\"is_exclusive\":false,\"is_special_edition\":false,\"kitty_type\":null,\"fancy_type\":null,\"status\":{\"is_ready\":true,\"is_gestating\":false,\"cooldown\":1517910935053},\"hatched\":true,\"wrapped\":false,\"image_url_png\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/34578.png\",\"image_url_kitty_items\":\"https://img.cryptokitties.cohttps://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/34578.items.svg\"},{\"id\":40025,\"name\":\"Donald (son of a) Duck\",\"generation\":13,\"enhanced_cattributes\":[{\"type\":\"body\",\"kittyId\":12042,\"position\":29,\"description\":\"cymric\"},{\"type\":\"coloreyes\",\"kittyId\":40025,\"position\":-1,\"description\":\"strawberry\"},{\"type\":\"eyes\",\"kittyId\":40025,\"position\":-1,\"description\":\"crazy\"},{\"type\":\"pattern\",\"kittyId\":15786,\"position\":144,\"description\":\"calicool\"},{\"type\":\"mouth\",\"kittyId\":40025,\"position\":-1,\"description\":\"pouty\"},{\"type\":\"colorprimary\",\"kittyId\":40025,\"position\":-1,\"description\":\"orangesoda\"},{\"type\":\"colorsecondary\",\"kittyId\":40025,\"position\":-1,\"description\":\"chocolate\"},{\"type\":\"colortertiary\",\"kittyId\":40025,\"position\":-1,\"description\":\"granitegrey\"}],\"owner_wallet_address\":\"0xc7af99fe5513eb6710e6d5f44f9989da40f27f26\",\"owner\":{\"address\":\"0xc7af99fe5513eb6710e6d5f44f9989da40f27f26\"},\"created_at\":\"2017-12-03T09:21:38.000Z\",\"image_url\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/40025.svg\",\"image_url_cdn\":\"https://img.cn.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/40025.svg\",\"color\":\"strawberry\",\"is_fancy\":false,\"is_exclusive\":false,\"is_special_edition\":false,\"kitty_type\":null,\"fancy_type\":null,\"status\":{\"is_ready\":true,\"is_gestating\":false,\"cooldown\":1517045343483},\"hatched\":true,\"wrapped\":false,\"image_url_png\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/40025.png\",\"image_url_kitty_items\":\"https://img.cryptokitties.cohttps://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/40025.items.svg\"},{\"id\":41807,\"name\":\"Rare Duck Buck Beak\",\"generation\":13,\"enhanced_cattributes\":[],\"owner_wallet_address\":\"0x7d438bf6567673867480b7923669bf349e6c8c12\",\"owner\":{\"address\":\"0x7d438bf6567673867480b7923669bf349e6c8c12\"},\"created_at\":\"2017-12-03T11:45:17.000Z\",\"image_url\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/41807.png\",\"image_url_cdn\":\"https://img.cn.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/41807.png\",\"color\":\"strawberry\",\"is_fancy\":true,\"is_exclusive\":false,\"is_special_edition\":false,\"kitty_type\":\"fancy\",\"fancy_type\":\"DuCat\",\"status\":{\"is_ready\":true,\"is_gestating\":false,\"cooldown\":1454410264822},\"hatched\":true,\"wrapped\":false,\"image_url_png\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/41807.png\"},{\"id\":52635,\"name\":null,\"generation\":13,\"enhanced_cattributes\":[],\"owner_wallet_address\":\"0xb1690c08e213a35ed9bab7b318de14420fb57d8c\",\"owner\":{\"address\":\"0xb1690c08e213a35ed9bab7b318de14420fb57d8c\"},\"created_at\":\"2017-12-04T03:05:36.000Z\",\"image_url\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/52635.png\",\"image_url_cdn\":\"https://img.cn.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/52635.png\",\"color\":\"strawberry\",\"is_fancy\":true,\"is_exclusive\":false,\"is_special_edition\":false,\"kitty_type\":\"fancy\",\"fancy_type\":\"DuCat\",\"status\":{\"is_ready\":true,\"is_gestating\":false,\"cooldown\":1517557705476},\"hatched\":true,\"wrapped\":false,\"image_url_png\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/52635.png\"},{\"id\":108970,\"name\":\"Brisk | Bird Parent | Bobbit\",\"generation\":13,\"enhanced_cattributes\":[{\"type\":\"body\",\"kittyId\":3006,\"position\":1,\"description\":\"laperm\"},{\"type\":\"coloreyes\",\"kittyId\":108970,\"position\":-1,\"description\":\"strawberry\"},{\"type\":\"eyes\",\"kittyId\":108970,\"position\":-1,\"description\":\"crazy\"},{\"type\":\"pattern\",\"kittyId\":108970,\"position\":-1,\"description\":\"totesbasic\"},{\"type\":\"mouth\",\"kittyId\":108970,\"position\":-1,\"description\":\"pouty\"},{\"type\":\"colorprimary\",\"kittyId\":11425,\"position\":10,\"description\":\"mauveover\"},{\"type\":\"colorsecondary\",\"kittyId\":108970,\"position\":-1,\"description\":\"coffee\"},{\"type\":\"colortertiary\",\"kittyId\":23008,\"position\":21,\"description\":\"peach\"}],\"owner_wallet_address\":\"0x43b6b8eb06a622d274cecd234510b26da6605c22\",\"owner\":{\"address\":\"0x43b6b8eb06a622d274cecd234510b26da6605c22\"},\"created_at\":\"2017-12-06T10:49:53.000Z\",\"image_url\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/108970.svg\",\"image_url_cdn\":\"https://img.cn.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/108970.svg\",\"color\":\"strawberry\",\"is_fancy\":false,\"is_exclusive\":false,\"is_special_edition\":false,\"kitty_type\":null,\"fancy_type\":null,\"status\":{\"is_ready\":true,\"is_gestating\":false,\"cooldown\":1452644670660},\"hatched\":true,\"wrapped\":false,\"image_url_png\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/108970.png\",\"image_url_kitty_items\":\"https://img.cryptokitties.cohttps://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/108970.items.svg\"},{\"id\":208818,\"name\":null,\"generation\":13,\"enhanced_cattributes\":[{\"type\":\"body\",\"kittyId\":3006,\"position\":1,\"description\":\"laperm\"},{\"type\":\"coloreyes\",\"kittyId\":208818,\"position\":-1,\"description\":\"sizzurp\"},{\"type\":\"eyes\",\"kittyId\":208818,\"position\":-1,\"description\":\"crazy\"},{\"type\":\"pattern\",\"kittyId\":208818,\"position\":-1,\"description\":\"totesbasic\"},{\"type\":\"mouth\",\"kittyId\":3020,\"position\":1,\"description\":\"tongue\"},{\"type\":\"colorprimary\",\"kittyId\":208818,\"position\":-1,\"description\":\"salmon\"},{\"type\":\"colorsecondary\",\"kittyId\":17381,\"position\":16,\"description\":\"scarlet\"},{\"type\":\"colortertiary\",\"kittyId\":12760,\"position\":20,\"description\":\"emeraldgreen\"}],\"owner_wallet_address\":\"0x43b6b8eb06a622d274cecd234510b26da6605c22\",\"owner\":{\"address\":\"0x43b6b8eb06a622d274cecd234510b26da6605c22\"},\"created_at\":\"2017-12-10T08:55:07.000Z\",\"image_url\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/208818.svg\",\"image_url_cdn\":\"https://img.cn.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/208818.svg\",\"color\":\"sizzurp\",\"is_fancy\":false,\"is_exclusive\":false,\"is_special_edition\":false,\"kitty_type\":null,\"fancy_type\":null,\"status\":{\"is_ready\":true,\"is_gestating\":false,\"cooldown\":1457529744381},\"hatched\":true,\"wrapped\":false,\"image_url_png\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/208818.png\",\"image_url_kitty_items\":\"https://img.cryptokitties.cohttps://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/208818.items.svg\"}],\"hatched\":true,\"wrapped\":false,\"variation\":null,\"variation_ranking\":null,\"image_url_png\":\"https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/33570.png\",\"fancy_ranking\":219,\"fancy_limit\":10000,\"items\":[],\"fancy_remaining\":0,\"description\":\"Ciao! Brisk Batman, Zephyr, really here. I'm here to enjoy slappin' da bass and breakdancing. When I'm not braiding people's hair, I'm swiping left! I hope we can be pawmates.\",\"attributes\":[]}",
      contract_type: "ERC721",
      token_hash: "a9b47662f6d639a65c9a9b4dfb0b5e80",
      synced_at: "2021-10-03T22:15:42.366Z",
    }]
}

const CardNft: ReactNode = () => {
  const [nfts, setNfts] = useState<nftSearchType>(nft)
  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
      {
        nfts.result.metadata.map()

      }
      <GridItem></GridItem>
    </Grid>
  )
}

export default CardNft