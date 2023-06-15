import React, {useState} from 'react'

export default function TextForm(props) {

    
   
    const handleOnChange = (event) => {
        //console.log("On change!");
        setText(event.target.value); //to accept user entered text
    }

    const handleClear = ()=>{
       // console.log(text.length);
        if(text.length===0){
            props.showAlert("Text is already clear!","info");
        }
        else{
        setText("");
        props.showAlert("Text cleared!","success");
        }
    }
    
    const handleUpClick = () => {
        if(text.length===0){
            props.showAlert("Please enter text!","warning");
        }
        else{
        let newText = text.toUpperCase();
        setText(newText);//update text state variable
        props.showAlert("Text converted to uppercase!","success");
        }
    }

    const handleLowClick = ()=>{
        if(text.length===0){
            props.showAlert("Please enter text!","warning");
        }
        else{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase!","success");
        }
    }
    
    const handleCopy = ()=>{
        if(text.length===0){
            props.showAlert("Please enter text!","warning");
        }
        else{
        // var copyText = document.getElementById("myBox");
        // copyText.select();
        navigator.clipboard.writeText(text);//navigator api
        //document.getSelection().removeAllRanges();//removes highlited selection on text
        props.showAlert("Text copied to clipboard","success");
        }
    }
    let utterance = new SpeechSynthesisUtterance();
    utterance.voice = window.speechSynthesis.getVoices()[0];
    const handleSpeech = ()=>{
        if(text.length===0){
            props.showAlert("Please enter text!","warning");
        }
        else{
        let ourText = text;
        
        utterance.text = ourText;
       
        window.speechSynthesis.speak(utterance);
        props.showAlert("You can hear the audio!","success");
        }
    }

    const handleRemoveExtraspace = ()=>{
        if(text.length===0){
            props.showAlert("Please enter text!","warning");
        }
        else{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Extra spaces removed!","success");
        }
    }

    const handleTitleCase = ()=>{
        if(text.length===0){
            props.showAlert("Please enter text!","warning");
        }
        else{
        let arr = text.split(" ");
        for(let i=0;i<arr.length;i++){
            arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        }
        let newText = arr.join(" ");
        setText(newText);
        props.showAlert("Text converted to titlecase!","success");
       }
    }

    const handleDotRemoval = ()=>{
        if(text.length===0){
            props.showAlert("Please enter text!","warning");
        }
        else{
        let newText = text.split(".");
        let updateText = newText.join(" ");
        setText(updateText);
        props.showAlert("Full stops are removed!","success");
        }
    }
 
    const [text, setText] = useState('');//declaring state variable text
    
  return ( //textform bgcolor alternate #171515
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" 
        style={{backgroundColor:props.mode==='dark'?'#a7a1a1':'white',color:props.mode==='dark'?'white':'black'}} ></textarea>
        </div>
        <button className="btn btn-info mx-2 my-1" onClick={handleClear}>Clear</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleTitleCase}>Convert to Titlecase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleSpeech}>Text to Speech</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleRemoveExtraspace}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleDotRemoval}>Remove Full Stops</button>
        
    </div>
    <div className='container my-4' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <ul>
            <li>No. of Words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</li> 
            <li>No. of Characters: {text.length}</li>
            <li>Time to read: {0.08*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</li>
        </ul>
        <h3 className='mb-4'>Preview</h3>
        <p className="border border-primary border-4  p-2">{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
