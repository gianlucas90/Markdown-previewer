import React from "react";

const Editor = (props) => {

  const { value, setText } = props;

  return (
    <div id="editor-container">
      <h1>Editor</h1>
  <textarea name="" id="editor" value={value} onChange={setText}>{value}</textarea>
    </div>
  );
};

export default Editor;
