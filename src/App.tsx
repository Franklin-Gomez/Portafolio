import Aboutmy from "./components/Aboutmy"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Introduction from "./components/Introduction"
import Proyects from "./components/Proyects"


function App() {

  return (

    <div className="bg-gray-100 min-h-[100vh]">
      <div className="container mx-auto p-4 ">
    
        <Header/>

        <div className=" w-7xl mx-auto container">

          <section>
            {/*Introduccion*/}
            <Introduction/>

          </section>

          <section>
            <Proyects/>
          </section>

          <section>
            {/*Experiencia*/}
            <Experience/>
          </section>
            

          <section>
            {/*Sobre Mi*/}
            <Aboutmy/>
          </section>

        </div>

        <Footer/>

      </div>
    </div>
  )
}

export default App
