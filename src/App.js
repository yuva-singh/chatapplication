import React from 'react'
// import soketIO from 'socket.io-client';
import {Route,Routes} from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat/Chat';

// const ENDPOINT = "http://localhost:4500/";
// const soket =  soketIO(ENDPOINT,{transports:["websoket"]});

function App() {
  // soket.on("connect",()=>{
  //     // console.log("connect in frontend");
  // })
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element = {<Join/>}></Route>
        <Route path = "/chat" element = {<Chat/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
