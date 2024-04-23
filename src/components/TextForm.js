import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase(); 
        setText(newText);
    }
    const handleLowClick = ()=> {
        let newText = text.toLowerCase(); 
        setText(newText);
    }
    const handleInverseClick = ()=> {
        let newText = text.split('').reverse().join(''); 
        setText(newText);
    }

    const handleOnChange = (e)=> {
        console.log("On Change");
        setText(e.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="8" value={text}></textarea>
        <button className='btn btn-primary m-2' onClick={handleUpClick}> Convert to Uppercase </button>
        <button className='btn btn-primary m-2' onClick={handleLowClick}> Convert to Uppercase </button>
        <button className='btn btn-primary m-2' onClick={handleInverseClick}> Convert to Inverse </button>
        </div>
    </div>
    <div className='container'>
        <h1> Your text summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters </p>
        <p> {0.008 * text.split(" ").length} minutes to read the words </p>
        <h3> Preview </h3>
        <p>{text}</p>
    </div>
    </>
  )
}
