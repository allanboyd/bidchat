import { useState } from 'react';
import LandingPage from './LandingPage';
import AuctionPlatform from './AuctionPlatform';
// Remove App.css import since it doesn't exist

function App() {
  const [showAuctionPlatform, setShowAuctionPlatform] = useState(false);

  const handleGetStarted = () => {
    setShowAuctionPlatform(true);
  };

  const handleBackToLanding = () => {
    setShowAuctionPlatform(false);
  };

  if (showAuctionPlatform) {
    return (
      <div className="App">
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-xl font-semibold text-slate-900">BidChat - Auction Platform</h1>
              <button
                onClick={handleBackToLanding}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                ← Back to Landing Page
              </button>
            </div>
          </div>
        </div>
        <AuctionPlatform />
      </div>
    );
  }

  return (
    <div className="App">
      <LandingPage onGetStarted={handleGetStarted} />
    </div>
  );
}

export default App;
