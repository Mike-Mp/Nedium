import Footer from "./Footer"
import Nav from "./Nav"

const Layout = ({children}: any) => {
    return (
        <>
        <Nav />
        <hr />
        {children}
        {/* <Footer /> */}
        </>
    )
}

export default Layout