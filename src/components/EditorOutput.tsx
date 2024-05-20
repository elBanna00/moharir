import React, { useState } from "react";
import { Button } from "./ui/button";
import { Loader, Play } from "lucide-react";
import { LanguangeOption } from "@/config/config";
import { executeCode } from "@/lib/api/executeCode";

interface EditorOutputProps {
  opt: LanguangeOption;
  src: string;
}

export const EditorOutput: React.FC<EditorOutputProps> = ({ opt, src }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [codeOutput, setCodeOutput] = useState([]);
  const handleOnClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const result = await executeCode(opt, src, setIsLoading);
    setCodeOutput(result.run.output.split("\n"));
  };
  return (
    <div className="space-y-3 bg-slate-300 dark:bg-black min-h-screen">
      <div className="flex items-center justify-between bg-slate-300 dark:bg-slate-900 px-6 py-2">
        <h2>Output</h2>
        {isLoading ? (
          <Button
            disabled
            onClick={handleOnClick}
            size={"sm"}
            className="dark:bg-purple-600 dark:hover:bg-purple-800 text-slate-100 bg-slate-800 hover:bg-slate-900"
          >
            <Loader className="w-4 h-4 mr-2 animate-spin" />
            <span>Runing please wait...</span>
          </Button>
        ) : (
          <Button
            onClick={handleOnClick}
            size={"sm"}
            className="dark:bg-purple-600 dark:hover:bg-purple-800 text-slate-100 bg-slate-800 hover:bg-slate-900"
          >
            <Play className="w-4 h-4 mr-2" />
            <span>Run</span>
          </Button>
        )}
      </div>
      <div className="px-6">
        {codeOutput.map((res) => {
          return (
            <p key={res} className="text-sm">
              {res}
            </p>
          );
        })}
      </div>
    </div>
  );
};
