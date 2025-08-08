import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Trophy, Users, Cloud as CloudIcon } from "lucide-react";
import CloudField from "@/components/CloudField";
import heroImage from "@/assets/hero-cloudy-fantasy.jpg";

const Index: React.FC = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = bgRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--pointer-x", `${x}px`);
    el.style.setProperty("--pointer-y", `${y}px`);
  };

  const canonical = typeof window !== "undefined" ? window.location.href : undefined;

  return (
    <div ref={bgRef} onMouseMove={handlePointerMove} className="relative min-h-screen bg-hero">
      <Helmet>
        <title>Cloudy Fantasy Football App | Build Your Dream Team</title>
        <meta
          name="description"
          content="Draft players, manage leagues, and track live scores in a beautiful cloudy-themed fantasy football app. Build your dream team today."
        />
        {canonical && <link rel="canonical" href={canonical} />}
        <meta property="og:title" content="Cloudy Fantasy Football App" />
        <meta property="og:description" content="Build your dream team with a modern, cloudy-themed fantasy football experience." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Cloudy Fantasy Football",
          applicationCategory: "GameApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          url: canonical || "",
        })}</script>
      </Helmet>

      <CloudField />

      <header className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Cloudy Fantasy Football</a>
          <div className="flex items-center gap-3">
            <Button variant="outline">Sign In</Button>
            <Button variant="hero">Get Started</Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-6 pt-10 pb-6 lg:pt-20 lg:pb-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <article className="glass-panel rounded-2xl p-8 sm:p-10 hover-lift">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Cloudy Fantasy Football – Build Your Dream Team
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6">
                Draft smarter, manage leagues with ease, and follow live scores — all wrapped in a calm, cloud-inspired experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" variant="hero">Create Your League</Button>
                <Button size="lg" variant="outline">Explore Features</Button>
              </div>
            </article>

            <div className="relative">
              <img
                src={heroImage}
                alt="Fantasy football stadium floating in soft clouds"
                loading="lazy"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12 lg:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="glass-panel rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Trophy /> Smart Drafting</CardTitle>
                <CardDescription>Build the perfect roster with intuitive drafting and helpful insights.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass-panel rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CloudIcon /> Live Scores</CardTitle>
                <CardDescription>Track real-time performance with a clean, cloud-themed scoreboard.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="glass-panel rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Users /> League Management</CardTitle>
                <CardDescription>Invite friends, set rules, and run your league without the hassle.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-6 py-10 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Cloudy Fantasy Football</p>
      </footer>
    </div>
  );
};

export default Index;

