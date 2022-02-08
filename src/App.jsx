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

function App() {
  
  return (
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
  )
}

export default App
