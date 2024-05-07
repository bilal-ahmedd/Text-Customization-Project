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
    const wordCount = text.trim().split(/\s+/).filter(word => word !== "").length;

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : props.mode === 'green' ? '#fff' : props.mode === 'blue' ? '#fff' : '#000' , 
        backgroundColor: props.mode === 'green' ? '#1da518' : props.mode === 'dark' ? '#212530' : props.mode === 'blue' ? '#101ccc' : '#ffffff'
    }
    
    return (
        <>
    <div className='container' style={myStyle}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" style={{ backgroundColor: props.mode === "light" ? "white" : "#9b9b9b" , color: props.mode === "dark" ? "white" : "black" }} onChange={handleOnChange} rows="8" value={text}></textarea>
        <button className='btn btn-primary m-2' onClick={handleUpClick}> Convert to Uppercase </button>
        <button className='btn btn-primary m-2' onClick={handleLowClick}> Convert to Uppercase </button>
        <button className='btn btn-primary m-2' onClick={handleInverseClick}> Convert to Inverse </button>
        </div>
    </div>
    <div className='container' style={myStyle}>
        <h1 style={myStyle}> Your text summary</h1>
        <p style={myStyle}> {wordCount} words and {text.length} characters </p>
        <p style={myStyle}> {0.008 * wordCount} minutes to read the words </p>
        <h3 style={myStyle}> Preview </h3>
        <p style={myStyle}>{text.length>0 ? text : "Write something to see the preview"}</p>
    </div>
    </>
  )
}
