import './App.css'
import {Navbar} from './components';
import { Header,BestSelling,ClothesForYou,FeedbackCorner,Offer,Products ,Footer} from './containers';

function App() {

  return (
    <div className='App'>
      <div className="top__bg">
        <Navbar/>
        <Header/>
      </div>
      <BestSelling/>
      <Footer/>
    </div>
  )
}

export default App
