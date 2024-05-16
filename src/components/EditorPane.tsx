import React from "react";
import { ModeToggle } from "./modeToggle";
import LanguagesSelect from "./LanguagesSelect";
import EditorInnerPanel from "./EditorInnerPanel";

interface editorPaneProps {}

const EditorPane: React.FC<editorPaneProps> = ({}) => {
  return (
    <div className="min-h-screen dark:bg-black bg-slate-300 rounded-2xl shadow-2xl py-6 px-8">
      <div className="flex items-center justify-between pb-3">
        <h2 className="scroll-m-20  text-2xl font-semibold tracking-tight first:mt-0">
          المحرر
        </h2>
        <div className="flex items-center space-x-2 ">
          <ModeToggle />
          <div className="w-[230px]">
            <LanguagesSelect />
          </div>
        </div>
      </div>
      <div className=" bg-slate-300 dark:bg-gray-900 p-3 rounded-xl">
        <EditorInnerPanel />
      </div>
    </div>
  );
};

export default EditorPane;
