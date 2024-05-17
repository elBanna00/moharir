"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import TextEditor from "./TextEditor";
import { EditorOutput } from "./EditorOutput";

function EditorInnerPanel() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded-lg border dark:bg-black bg-slate-400"
    >
      <ResizablePanel defaultSize={50} minSize={35}>
        <TextEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} minSize={35}>
        <EditorOutput />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
export default EditorInnerPanel;
