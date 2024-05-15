import EditorPane from "@/components/EditorPane";
import { ModeToggle } from "@/components/modeToggle";
import React from "react";
interface pageProps {}

const Home: React.FC<pageProps> = ({}) => {
  return (
    <div className="dark:bg-gradient-to-l from-slate-950 bg-slate-800 p-8">
      <EditorPane />
    </div>
  );
};
export default Home;
