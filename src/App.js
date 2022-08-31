import { useEffect, useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'
import acm from './assets/acmthapar.jpg'
import { motion } from "framer-motion"
function App() {
  const [lefttext,setLeftText]=useState('Mark Down Editor');
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      },5000)
  },[])

  return (
    <div className="App">
      {
        loading?<>
        <motion.div animate={{scale:[1,1.4,1]}} initial={{scale:1}} transition={{type:'spring',duration:2,repeat:Infinity}} className='loaderdiv'><img className='mimage2' alt="mimage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png"/><img className='acmimg' alt="acm" src={acm}/></motion.div></>:
      <>
      <div style={{display:'flex',justifyContent:'center',marginTop:5}}><img className='mimage' alt="mimage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png"/><h1>&nbsp;&nbsp;MarkDown Editor</h1></div>
      <div className='flexer'>
        <textarea value={lefttext} className='leftside' onChange={(e)=>{setLeftText(e.target.value)}}/>
        <div className='rightside'><ReactMarkdown>{lefttext}</ReactMarkdown></div>
      </div>
      </>
      }
    </div>
  );
}

export default App;
