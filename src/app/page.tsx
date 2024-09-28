import { Header } from "@/components/header";
import { Game } from "@/components/game-new";
import { HomePageLayout } from "./home-page-layout";

export default function HomePage() {
  return (
    <HomePageLayout header={<Header />}>
      <Game />
    </HomePageLayout>
  );
}
