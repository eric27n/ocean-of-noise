// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App

import AlbumHeader from "./components/album/AlbumHeader";
import ListGroup from "./components/album/ListGroup";
import SquareCard from "./components/SquareCard";
import AboutCard from "./components/album/AboutCard";
import AlbumCredits from "./components/album/AlbumCredits";
import Album from "./pages/Album";
import Song from "./pages/Song";
import Landing from "./pages/Landing";

function App() {
  return (
    <div>
      {/* <Landing></Landing> */}
      <Album></Album>
      {/* <Song></Song> */}
      {/* <SquareCard image="src\assets\album_blond.jpg" name="Frank Ocean" /> */}
    </div>
  );
}

export default App;
