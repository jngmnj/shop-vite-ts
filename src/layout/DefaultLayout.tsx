import { Outlet } from "react-router-dom"
import Footer from "../components/common/Footer"
import Header from "../components/common/Header"

const DefaultLayout = () => {
  return (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default DefaultLayout