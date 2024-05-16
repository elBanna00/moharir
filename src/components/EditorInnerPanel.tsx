"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function EditorInnerPanel() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded-lg border dark:bg-black"
    >
      <ResizablePanel defaultSize={50} minSize={35}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} minSize={35}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
export default EditorInnerPanel;
