import React, { useState } from 'react';

export const TextForm = (props) => {
    const [text, setText] = useState('');
    function handleUpClick() {
        let newText = text.toUpperCase();
        setText(newText);
    }
    function handleLoClick() {
        let newText = text.toLowerCase();
        setText(newText);
    }
    function handleClearClick() {
        let newText = "";
        setText(newText);
    }
    function handleOnChange(e) {
        console.log("change")
        setText(e.target.value)
        // console.log(t)

    }

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className='ab-3'>
                    <textarea className='form-control' id='textArea' rows="5" value={text} onChange={handleOnChange} />
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>convert to UpperCase</button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>convert to LowerCase</button>
                <button className='btn btn-primary mx-1' onClick={handleClearClick}>reset</button>
            </div>
            <div className="container my-3" >
                <h2>Your text summary</h2>
                <p><b>{text.split(" ").length}</b>words and <b>{text.length}</b>charchacters</p>
                <p>{.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )

}
