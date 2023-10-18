import './App.css'

import Header from './components/Header'
import CardBody from './components/CardBody'


function App() {
  return (
    <div className='flex flex-col w-[100vw] bg-light-gray h-[100vh] py-[3.5rem] px-[8rem] font-poppins'>
      <Header />
      <CardBody />
    </div>
  )
}

export default App
