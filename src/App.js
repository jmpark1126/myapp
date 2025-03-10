import './App.css';
import { RiHomeHeartFill } from "react-icons/ri";
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
// import MyClock from './02/MyClock';
// import Traffic from './06/Traffic';
// import MyRef from './07/MyRef';
// import MyRefAdd from './07/MyRefAdd';
import Gallery from './08/Gallery';

function App() {
  return (
    <div className="flex flex-col w-full h-screen mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
        <p>리액트 기초</p>
        <p><RiHomeHeartFill /></p>
      </header>
      <main className='grow w-full flex justify-center items-center overflow-y-auto'>
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        {/* <MyClock /> */}
        {/* < Traffic /> */}
        {/* <MyRef /> */}
        {/* <MyRefAdd /> */}
        <Gallery />

      </main>
      <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
        © Park JiMin
      </footer>
    </div>
  );
}

export default App;
