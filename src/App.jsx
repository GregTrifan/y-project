import Layout from './components/layout'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './pages/home'
import Dashboard from './pages/dashboard';
import { RecoilRoot } from 'recoil';
import Collection from './pages/collection';
import { ethers } from "ethers";
import { NftProvider } from "use-nft"


const provider = new ethers.providers.AlchemyProvider("homestead",import.meta.env.VITE_ALCHEMY_KEY)
const fetcher = ["ethers", { ethers, provider: provider}]

function App() {
  
  return (
    <NftProvider fetcher={fetcher}>
    <RecoilRoot>
      <BrowserRouter>
    <Layout>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dash" element={<Dashboard/>} />
          <Route path="/collection" element={<Collection/>} />
          <Route path="/callback" element={<Navigate replace to="/dash" />} />
      </Routes>
      </Layout>
    </BrowserRouter>
    </RecoilRoot>
    </NftProvider>
  )
}

export default App
