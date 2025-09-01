import { Route, Routes } from 'react-router-dom'
import './App.css'
import OverviewCodex from './pages/overviewCodex'
import ProductMarketsCodex from './pages/marketsCodex'
import FeaturesCodex from './pages/featuresCodex'
import SolutionsCodex from './pages/solutionsCodex'
import JupiterCodex from './pages/jupiterCodex'
import ResourcesCodex from './pages/resourcesCodex'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<OverviewCodex/>}/>
      <Route path='product-markets' element={<ProductMarketsCodex/>}/>
      <Route path='features' element={<FeaturesCodex/>}/>
      <Route path='solutions' element={<SolutionsCodex/>}/>
      <Route path='jupiter-hospitalis' element={<JupiterCodex/>}/>
      <Route path='resources' element={<ResourcesCodex/>}/>
    </Routes>
    </>
  )
}

export default App
