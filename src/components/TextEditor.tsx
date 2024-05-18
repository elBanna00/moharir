import Editor, { useMonaco } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import * as monaco from "monaco-editor";
// @ts-ignore
import { initVimMode } from "monaco-vim";
import React, { useRef, useState } from "react";
import { LanguangeOption, exampleSnippets } from "@/config/config";

interface TextEditorProps {
  setSourceCode: React.Dispatch<React.SetStateAction<string>>;
  selectedLanguage: LanguangeOption;
  sourceCode: string;
}

export const TextEditor: React.FC<TextEditorProps> = ({
  setSourceCode,
  selectedLanguage,
  sourceCode,
}) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const statusBarRef = useRef<HTMLDivElement | null>(null);
  const vimModeRef = useRef(null);
  const monaco = useMonaco();
  const { theme } = useTheme();
  const selectedLanguagestr = String(selectedLanguage.language);
  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor | null,
    monaco: any
  ) => {
    editorRef.current = editor;
    editor?.focus();
    // Initialize Vim mode
    if (monaco) {
      initVimMode(editor, statusBarRef.current);
    }
  };
  const handleOnChange = (value: string | undefined) => {
    setSourceCode(value!);
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Editor
        height="100vh"
        theme={theme === "dark" ? "vs-dark" : "vs-light"}
        language={selectedLanguage.language}
        onMount={handleEditorDidMount}
        defaultValue={sourceCode}
        onChange={handleOnChange}
        value={sourceCode}
      />
      <span
        ref={statusBarRef}
        style={{
          color: "white",
          padding: "5px",
        }}
        className="bg-green-600 inline-block absolute bottom-0"
      ></span>
    </div>
  );
};
export default TextEditor;
