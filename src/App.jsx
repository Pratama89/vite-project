import { useState } from 'react'
import Header from './components/Header';

function App() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div >
      <Header />
      <button onClick={handleClick} className=" border flex justify-center mx-auto mt-5 w-20 h-10 rounded-md bg-slate-500 text-white items-center hover:bg-slate-600">Like ({likes})</button>
    </div>
  );
}

export default App
