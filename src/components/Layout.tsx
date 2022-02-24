import { ReactElement } from "react"
import { NftProvider } from "../context/main-data"
import Footer from "./Footer"
import { Navbar } from "./Navbar"

interface layoutInterfaces {
    children: ReactElement
}

const Layout: React.FC<layoutInterfaces> = (props) => {
    const { children } = props

    return (
        <NftProvider>
            <Navbar/>
                <main style={{height: "calc(100vh - 136px)"}}>{children}</main>
            <Footer/>
        </NftProvider>
    )
}

export default Layout