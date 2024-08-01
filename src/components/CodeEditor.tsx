import React, { useEffect, useRef, useState } from 'react';
import { Editor, monaco } from "@monaco-editor/react";
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from "../constants/constant";
import { rubyLanguage } from '../constants/ruby';
import { sassLanguage } from '@/constants/sass';
import { solidityLanguage } from '@/constants/solidity';

type Prop ={
  onChange: (value: string) => void;
  language: string, 
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const CodeEditor = ({ onChange, language, setLanguage }: Prop) => {
  const editorRef = useRef();
  const [value, setValue] = useState(CODE_SNIPPETS.javascript);


  const onMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
    editor.focus();
  
    // Register the languages
    if (!monaco.languages.getLanguages().some(({ id }) => id === 'ruby' || id === 'sass' || id === 'solidity')) {
        monaco.languages.register({ id: 'ruby' });
        monaco.languages.register({ id: 'sass' });
        monaco.languages.register({ id: 'solidity' });
        monaco.languages.setMonarchTokensProvider('ruby', rubyLanguage);
        monaco.languages.setMonarchTokensProvider('sass', sassLanguage);
        monaco.languages.setMonarchTokensProvider('solidity', solidityLanguage);
    }
  };

  const onSelect = (e: any) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    setValue(CODE_SNIPPETS[selectedLanguage]);
  };

  useEffect(() => {
    console.log("Selected Language:", language);
  }, [language]);

  return (
    <div>
      <div className='mb-3 ml-7'>
        <LanguageSelector onSelect={onSelect} />
      </div>
      <div className='py-2'>
        <Editor
          options={{
            minimap: {
              enabled: false,
            },
          }}
          height="75vh"
          theme="vs-dark"
          language={language}
          defaultValue={CODE_SNIPPETS[language]}
          onMount={onMount}
          value={value}
          onChange={(value) => onChange(value || '')}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
