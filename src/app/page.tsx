import EditorPane from "@/components/EditorPane";
import { ModeToggle } from "@/components/modeToggle";
import React from "react";
interface pageProps {}

const Home: React.FC<pageProps> = ({}) => {
  return (
    <div className="dark:bg-zinc-800 bg-slate-200">
      <EditorPane />
    </div>
  );
};
export default Home;
