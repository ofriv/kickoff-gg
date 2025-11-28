/**
 * Homepage
 *
 * Main landing page for KickOff.gg.
 * Displays welcome message, app description, and call-to-action buttons.
 * Classic gentleman's club aesthetic with burgundy and beige accents.
 */

import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white py-24 overflow-hidden border-b-4 border-accent-500">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.05) 10px,
              rgba(255,255,255,0.05) 20px
            )`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Decorative line */}
          <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>

          <h1 className="text-6xl md:text-7xl font-serif mb-6 tracking-tight">
            Welcome to KickOff.gg
          </h1>

          {/* Decorative trophy icon */}
          <div className="text-6xl mb-6">🏆</div>

          <p className="text-xl mb-10 text-neutral-100 max-w-2xl mx-auto leading-relaxed">
            The ultimate sports betting experience. Place bets on football,
            basketball, esports, and more - compete with friends using virtual
            points!
          </p>

          <div className="flex gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-accent-500 text-primary-950 hover:bg-accent-600 border-2 border-accent-600 shadow-xl hover:shadow-2xl font-semibold"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/matches">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-primary-950 shadow-xl hover:shadow-2xl font-semibold backdrop-blur-sm bg-white/10"
              >
                View Matches
              </Button>
            </Link>
          </div>

          {/* Decorative line */}
          <div className="w-24 h-1 bg-accent-500 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-50 to-neutral-100 relative">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-accent-500 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-accent-500 opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-accent-500 mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-primary-900">
              How It Works
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Three simple steps to start your betting journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card
              padding="lg"
              className="text-center border-2 border-accent-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white relative overflow-hidden group"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent-500/20 to-transparent"></div>

              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🎯
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-primary-900">
                Place Bets
              </h3>
              <div className="w-12 h-0.5 bg-accent-500 mx-auto mb-4"></div>
              <p className="text-neutral-700 leading-relaxed">
                Choose from upcoming games across multiple sports and place bets
                using virtual points. No real money involved!
              </p>
            </Card>

            {/* Feature 2 */}
            <Card
              padding="lg"
              className="text-center border-2 border-accent-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white relative overflow-hidden group"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent-500/20 to-transparent"></div>

              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                📊
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-primary-900">
                Track Results
              </h3>
              <div className="w-12 h-0.5 bg-accent-500 mx-auto mb-4"></div>
              <p className="text-neutral-700 leading-relaxed">
                Watch your bets unfold in real-time. See your wins, losses, and
                total profit in your dashboard.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card
              padding="lg"
              className="text-center border-2 border-accent-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white relative overflow-hidden group"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent-500/20 to-transparent"></div>

              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🏆
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-primary-900">
                Climb the Leaderboard
              </h3>
              <div className="w-12 h-0.5 bg-accent-500 mx-auto mb-4"></div>
              <p className="text-neutral-700 leading-relaxed">
                Compete with friends and other players. Who will be the ultimate
                betting champion?
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-20 border-t-4 border-accent-500 overflow-hidden">
        {/* Decorative pattern */}
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255,255,255,0.05) 10px,
      rgba(255,255,255,0.05) 20px
    )`,
            }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-1 bg-accent-500 mx-auto mb-8"></div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Ready to Start Betting?
          </h2>

          <p className="text-xl text-neutral-200 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join now and get{" "}
            <span className="text-accent-500 font-bold">1,000 free points</span>{" "}
            to start placing bets!
          </p>

          <Link href="/signup">
            <Button
              size="lg"
              className="bg-accent-500 text-primary-950 hover:bg-accent-600 border-2 border-accent-600 shadow-2xl hover:shadow-accent-500/50 font-semibold text-lg px-10 py-4"
            >
              Sign Up Free
            </Button>
          </Link>

          <div className="w-16 h-1 bg-accent-500 mx-auto mt-8"></div>
        </div>
      </section>
    </div>
  );
}
