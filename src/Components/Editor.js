import React from 'react'

const Editor = (props) => {
    
    const {text, setText} = props;
  
    return (
        <div>
            <textarea name="" id="editor" cols="60" rows="30" value={text} onChange={setText}></textarea>
        </div>
    )
}

export default Editor
