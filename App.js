import './App.css';
import React,{useState,useEffect} from 'react';
const App=()=>{
const[Quote,setQuote]=useState("");
const Getquote=()=>{
	fetch("https://type.fit/api/quotes")
	.then((res)=>res.json())
	.then((data)=>{
		let randomnum = Math.floor(Math.random() * data.length);
		setQuote(data[randomnum]);
	});
}
useEffect(()=>{
	Getquote();
},[]);

	return(
    <div id="bala">
    <div>
   <div>
   <header id="title">RANDOM QUOTE MACHINE</header>
   </div>
<div id='boxs' className='textbox'>
<p id="txt">
{Quote.text }<br></br></p>
{Quote.authors}<br></br>

</div>

<div>
<a id="tweetquote"className="button" href={`https://twitter.com/intent/tweet`} target="_blank">
<img border="0" alt="Twitter" src="https://static.vecteezy.com/system/resources/thumbnails/018/930/745/small/twitter-logo-twitter-icon-transparent-free-free-png.png" width="100" height="100"></img>
</a>
<button id='btn' onClick={Getquote}>NEW QUOTE</button>
<div>
<footer id="siva">designed by~SIVA BADRI</footer>
</div>
</div></div></div>
);
}
export default App;