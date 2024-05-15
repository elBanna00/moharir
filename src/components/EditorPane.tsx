import React from "react";
import { ModeToggle } from "./modeToggle";

interface editorPaneProps {}

const EditorPane: React.FC<editorPaneProps> = ({}) => {
  return (
    <div className="min-h-screen dark:bg-black bg-slate-300 rounded-2xl shadow-2xl py-6 px-8">
      <div className="flex items-center justify-between">
        <h2 className="scroll-m-20  text-2xl font-semibold tracking-tight first:mt-0">
          المحرر
        </h2>
        <div className="flex">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default EditorPane;
