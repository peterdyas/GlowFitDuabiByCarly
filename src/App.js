import logo from './logo.svg';
import './App.css';
import { NavBarHeader2, MarketingFooterBrand, StandardCardCollection , ProgramsCreateForm} from './ui-components'


function App() {
  return (
    <div className="App">
    <NavBarHeader2 width={"100vw"}/>
    <StandardCardCollection width={"100vw"}/>
    <MarketingFooterBrand width={"100vw"}  />
    </div>
  );
}

export default App;
