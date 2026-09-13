import { Suspense } from 'react'
import './App.css'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import Technologies from './Components/Technologies'
import YourStack from './Components/YourStack'
import type TechnologyType from './Types/TechnologyType'

const technologyPromise: Promise<TechnologyType[]> = fetch('/technologyData.json')
  .then((res) => res.json())


function App() {

  return (
    <>
      <div className="w-full bg-white ">

        <Navbar />
        <HeroSection />

        <Suspense fallback={<div>Loading...</div>}>
          <div className=" bg-white max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

            {/* Technogies Component is rendered here  */}
            <div className="lg:col-span-3">
              <Technologies technologyPromise={technologyPromise} />
            </div>

            {/* YourStack Component is rendered here  */}
            <div className="lg:col-span-1">
              <YourStack />
            </div>

          </div>
        </Suspense>


      </div>

    </>
  )
}
export default App
