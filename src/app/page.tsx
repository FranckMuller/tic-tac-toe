"use client";
import { Header } from "../components/header";
import { Game } from "../components/game";

function HomePage() {

  return (
    <HomePageLayout header={<Header />}>
      <Game />
    </HomePageLayout>
  );
}

type HomePageLayoutProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

function HomePageLayout({ header, children }: HomePageLayoutProps) {
  return (
    <div className="bg-slate-50 min-h-screen text-red">
      {header}
      <main className="py-4 mx-auto w-max">{children}</main>
    </div>
  );
}

export default HomePage;
