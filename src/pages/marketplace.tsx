import { ReactElement } from "react"
import Layout from "../components/Layout"

export default function Marketplace() {
    return (
        <>Marketplace</>
    )
}

Marketplace.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}