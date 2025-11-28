/**
 * Homepage - Professional Redesign
 *
 * Wix-inspired professional design with classic sophistication.
 * Features smooth scroll animations, asymmetric layouts, and premium details.
 */

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section - Dramatic & Bold */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 overflow-hidden">
        {/* Decorative pattern */}
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
        <title>KickOff.gg</title>
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-64 h-64 border-t-4 border-l-4 border-accent-500 opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 border-b-4 border-r-4 border-accent-500 opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative line */}
            <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>

            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 text-white leading-tight tracking-tight">
              Where Gentlemen
              <br />
              <span className="text-accent-500">Place Their Bets</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-neutral-200 max-w-3xl mx-auto leading-relaxed">
              Experience the sophistication of traditional betting houses,
              reimagined for the modern era. Football, basketball, esports—all
              with virtual points, zero risk.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-accent-500 text-primary-950 hover:bg-accent-600 border-2 border-accent-600 shadow-2xl hover:shadow-accent-500/50 font-semibold text-lg px-12 py-6 text-xl"
                >
                  Start Betting Free
                </Button>
              </Link>
              <Link href="/matches">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-primary-950 font-semibold text-lg px-12 py-6 backdrop-blur-sm bg-white/10 text-xl"
                >
                  Explore Matches
                </Button>
              </Link>
            </div>

            {/* Decorative line */}
            <div className="w-24 h-1 bg-accent-500 mx-auto mt-12"></div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-accent-500">
              <span className="text-sm font-medium mb-2">
                Scroll to explore
              </span>
              <svg
                className="w-6 h-6 animate-bounce"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar - Trust Indicators */}
      <section className="py-16 bg-white border-y-2 border-accent-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-5xl font-serif font-bold text-primary-900 mb-2">
                10K+
              </div>
              <div className="text-neutral-600 font-medium">Active Players</div>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold text-primary-900 mb-2">
                50K+
              </div>
              <div className="text-neutral-600 font-medium">Bets Placed</div>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold text-primary-900 mb-2">
                500+
              </div>
              <div className="text-neutral-600 font-medium">Daily Matches</div>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold text-primary-900 mb-2">
                24/7
              </div>
              <div className="text-neutral-600 font-medium">Live Action</div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Featured Matches Section */}
      <section className="py-24 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-1 bg-accent-500 mx-auto mb-6"></div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary-900">
              Featured Matches
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Premium fixtures selected by our experts. Place your bets on
              today's most anticipated games.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Match Card 1 - Football */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                padding="none"
                className="overflow-hidden border-2 border-accent-500 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Match Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop"
                    alt="Football match"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-transparent"></div>

                  {/* Sport Badge */}
                  <div className="absolute top-4 left-4 bg-accent-500 text-primary-950 px-3 py-1 rounded-full text-sm font-bold">
                    FOOTBALL
                  </div>

                  {/* Live Badge */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    LIVE
                  </div>
                </div>

                {/* Match Details */}
                <div className="p-6">
                  <div className="text-sm text-neutral-500 mb-3 font-medium">
                    Premier League • Today 3:00 PM
                  </div>

                  {/* Teams */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-center flex-1">
                      <div className="font-bold text-primary-900 text-lg">
                        Arsenal
                      </div>
                    </div>
                    <div className="text-2xl font-serif font-bold text-neutral-400 px-4">
                      VS
                    </div>
                    <div className="text-center flex-1">
                      <div className="font-bold text-primary-900 text-lg">
                        Chelsea
                      </div>
                    </div>
                  </div>

                  {/* Odds */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-neutral-100 rounded-lg p-3 text-center hover:bg-accent-500/20 transition-colors cursor-pointer">
                      <div className="text-xs text-neutral-600 mb-1">Home</div>
                      <div className="text-lg font-bold text-primary-900">
                        2.10
                      </div>
                    </div>
                    <div className="bg-neutral-100 rounded-lg p-3 text-center hover:bg-accent-500/20 transition-colors cursor-pointer">
                      <div className="text-xs text-neutral-600 mb-1">Draw</div>
                      <div className="text-lg font-bold text-primary-900">
                        3.40
                      </div>
                    </div>
                    <div className="bg-neutral-100 rounded-lg p-3 text-center hover:bg-accent-500/20 transition-colors cursor-pointer">
                      <div className="text-xs text-neutral-600 mb-1">Away</div>
                      <div className="text-lg font-bold text-primary-900">
                        3.20
                      </div>
                    </div>
                  </div>

                  <Link href="/matches">
                    <Button className="w-full bg-primary-900 hover:bg-primary-600 text-white">
                      Place Bet
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>

            {/* Match Card 2 - Basketball */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                padding="none"
                className="overflow-hidden border-2 border-accent-500 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Match Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop"
                    alt="Basketball match"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-transparent"></div>

                  {/* Sport Badge */}
                  <div className="absolute top-4 left-4 bg-accent-500 text-primary-950 px-3 py-1 rounded-full text-sm font-bold">
                    BASKETBALL
                  </div>

                  {/* Time Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 text-primary-900 px-3 py-1 rounded-full text-sm font-bold">
                    5:30 PM
                  </div>
                </div>

                {/* Match Details */}
                <div className="p-6">
                  <div className="text-sm text-neutral-500 mb-3 font-medium">
                    NBA • Today 5:30 PM
                  </div>

                  {/* Teams */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-center flex-1">
                      <div className="font-bold text-primary-900 text-lg">
                        Lakers
                      </div>
                    </div>
                    <div className="text-2xl font-serif font-bold text-neutral-400 px-4">
                      VS
                    </div>
                    <div className="text-center flex-1">
                      <div className="font-bold text-primary-900 text-lg">
                        Celtics
                      </div>
                    </div>
                  </div>

                  {/* Odds */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-neutral-100 rounded-lg p-3 text-center hover:bg-accent-500/20 transition-colors cursor-pointer">
                      <div className="text-xs text-neutral-600 mb-1">
                        Lakers
                      </div>
                      <div className="text-lg font-bold text-primary-900">
                        1.85
                      </div>
                    </div>
                    <div className="bg-neutral-100 rounded-lg p-3 text-center hover:bg-accent-500/20 transition-colors cursor-pointer">
                      <div className="text-xs text-neutral-600 mb-1">
                        Celtics
                      </div>
                      <div className="text-lg font-bold text-primary-900">
                        1.95
                      </div>
                    </div>
                  </div>

                  <Link href="/matches">
                    <Button className="w-full bg-primary-900 hover:bg-primary-600 text-white">
                      Place Bet
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>

            {/* Match Card 3 - Esports */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card
                padding="none"
                className="overflow-hidden border-2 border-accent-500 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Match Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop"
                    alt="Esports match"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-transparent"></div>

                  {/* Sport Badge */}
                  <div className="absolute top-4 left-4 bg-accent-500 text-primary-950 px-3 py-1 rounded-full text-sm font-bold">
                    ESPORTS
                  </div>

                  {/* Time Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 text-primary-900 px-3 py-1 rounded-full text-sm font-bold">
                    8:00 PM
                  </div>
                </div>

                {/* Match Details */}
                <div className="p-6">
                  <div className="text-sm text-neutral-500 mb-3 font-medium">
                    CS2 Major • Today 8:00 PM
                  </div>

                  {/* Teams */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-center flex-1">
                      <div className="font-bold text-primary-900 text-lg">
                        FaZe
                      </div>
                    </div>
                    <div className="text-2xl font-serif font-bold text-neutral-400 px-4">
                      VS
                    </div>
                    <div className="text-center flex-1">
                      <div className="font-bold text-primary-900 text-lg">
                        Navi
                      </div>
                    </div>
                  </div>

                  {/* Odds */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-neutral-100 rounded-lg p-3 text-center hover:bg-accent-500/20 transition-colors cursor-pointer">
                      <div className="text-xs text-neutral-600 mb-1">FaZe</div>
                      <div className="text-lg font-bold text-primary-900">
                        2.30
                      </div>
                    </div>
                    <div className="bg-neutral-100 rounded-lg p-3 text-center hover:bg-accent-500/20 transition-colors cursor-pointer">
                      <div className="text-xs text-neutral-600 mb-1">Navi</div>
                      <div className="text-lg font-bold text-primary-900">
                        1.60
                      </div>
                    </div>
                  </div>

                  <Link href="/matches">
                    <Button className="w-full bg-primary-900 hover:bg-primary-600 text-white">
                      Place Bet
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/matches">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white"
              >
                View All Matches →
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features - Asymmetric Grid */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-neutral-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-900/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="w-16 h-1 bg-accent-500 mx-auto mb-6"></div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary-900">
              Elevated Betting Experience
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Every detail crafted for the discerning bettor. From curated
              matches to real-time analytics, we bring you the finest in virtual
              sports betting.
            </p>
          </motion.div>

          {/* Asymmetric Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Large Feature Card - Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:row-span-2"
            >
              <Card
                padding="none"
                className="h-full border-2 border-accent-500 overflow-hidden group hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary-900 to-primary-800 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop"
                    alt="Football action"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-serif font-bold mb-4 text-primary-900">
                    Curated Matches
                  </h3>
                  <div className="w-16 h-0.5 bg-accent-500 mb-6"></div>
                  <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                    Hand-selected fixtures across football, basketball, and
                    esports. Only the most exciting matches make the cut.
                    Updated daily with professional-grade odds and insights.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-3 text-xl">✓</span>
                      <span className="text-neutral-700">
                        Real-time odds updates
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-3 text-xl">✓</span>
                      <span className="text-neutral-700">
                        Expert match analysis
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-3 text-xl">✓</span>
                      <span className="text-neutral-700">
                        Multiple sports coverage
                      </span>
                    </li>
                  </ul>
                </div>
              </Card>
            </motion.div>

            {/* Small Feature Card - Top Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                padding="none"
                className="h-full border-2 border-accent-500 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <div className="relative h-32 bg-gradient-to-br from-primary-900 to-primary-800 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=600&h=300&fit=crop"
                    alt="Soccer referee with whistle"
                    className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-3 text-primary-900">
                    Live Tracking
                  </h3>
                  <div className="w-12 h-0.5 bg-accent-500 mb-4"></div>
                  <p className="text-neutral-700 leading-relaxed">
                    Watch your bets unfold in real-time. Detailed dashboard
                    shows wins, losses, and profit margins instantly.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Small Feature Card - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                padding="none"
                className="h-full border-2 border-accent-500 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <div className="relative h-32 bg-gradient-to-br from-primary-900 to-primary-800 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&h=300&fit=crop"
                    alt="Championship trophy"
                    className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-3 text-primary-900">
                    Leaderboards
                  </h3>
                  <div className="w-12 h-0.5 bg-accent-500 mb-4"></div>
                  <p className="text-neutral-700 leading-relaxed">
                    Compete with fellow bettors. Climb the ranks and prove your
                    expertise. Weekly and all-time champions showcased.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works - Visual Timeline */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="w-16 h-1 bg-accent-500 mx-auto mb-6"></div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary-900">
              Simple. Refined. Effective.
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Three elegant steps to begin your betting journey
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent-500/30 transform -translate-x-1/2"></div>

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mb-16 md:mb-24"
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
                  <div className="inline-block bg-accent-500 text-primary-950 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                    1
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-4 text-primary-900">
                    Create Your Account
                  </h3>
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    Sign up in seconds. Receive 1,000 complimentary points to
                    begin. No credit card required, no obligations.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="relative bg-gradient-to-br from-primary-900 to-primary-800 rounded-lg h-64 overflow-hidden border-2 border-accent-500 group">
                    <img
                      src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=600&h=400&fit=crop"
                      alt="Create account"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mb-16 md:mb-24"
            >
              <div className="md:flex items-center flex-row-reverse">
                <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0 text-center md:text-left">
                  <div className="inline-block bg-accent-500 text-primary-950 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                    2
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-4 text-primary-900">
                    Browse & Analyze
                  </h3>
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    Explore curated matches with professional odds. Study team
                    stats, recent form, and expert insights before placing your
                    bet.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-white"></div>
                <div className="md:w-1/2 md:pr-12">
                  <div className="relative bg-gradient-to-br from-primary-900 to-primary-800 rounded-lg h-64 overflow-hidden border-2 border-accent-500 group">
                    <img
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
                      alt="Browse and analyze matches"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-center md:text-right">
                  <div className="inline-block bg-accent-500 text-primary-950 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
                    3
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-4 text-primary-900">
                    Place & Win
                  </h3>
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    Commit your points with confidence. Track results live.
                    Watch your balance grow as your predictions prove correct.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="relative bg-gradient-to-br from-primary-900 to-primary-800 rounded-lg h-64 overflow-hidden border-2 border-accent-500 group">
                    <img
                      src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop"
                      alt="Win and earn"
                      className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-24 bg-gradient-to-b from-neutral-100 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-16 h-1 bg-accent-500 mx-auto mb-6"></div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary-900">
              What Our Members Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                padding="lg"
                className="h-full border-2 border-accent-500 relative"
              >
                <div className="text-6xl text-accent-500 mb-4">"</div>
                <p className="text-neutral-700 text-lg mb-6 leading-relaxed italic">
                  The sophistication here is unmatched. Finally, a betting
                  platform that respects my intelligence.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-900 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JD
                  </div>
                  <div>
                    <div className="font-semibold text-primary-900">
                      James Davidson
                    </div>
                    <div className="text-sm text-neutral-600">London, UK</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                padding="lg"
                className="h-full border-2 border-accent-500 relative"
              >
                <div className="text-6xl text-accent-500 mb-4">"</div>
                <p className="text-neutral-700 text-lg mb-6 leading-relaxed italic">
                  Climbed to top 10 in just two weeks. The competitive
                  atmosphere keeps me coming back daily.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-900 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MC
                  </div>
                  <div>
                    <div className="font-semibold text-primary-900">
                      Michael Chen
                    </div>
                    <div className="text-sm text-neutral-600">
                      New York, USA
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card
                padding="lg"
                className="h-full border-2 border-accent-500 relative"
              >
                <div className="text-6xl text-accent-500 mb-4">"</div>
                <p className="text-neutral-700 text-lg mb-6 leading-relaxed italic">
                  Beautiful design, flawless execution. This is how modern
                  betting should be done.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-900 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    SR
                  </div>
                  <div>
                    <div className="font-semibold text-primary-900">
                      Sophie Rousseau
                    </div>
                    <div className="text-sm text-neutral-600">
                      Paris, France
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Strong Call to Action */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-32 overflow-hidden">
        {/* Decorative pattern */}
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

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-1 bg-accent-500 mx-auto mb-8"></div>

            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-white leading-tight">
              Join the Elite
            </h2>

            <p className="text-2xl text-neutral-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Thousands of discerning bettors have already discovered the
              KickOff.gg advantage. Your complimentary 1,000 points await.
            </p>

            <Link href="/signup">
              <Button
                size="lg"
                className="bg-accent-500 text-primary-950 hover:bg-accent-600 border-2 border-accent-600 shadow-2xl hover:shadow-accent-500/50 font-bold text-xl px-16 py-8"
              >
                Claim Your Free Points
              </Button>
            </Link>

            <p className="text-neutral-400 mt-8 text-sm">
              No credit card required • Join in 30 seconds • Start betting
              immediately
            </p>

            <div className="w-24 h-1 bg-accent-500 mx-auto mt-12"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
