import React from "react";
import { Button } from "./ui/button";
import { Play } from "lucide-react";

interface EditorOutputProps {}

export const EditorOutput: React.FC<EditorOutputProps> = ({}) => {
  return (
    <div className="space-y-3 bg-slate-300 dark:bg-black min-h-screen">
      <div className="flex items-center justify-between bg-slate-300 dark:bg-slate-900 px-6 py-2">
        <h2>Output</h2>
        <Button
          size={"sm"}
          className="dark:bg-purple-600 dark:hover:bg-purple-800 text-slate-100 bg-slate-800 hover:bg-slate-900"
        >
          <Play className="w-4 h-4 mr-2" />
          <span>Run</span>
        </Button>
      </div>
      <div className="px-6">
        <h2>Hello World</h2>
      </div>
    </div>
  );
};
