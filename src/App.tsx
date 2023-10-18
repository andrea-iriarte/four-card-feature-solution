import './App.css'

import Header from './components/Header'
import CardBody from './components/CardBody'


function App() {
  return (
    <div className='flex flex-col w-[100vw] lg:h-[100vh] bg-light-gray  pt-[3.5rem] lg:pb-[3.5rem] pb-[5rem] ]px-[8rem] font-poppins overflow-y-scroll overflow-x-hidden scrollbar-hide'>
      <Header />
      <CardBody />
    </div>
  )
}

export default App
