
import './App.css';
import HomeComponent from './modules';
import OverviewComponent from './modules/OverviewComponent';
import TransactionComponent from './modules/TransactionComponent';

function App() {
  return (
    <div className='Container'>
      <span className='Header'>Expense Tracker</span>
      <HomeComponent/>
    </div>
  );
}

export default App;
