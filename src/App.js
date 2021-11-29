import is from './imgsrc.jpg';
import './App.css';
function App() {
  return (
    <div className="App">
     <div className="dv">
     <h1 className=" title red">Your name here</h1>
     <br/>
       <img src={is} alt="im1"/>
     <br/>
       <img src="/imgpublic.jpg" alt="im2"/>
     </div>
     <video controls>
     <source src="/myVideo.mp4" type="video/mp4" ></source></video>
    </div>
  );
}
export default App;
