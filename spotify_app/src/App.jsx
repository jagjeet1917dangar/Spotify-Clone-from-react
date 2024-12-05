import './App.css'
import Spotify from './assets/Spotifylogo.png'
import home from './assets/home.png'
import search from './assets/search.png'
import Yourlibrary from './assets/Yourlibrary.png'
import Create1 from './assets/Create (1).png'
import Liked1 from './assets/Liked (1).png'
import yourepisodes from './assets/your episodes.png'
import grommeticonsinstalloption from './assets/grommet-icons_install-option.png'
import toparrownavigation from './assets/top arrow navigation.png'
import image1 from './assets/image1.png'
import downarrow from './assets/downarrow.png'
import image4 from './assets/image4.png'
import image3 from './assets/image3.png'
import image2 from './assets/image2.png'
import image5 from './assets/image5.png'
import image6 from './assets/image6.png'
import image7 from './assets/image7.png'
import image8 from './assets/image8.png'
import image9 from './assets/image9.png'
import image10 from './assets/image10.png'
import image11 from './assets/image11.png'
import bxbxsheart from './assets/bxbxsheart.png'
import MusicPlayerOptions from './assets/MusicPlayerOptions.png'
import Rightoptions from './assets/Rightoptions.png'

function App() {
  return (
    <>
      <div className="sidebar">
         <div className="image"><img className='super' src={Spotify} alt=""/></div>
         <div className="sidebartext">
            <div><img src={home} alt=""/></div>
            <div><h3>Home</h3></div>
            <div><img src={search} alt=""/></div>
            <div><h3>Search</h3></div>
            <div><img className='bat' src={Yourlibrary} alt=""/></div>
            <div><h3>Your library</h3></div>
         </div>
         <div className="sidebartext2">
            <div><img className='alagthi' src={Create1} alt=""/></div>
            <div><h3 className="hehe">Create Playlist</h3></div>
            <div><img className='alagthi' src={Liked1} alt=""/></div>
            <div><h3 className="hehe">Liked Songs</h3></div>
            <div><img className='alagthi1' src={yourepisodes} alt=""/></div>
            <div><h3 className="hehe">Your episodes</h3></div>
         </div>
         <div className="sidebartext3">
            <div><h3 className="hehe">FAV</h3></div>
            <div><h3 className="hehe">Daily Mix 1</h3></div>
            <div><h3 id='bgt' className="hehe">Discover Weekly</h3></div>
            <div><h3 className="hehe">Malyalam</h3></div>
            <div><h3 id='from' className="hehe">Dance/Electronics Mix</h3></div>
            <div><h3 className="hehe">EDM Popular</h3></div>
            <div className='adele'><img height="20px'" src={grommeticonsinstalloption} alt=""/><h3 id='itsme' className="hehe">Install App</h3></div>
         </div>
         <div id="image">
            <img className='rolling' src={toparrownavigation} alt=""/>
         </div>
    </div>
    <div class="arrowdown">
        <div><h1 className='gata'>Good Morning</h1></div>
        <div></div>
        <div className='boi'><img className='dua' src={image1} alt=""/><p>Angel</p></div>
        <div className='lipa'><img src={downarrow} alt=""/></div>
        <div className="hi">
            <img className='rukh' src={Liked1} alt=""/><h4>Liked Songs</h4>
        </div>
        <div className="hi">
            <img className='rukh' src={image4} alt=""/><h4>Neffex Playlist</h4>
        </div>
        <div className="hi">
            <img className='rukh' src={image3} alt=""/><h4>K/ DA</h4>
        </div>
        <div clasName="hi" id='color'>
            <img className='rukh' src={image1} alt=""/><h4>Liked Songs</h4>
        </div>
        <div clasName="hi" id='color'>
            <img className='rukh' src={image2} alt=""/><h4 className='khan'>Dance/Electronic<br/>Mix</h4>
        </div>
     </div>
     <div class="images">
        <div><h2 className='show'>Shows You might Like </h2></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className="hu"><img className='haar' src={image9} alt=""/><h4 className='mine' >Weekly Motivation</h4></div>
        <div className="hu"><img className='haar' src={image8} alt=""/><h4 className='mine' >MEDITATION SELF</h4></div>
        <div className="hu"><img className='haar' src={image7} alt=""/><h4 className='mine' >Words beyon acto..</h4></div>
        <div className="hu"><img className='haar' src={image6} alt=""/><h4 className='mine' >The alexa show in</h4></div>
        <div className="hu"><img className='haar' src={image5} alt=""/><h4 className='mine' >The stories of mine</h4></div>
        <div className="hu"><img className='haar' src={image10} alt=""/><h4 className='mine'>Motivation daily..</h4></div>
     </div>
     <div className="last">
        <div className="pelu">
        <div className='trigger'><img id='fukra' src={image11} alt=""/><h5>Dreaming on</h5></div>
        <div className='trigger'><img id='finsaan' src={bxbxsheart} alt=""/></div>
        <div className='insaan' ><img id='wander' height="70px" src={MusicPlayerOptions} alt=""/></div>
        <div className='insaan' ><img id='hub' src={Rightoptions} alt=""/></div>
    </div>
    <div class="haha">
        Listening on ASUS-ROG-G53 1GT
    </div>
     </div>
    </>
  )
}

export default App
