import { Background } from "../components/Background";
import { NavBar } from "../components/NavBar";

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f1111] text-foreground overflow-x-hidden">
      <Background />
      <NavBar />
    </div>
  );
};
