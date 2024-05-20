"use client";
import { useState } from "react";
import { Header } from "../components/header";
import { GameInfo, GameHeading, GameField } from "../components/game";

function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);

  return (
    <div className="bg-slate-50 min-h-screen text-red">
      <Header />
      <main className="py-4 mx-auto w-max">
        <GameHeading playersCount={playersCount} />
        <GameInfo className="mt-4" playersCount={playersCount} />
        <GameField className="mt-5" playersCount={playersCount} />
      </main>
    </div>
  );
}

export default HomePage;
