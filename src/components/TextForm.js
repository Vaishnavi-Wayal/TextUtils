import React,  {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "Success");
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "Success");
    }

    const handleClearClick = ()=>{
        let newText = ' ';
        setText(newText)
        props.showAlert("Text Cleared", "Success");
    }

   

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)//It will allow to user in type the text box. i.e-It allows to change the valueof text.
        
    }

    const [text, setText] = useState('Enter text here');
    // setText("this is updated Text")
    //setText is used to change/update text in usestate

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
                <div className="mb-3 my-4">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control my-2" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#dee2e6':'white', color: props.mode==='dark'?'dark':'dark'}} id="mybox"  rows="8"></textarea>
                </div>
                <button className="btn btn-dark" onClick={handleUpClick}>Convert to upper-case</button>
                <button className="btn btn-dark mx-3" onClick={handleLowClick}>Convert to lower-case</button>
                <button className="btn btn-dark" onClick={handleClearClick}>Clear Text</button>
                {/* <button className="btn btn-dark" id="my Box" onClick={handleCopy}>Copy Text</button> */}
        </div>

        <div className="container my-4" >
            <h2 style={{color: props.mode==='dark'?'white':'black'}} >Your text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>Time required to read: {0.008 * text.split(" ").length} minutes</p> 
            <h3 style={{color: props.mode==='dark'?'white':'black'}} >Preview</h3>
            <p>{text.length>0?text:"Enter Something to preview it here"}</p>
        </div>

        </>
    )
}
