import React,{useState} from 'react';

export default function Textform(props) {
    
 
    const handleUpClick =()=>{
        // console.log("Button is clicked " + text);
        let upperText = text.toUpperCase();
        setText(upperText)
    }
    const handleloClick =()=>{
        // console.log("Button is clicked " + text);
        let lowerText = text.toLowerCase();
        setText(lowerText)
    }
    const handleclear =()=>{
        // console.log("Button is clicked " + text);
        let ClearText = '';
        setText(ClearText)
    }
    const handleCopy = () => {
        var text = document.getElementById("Mytext");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange =(event)=>{
        // console.log("change  is clicked ");
        setText (event.target.value);
    }

    const [text, setText] = useState('');
    // setText("New Content"); correct way to change the state value 
    return (
        <div className='textform'> 
             <h2>Enter your content</h2>
            <h4>{props.heading}</h4>
            <div className="my-3">
            <textarea className="form-control" id="Mytext" rows="6" onChange={handleOnChange} value={text}>         </textarea>
            </div>
            <button className="btn btn-success mx-1.5 " onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-success mx-2 " onClick={handleloClick}>Convert to Lowercase</button>
            <button className="btn btn-success mx-2 " onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-success mx-2 " onClick={handleclear}>Clear Text</button>
            {/* <h3 className="my-3">Preview Your content</h3>
            <p>{text}</p> */}    
            <div className='count'>
            <br></br>
            <h2>Word Counter</h2>
             <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">Words
                 <span className="badge bg-success rounded-pill">{text.split(" ").length}</span> </li>
                 <li className="list-group-item d-flex justify-content-between align-items-center">Letters
                 <span className="badge bg-success rounded-pill">{text.length}</span> </li>
                
                </ul>
                
                {/* <p>{text.split(" ").length} Words and {text.length} Letters</p>
                {/* <p>
                    <h5>Word Reader (Based on Avg Speed)</h5>
                    {0.008 * text.split(" ").length} Minutes </p> */} 
            </div>
        </div>
    )
}
