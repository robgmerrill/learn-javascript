import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const CodeEditor = ({ value, onChange, minLines, maxLines }) => {
  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      onChange={onChange}
      value={value}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        useWorker: false,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        minLines: minLines,
        maxLines: maxLines,
      }}
    />
  );
};

export default CodeEditor;
