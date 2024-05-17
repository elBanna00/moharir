import Editor, { useMonaco } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import * as monaco from "monaco-editor";
import { initVimMode } from "monaco-vim";
import React, { useRef, useState } from "react";

interface TextEditorProps {}

export const TextEditor: React.FC<TextEditorProps> = ({}) => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const statusBarRef = useRef<HTMLDivElement | null>(null);
  const vimModeRef = useRef(null);
  const monaco = useMonaco();
  const { theme } = useTheme();

  const [sourceCode, setSourceCode] = useState("");
  console.log(sourceCode);
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
        language="javascript"
        onMount={handleEditorDidMount}
        defaultValue="// vim mode enabled"
        onChange={handleOnChange}
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
