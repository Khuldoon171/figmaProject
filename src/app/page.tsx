import { FeatureCard } from "./components/featureCard";
import Hero from "./components/hero";
import RecentPost from "./components/recentPost";

export default function Home() {
  return (
    <div>
      <Hero />
      <RecentPost />
      <FeatureCard />
    </div>
  );
}
