import React from 'react';
import marked from 'marked';

const Preview = (props) => {
    
    const {text} = props;

    return (
        <div id="preview-container" > 
            <h1>Preview</h1>
            <div id = "preview" dangerouslySetInnerHTML={{__html:marked(text)}}></div>
        </div>
       
    )
}

export default Preview
