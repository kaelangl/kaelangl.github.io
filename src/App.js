import { useEffect, useState } from "react";
import Player from "./player";

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



function App() {

  let typed = 0;
  const [songs, setSongs] = useState()
  const [isplaying, setIsPlaying] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)

  }, [])

  const detectKeyDown = (e) => {
    if( e.key === "l" | e.key === "L") {
      if( typed === 1 ) {
        console.log("you lemoned your lime")
        document.getElementById("audio_player").play();
        typed = 0
      } else if( typed === 0 ) {
        typed = 1
      }
    } else {
      console.log("Clicked Key: ", e.key)
    }
  }

  const Game = () => {
    return (
      <div>App</div>
    )
  }

  return (
    <div className="main">
      <audio src="LL.wav" preload id="audio_player"/>
      {/* <Player songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} /> */}
      <div className="box1">
        <div className="box3"></div>
        <img className="box2" src="99.png"></img>
      </div>
    </div>
  );
}

export default App;
