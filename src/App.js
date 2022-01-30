import './App.css';
import Months from './components/Months';

function App() {

  //Todays date
  const currentDate = new Date().getDate()
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' })
  const currentYear = new Date().getFullYear()

  return (
    <div className="App">
      <h1>Public Holidays 2022</h1>
      <h3>Today's date:</h3>
      <p>{`${currentDate} ${currentMonth} ${currentYear}`}</p>
      <h2>Chose month</h2>
      <Months />
    </div>
  );
}

export default App;
