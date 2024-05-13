import { useState } from "react";
import { Header } from "../components/header";
import { GameHeading } from "../components/game/index";

function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen text-red">
      <Header />
      <main className="py-4 mx-auto max-w-2xl">
        <GameHeading />
      </main>
    </div>
  );
}

export default HomePage;
