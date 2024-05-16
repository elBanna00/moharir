import Editor from "@monaco-editor/react";
import { useTheme } from "next-themes";

import React from "react";

interface TextEditorProps {}

export const TextEditor: React.FC<TextEditorProps> = ({}) => {
  const { theme, setTheme } = useTheme();
  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
      theme={theme === "dark" ? "vs-dark" : "vs-light"}
    />
  );
};
