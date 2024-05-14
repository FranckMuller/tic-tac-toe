import { useState } from "react";
import { Header } from "../components/header";
import { GameInfo, GameHeading, GameField } from "../components/game";

function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen text-red">
      <Header />
      <main className="py-4 mx-auto w-max">
        <GameHeading />
        <GameInfo className="mt-4" />
        <GameField className="mt-5" />
      </main>
    </div>
  );
}

export default HomePage;
