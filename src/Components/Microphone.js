import React from 'react';
import './Microphone.css';
import mic from './mic.png'
import Recorder  from 'recorder-js';

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
function sendData(blob) {
// sends data to flask url /messages as a post with data blob - in format for wav file, hopefully. it is a promise
fetch("/messages", {
method: "post",
body: blob
});}

const Microphone =({start,stop})=> {



return(
<div className='gray' >
<img onMouseDown={()=>start()} onMouseUp={()=>stop()}/* onClick ={()=>download()}*/ style={{paddingTop:'250px'}} width="100" height="100" alt='mic' src={mic}/>

</div>
);
}

export default Microphone;
