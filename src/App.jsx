import { useContext } from 'react'

import Sidebar from './components/Sidebar'
import MainForm from './components/MainForm'
import { ContextProvider } from './contextAPI/FormContext'
import { StepContext } from './contextAPI/StepContext'
import { pages } from './data/data'

function App() {
  const { step } = useContext(StepContext);
  
  const pagesRender = ()=>{
    let index = step.current -1
    return pages[index].component
  }

  return (
    <div className="flex flex-col desktop:flex-row desktop:bg-white desktop:mx-auto desktop:py-4 desktop:pl-4 desktop:rounded-main">
      <ContextProvider>
        <Sidebar />
        <MainForm>
          {
            pagesRender()
          }
          </MainForm>
      </ContextProvider>
    </div>
  )
}

export default App
