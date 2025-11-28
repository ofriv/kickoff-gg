/**
 * Header Component
 *
 * Professional navigation bar with Wix-style mega menu.
 * Features sports dropdown, sticky behavior, scroll effects,
 * smooth animations, and responsive mobile menu.
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSportsMenuOpen, setIsSportsMenuOpen] = useState(false);

  // TODO: Get actual user session in next step
  const isLoggedIn = false;
  const userPoints = 1000;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sports = [
    {
      name: "Football",
      href: "/sports/football",
      description: "Premier League, Champions League & more",
    },
    {
      name: "Basketball",
      href: "/sports/basketball",
      description: "NBA, EuroLeague, NCAA",
    },
    {
      name: "Esports",
      href: "/sports/esports",
      description: "CS2, Dota 2, League of Legends",
    },
    {
      name: "Tennis",
      href: "/sports/tennis",
      description: "Grand Slams, ATP, WTA",
    },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-50/95 backdrop-blur-lg shadow-lg border-b border-accent-500/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span
              className={`text-3xl font-serif font-bold transition-colors ${
                isScrolled ? "text-primary-900" : "text-white"
              } group-hover:text-accent-600`}
            >
              KickOff.gg
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {/* Sports Mega Menu */}
            <div className="relative">
              <button
                onClick={() => setIsSportsMenuOpen(!isSportsMenuOpen)}
                className={`font-medium transition-all hover:text-accent-600 flex items-center gap-1 ${
                  isScrolled ? "text-neutral-800" : "text-white"
                }`}
              >
                Sports
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isSportsMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>

            <Link
              href="/matches"
              className={`font-medium transition-all hover:text-accent-600 ${
                isScrolled ? "text-neutral-800" : "text-white"
              }`}
            >
              All Matches
            </Link>
            <Link
              href="/dashboard"
              className={`font-medium transition-all hover:text-accent-600 ${
                isScrolled ? "text-neutral-800" : "text-white"
              }`}
            >
              My Bets
            </Link>
            <Link
              href="/leaderboard"
              className={`font-medium transition-all hover:text-accent-600 ${
                isScrolled ? "text-neutral-800" : "text-white"
              }`}
            >
              Leaderboard
            </Link>
            <Link
              href="/fantasy"
              className={`font-medium transition-all hover:text-accent-600 flex items-center gap-1 ${
                isScrolled ? "text-neutral-800" : "text-white"
              }`}
            >
              Fantasy League
              <span className="text-xs bg-accent-500 text-primary-950 px-2 py-0.5 rounded-full font-bold">
                BETA
              </span>
            </Link>
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Discord Button */}
            <button
              className={`px-3 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                isScrolled
                  ? "text-neutral-800 hover:bg-neutral-200"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span className="text-sm">Discord</span>
            </button>

            {/* Support Button */}
            <Link
              href="/support"
              className={`px-3 py-2 rounded-lg font-medium transition-all ${
                isScrolled
                  ? "text-neutral-800 hover:bg-neutral-200"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Support
            </Link>

            {isLoggedIn ? (
              <>
                {/* User Points Display */}
                <div
                  className={`flex items-center px-4 py-2 rounded-lg border-2 ${
                    isScrolled
                      ? "bg-white border-accent-500"
                      : "bg-white/10 backdrop-blur-sm border-accent-500"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      isScrolled ? "text-primary-900" : "text-white"
                    }`}
                  >
                    💰 {userPoints.toLocaleString()} pts
                  </span>
                </div>

                {/* Profile */}
                <Button
                  variant="outline"
                  size="sm"
                  className={
                    isScrolled
                      ? "border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white"
                      : "border-white text-white hover:bg-white hover:text-primary-900"
                  }
                >
                  Profile
                </Button>
              </>
            ) : (
              <>
                {/* Login Button */}
                <Link href="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className={
                      isScrolled
                        ? "border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white"
                        : "border-white text-white hover:bg-white hover:text-primary-900"
                    }
                  >
                    Login
                  </Button>
                </Link>

                {/* Signup Button */}
                <Link href="/signup">
                  <Button
                    size="sm"
                    className="bg-accent-500 text-primary-950 hover:bg-accent-600 border-2 border-accent-600 shadow-lg"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-primary-900" : "text-white"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Sports Mega Menu Dropdown */}
      <AnimatePresence>
        {isSportsMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-b-2 border-accent-500 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-4 gap-6">
                {sports.map((sport) => (
                  <Link
                    key={sport.name}
                    href={sport.href}
                    className="group p-6 rounded-lg border-2 border-transparent hover:border-accent-500 hover:bg-neutral-50 transition-all duration-200"
                    onClick={() => setIsSportsMenuOpen(false)}
                  >
                    <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">
                      {sport.name}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {sport.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-neutral-50 border-t border-accent-500/30"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Sports submenu */}
              <div className="space-y-2">
                <div className="text-sm font-bold text-primary-900 mb-2">
                  Sports
                </div>
                {sports.map((sport) => (
                  <Link
                    key={sport.name}
                    href={sport.href}
                    className="block py-2 pl-4 text-neutral-800 hover:text-accent-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {sport.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/matches"
                className="block py-2 text-neutral-800 hover:text-accent-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Matches
              </Link>
              <Link
                href="/dashboard"
                className="block py-2 text-neutral-800 hover:text-accent-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Bets
              </Link>
              <Link
                href="/leaderboard"
                className="block py-2 text-neutral-800 hover:text-accent-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Leaderboard
              </Link>
              <Link
                href="/fantasy"
                className="block py-2 text-neutral-800 hover:text-accent-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fantasy League{" "}
                <span className="text-xs bg-accent-500 text-primary-950 px-2 py-0.5 rounded-full">
                  BETA
                </span>
              </Link>

              <div className="pt-4 border-t border-accent-500/30 space-y-3">
                <button className="w-full text-left py-2 text-neutral-800 hover:text-accent-600">
                  Discord (Coming Soon)
                </button>
                <Link
                  href="/support"
                  className="block py-2 text-neutral-800 hover:text-accent-600"
                >
                  Support
                </Link>

                {!isLoggedIn && (
                  <>
                    <Link href="/login" className="block">
                      <Button variant="outline" className="w-full">
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup" className="block">
                      <Button className="w-full bg-accent-500 text-primary-950 hover:bg-accent-600">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
