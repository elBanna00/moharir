import { ModeToggle } from "@/components/modeToggle";
import React from "react";

interface pageProps {}

const Home: React.FC<pageProps> = ({}) => {
  return (
    <div>
      <ModeToggle />
      <h2>Moharir</h2>
    </div>
  );
};
export default Home;
