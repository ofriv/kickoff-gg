/**
 * Header Component
 *
 * Main navigation bar displayed at the top of every page.
 * Shows logo, navigation links, user points, and auth buttons.
 * Responsive design with mobile menu support (future enhancement).
 */

import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Header() {
  // TODO: Get actual user session in next step
  const isLoggedIn = false;
  const userPoints = 1000;

  return (
    <header className="bg-neutral-50 border-b-2 border-accent-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-900">
              KickOff.gg
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/matches"
              className="text-neutral-800 hover:text-primary-900 font-medium transition-colors"
            >
              Matches
            </Link>
            <Link
              href="/dashboard"
              className="text-neutral-800 hover:text-primary-900 font-medium transition-colors"
            >
              My Bets
            </Link>
            <Link
              href="/leaderboard"
              className="text-neutral-800 hover:text-primary-900 font-medium transition-colors"
            >
              Leaderboard
            </Link>
          </nav>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                {/* User Points Display */}
                <div className="hidden sm:flex items-center bg-neutral-100 px-4 py-2 rounded-lg">
                  <span className="text-sm font-semibold text-neutral-700">
                    💰 {userPoints.toLocaleString()} pts
                  </span>
                </div>

                {/* Profile/Logout */}
                <Button variant="outline" size="sm">
                  Profile
                </Button>
              </>
            ) : (
              <>
                {/* Login/Signup Buttons */}
                <Link href="/login">
                  <Button variant="outline" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant="primary" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
