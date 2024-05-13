import { useState } from "react";
import { Header } from "../components/header";
import { GameHeading } from "../components/game";
import { GameInfo } from "../components/game";

function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen text-red">
      <Header />
      <main className="py-4 mx-auto max-w-xl">
        <GameHeading />
        <GameInfo className="mt-4" />
      </main>
    </div>
  );
}

export default HomePage;
