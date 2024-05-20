"use client";
import dynamic from "next/dynamic";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
const TextEditor = dynamic(() => import("@/components/TextEditor"), {
  ssr: false,
});
import { EditorOutput } from "./EditorOutput";
import { LanguangeOption } from "@/config/config";

interface EditorInnerPanelProbs {
  setSourceCode: (value: React.SetStateAction<string>) => void;
  selectedLanguage: LanguangeOption;
  sourceCode: string;
}
function EditorInnerPanel({
  setSourceCode,
  selectedLanguage,
  sourceCode,
}: EditorInnerPanelProbs) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded-lg border dark:bg-black bg-slate-400"
    >
      <ResizablePanel defaultSize={50} minSize={35}>
        <TextEditor
          sourceCode={sourceCode}
          setSourceCode={setSourceCode}
          selectedLanguage={selectedLanguage}
        />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} minSize={35}>
        <EditorOutput opt={selectedLanguage} src={sourceCode} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
export default EditorInnerPanel;
