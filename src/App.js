// import logo from './logo.svg';
import './App.css';
import './css/tailwind.css'
import Resume from './components/Resume';
import person from './data/Person'

function App() {
  return (
    <div className="App h-[100vh]">
      <div className="h-7 w-full bg-white relative" />
      <div className='grid grid-cols-[1.75rem_auto_1.75rem] h-[95%]'>
        <div className="bg-white w-7 h-full"></div>
        <div className='flex justify-center'><Resume fName={person[0].fName} lName={person[0].lName} email={person[0].email} cNumber={person[0].cNumber} desc={person[0].desc} edu={person[0].edu} exp={person[0].exp} skills={person[0].skills} /></div>
        <div className="bg-white w-7 h-full"></div>
      </div>
      {console.log(person[0])}

      {/* <div className="h-7 w-full bg-red-300 absolute bottom-0" /> */}
    </div>
  );
}

export default App;
