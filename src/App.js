// import logo from './logo.svg';
import './App.css';
import './css/tailwind.css'
import Resume from './components/Resume';
import person from './data/Person'
import { useState } from 'react';

function App() {
  const [newColor, setnewColor] = useState('text-black');
  function oncolorChange(event) {
    setnewColor(document.getElementById('colors').value);

  }
  return (

    <div div className="App h-[100vh]" >
      {console.log('app render')}
      <div className='grid lg:grid-cols-[0%_80%_20%] grid-row-[70%_10%_20%] h-[95%]'>
        <div className="bg-white h-full"></div>
        <div className='flex justify-center'><Resume fName={person[0].fName.toString()} lName={person[0].lName.toString()} email={person[0].email.toString()} cNumber={person[0].cNumber.toString()} desc={person[0].desc.toString()} edu={person[0].edu} exp={person[0].exp} skills={person[0].skills} color={newColor.toString()} /></div>
        <div className="bg-white h-full">
          <label htmlFor="colors">Choose a title color:</label>
          <select name="colors" id="colors" onChange={oncolorChange}>
            <option value="text-slate-500">Gray</option>
            <option value="text-black" selected>Black</option>
            <option value="text-red-600">Red</option>
            <option value="text-blue-600">Blue</option>
          </select>
        </div>
      </div>
      {/* {console.log(person[0])} */}

      {/* <div className="h-7 w-full bg-red-300 absolute bottom-0" /> */}
    </div >
  );
}

export default App;
