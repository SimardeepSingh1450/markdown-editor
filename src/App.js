import { useEffect, useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'
import acm from './assets/acmthapar.jpg'
import { motion } from "framer-motion"
function App() {
  const [lefttext,setLeftText]=useState('Mark Down Editor');
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
      // setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      },5000)
  },[])


  const setTextNull=()=>{
    setLeftText('');
  }

  return (
    <div className="App">
      {
        loading?<>
        <motion.div animate={{scale:[1,1.4,1]}} initial={{scale:1}} transition={{type:'spring',duration:2,repeat:Infinity}} className='loaderdiv'><img className='mimage2' alt="mimage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png"/><img className='acmimg' alt="acm" src={acm}/></motion.div></>:
      <>
      <div style={{display:'flex',justifyContent:'center',marginTop:5}}><img className='mimage' alt="mimage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png"/><h1 className='markdownheader'>&nbsp;&nbsp;MarkDown Editor</h1></div>
      <div className='flexer'>
        <div className='leftmaindiv' style={{display:'flex',flexDirection:'column'}}>
          <div  className='markdown'>
        <h1>MARKDOWN</h1>
          </div>
        <textarea style={{resize:'none',border:'none',overflow:'auto',outline:'none'}} value={lefttext} className='leftside' onChange={(e)=>{setLeftText(e.target.value)}}/>
        <button className='reset' onClick={()=>{setTextNull()}}>Reset</button>
        </div>
        
        <div className='rightmaindiv'>
          <div className='preview'>
          <h1>PREVIEW</h1>
          </div>
        <div className='rightside'><ReactMarkdown>{lefttext}</ReactMarkdown></div>
        </div>
      </div>
      <br/>
      <footer><h3>Made By Simardeep Singh Mudhar &copy;</h3></footer>
      <br/>
      </>
      }
    </div>
  );
}

export default App;
