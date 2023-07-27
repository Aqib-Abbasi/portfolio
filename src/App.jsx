import Footer from "./component/Footer";
import Header from "./component/Header"
// import Banner from "./component/Banner"
// import About from "./component/About"
// import NewsLatter from "./component/NewsLatter"
// import Cards from "./component/Cards"
import { Outlet } from "react-router-dom";
function App() {

  return (
    <>
     
          <Header />
          {/* <Banner />
          <About />
          <Cards />
          <NewsLatter /> */}
         <Outlet />
         <Footer/>



    </>
  )
}

export default App
