import { useState, useRef, useEffect } from 'react';
import { Instagram, MessageCircle, X } from 'lucide-react';
import clsx from 'clsx';

// Type definitions
interface Lot {
  id: string;
  title: string;
  img: string;
  currency: string;
  buyout: number;
  topBid: number;
}

interface Rule {
  name: string;
  status: string;
}

interface Theme {
  primary: string;
  secondary: string;
  accent: string;
}

type ThemeName = 'emerald' | 'blue' | 'purple' | 'red' | 'orange';

// Theme configurations
const themes: Record<ThemeName, Theme> = {
  emerald: { primary: 'bg-gradient-to-r from-blue-600 to-sky-600', secondary: 'bg-blue-50', accent: 'text-blue-600' },
  blue: { primary: 'bg-gradient-to-r from-blue-600 to-sky-600', secondary: 'bg-blue-50', accent: 'text-blue-600' },
  purple: { primary: 'bg-gradient-to-r from-blue-600 to-sky-600', secondary: 'bg-blue-50', accent: 'text-blue-600' },
  red: { primary: 'bg-gradient-to-r from-blue-600 to-sky-600', secondary: 'bg-blue-50', accent: 'text-blue-600' },
  orange: { primary: 'bg-gradient-to-r from-blue-600 to-sky-600', secondary: 'bg-blue-50', accent: 'text-blue-600' }
};

// Utility function for conditional classes
const cls = clsx;

// Sample data
const sampleLots: Lot[] = [
  {
    id: 'LOT-001',
    title: 'Vintage Rolex Submariner',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    currency: 'USD',
    buyout: 15000,
    topBid: 12000
  },
  {
    id: 'LOT-002',
    title: 'Antique Persian Rug',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    currency: 'USD',
    buyout: 8500,
    topBid: 7200
  },
  {
    id: 'LOT-003',
    title: 'Modern Art Painting',
    img: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop',
    currency: 'USD',
    buyout: 12000,
    topBid: 9800
  },
  {
    id: 'LOT-004',
    title: 'Classic Gibson Les Paul Guitar',
    img: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=400&h=300&fit=crop',
    currency: 'USD',
    buyout: 8500,
    topBid: 7200
  },
  {
    id: 'LOT-005',
    title: 'Vintage Omega Speedmaster',
    img: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=300&fit=crop',
    currency: 'USD',
    buyout: 12000,
    topBid: 9800
  },
  {
    id: 'LOT-006',
    title: 'Rare First Edition Book Collection',
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    currency: 'USD',
    buyout: 5500,
    topBid: 4200
  }
];

const sampleRules: Rule[] = [
  { name: 'Pre-bidding', status: 'Enabled' },
  { name: 'Auto-bid', status: 'Enabled' },
  { name: 'Reserve Price', status: 'Disabled' },
  { name: 'Buy Now', status: 'Enabled' }
];

// Rules & Settings View
function RulesView({ rules }: { rules: Rule[] }) {
  return (
    <div className="p-4 space-y-4">
      <div className="rounded-2xl border border-blue-100 p-4 bg-white shadow-sm">
        <div className="text-sm text-blue-600 mb-2 font-medium">Auction Rules</div>
        <div className="space-y-2">
          {rules.map((r, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-900">{r.name}</div>
              <div className={cls("mt-1 text-xs px-2 py-1 rounded-full inline-block border", 
                r.status.includes("Enabled") ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-gray-50 text-gray-600 border-gray-200"
              )}>
                {r.status}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-blue-100 p-4 bg-white shadow-sm">
        <div className="text-sm text-blue-600 mb-2 font-medium">Settlement & Fees</div>
        <ul className="text-sm text-gray-700 list-disc pl-6 space-y-1">
          <li>Guarantee deposits locked to escrow before bidding.</li>
          <li>Instant settlement on win; fallback pay-now link if insufficient funds.</li>
          <li>Automatic invoice/receipt; seller payout after T+X or delivery proof.</li>
          <li>Buyer premium & seller commission calculated per lot rules.</li>
        </ul>
      </div>
    </div>
  );
}

// Instagram Channel — feed share + DM simulator
function InstagramView({ lots, onShare }: { lots: Lot[]; onShare: (lot: Lot) => void }) {
  return (
    <div className="p-4 space-y-4">
      <div className="rounded-2xl border border-blue-100 p-4 bg-white shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
          <Instagram className="w-4 h-4"/> Instagram Channel
        </div>
        <div className="text-xs text-gray-500">Graph API: messaging, story mentions, deep links</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {lots.map(l => (
          <div key={l.id} className="rounded-2xl border border-blue-100 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <img src={l.img} alt={l.title} className="w-full h-48 object-cover"/>
            <div className="p-3 space-y-1">
              <div className="text-xs text-blue-600 font-medium">{l.id}</div>
              <div className="font-medium line-clamp-1 text-gray-900">{l.title}</div>
              <div className="text-sm text-gray-600">Buy-out {l.currency} {l.buyout.toLocaleString()}</div>
              <div className="pt-2 flex items-center gap-2">
                <button 
                  onClick={() => onShare(l)} 
                  className="px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 text-white hover:from-blue-700 hover:to-sky-700 transition-all duration-300"
                >
                  Share to DM
                </button>
                <button 
                  onClick={() => onShare(l)} 
                  className="px-3 py-2 rounded-xl border border-blue-200 text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Story
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-xl border border-blue-100 bg-blue-50 text-xs text-blue-700">
        Demo: clicking Share opens the Instagram DM simulator. In production, deep-link to Instagram/threads or use the Graph API to initiate a reply with product card + CTA.
      </div>
    </div>
  );
}

// Instagram Chat Simulator
function InstagramChat({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Welcome from Instagram! Reply 'catalog' to browse or 'buy LOT-001'." }
  ]);
  const [input, setInput] = useState("");
  const boxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [messages]);
  
  if (!open) return null;
  
  const send = (t: string) => {
    if (!t) return;
    setMessages(m => [...m, { from: "me", text: t }]);
    setInput("");
    setTimeout(() => 
      setMessages(m => [...m, { from: "bot", text: "(demo) Sent checkout link. Tap to pay & auto-generate invoice." }]), 
      500
    );
  };
  
  return (
    <div className="fixed right-4 bottom-4 z-50 w-full sm:w-[380px] rounded-2xl border bg-white shadow-2xl overflow-hidden">
      <div className="h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white flex items-center justify-between px-3">
        <div className="flex items-center gap-2">
          <Instagram className="w-4 h-4"/> Instagram
        </div>
        <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10">
          <X className="w-4 h-4"/>
        </button>
      </div>
      <div 
        ref={boxRef} 
        className="h-72 overflow-auto p-3 space-y-2 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-fuchsia-50 via-pink-50 to-purple-50"
      >
        {messages.map((m, i) => (
          <div 
            key={i} 
            className={cls(
              "max-w-[85%] px-3 py-2 rounded-2xl text-sm", 
              m.from === "me" ? "ml-auto bg-fuchsia-100" : "bg-white border"
            )}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className="h-12 flex items-center gap-2 px-2">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyDown={(e) => e.key === 'Enter' && send(input)} 
          placeholder="Send a DM" 
          className="flex-1 h-9 rounded-xl border px-3"
        />
        <button 
          onClick={() => send(input)} 
          className="h-9 px-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}

// Core App — Product grid layout
function CoreAppView({ lots, theme }: { lots: Lot[]; theme: ThemeName }) {
  const [selectedLot, setSelectedLot] = useState<Lot | null>(null);
  const [bidAmount, setBidAmount] = useState('');
  const [showBidModal, setShowBidModal] = useState(false);
  const [showBuyOutModal, setShowBuyOutModal] = useState(false);
  const themeObj = typeof theme === 'string' ? (themes[theme] || themes.emerald) : (themes[theme] || themes.emerald);
  
  const handleBidNow = (lot: Lot) => {
    setSelectedLot(lot);
    setBidAmount(lot.topBid.toString());
    setShowBidModal(true);
  };
  
  const handlePlaceBid = () => {
    if (selectedLot && bidAmount) {
      console.log('Placing bid:', { lot: selectedLot.id, amount: bidAmount });
      // In a real app, this would submit the bid
      setShowBidModal(false);
      setSelectedLot(null);
      setBidAmount('');
    }
  };
  
  const handleBuyOut = (lot: Lot) => {
    setSelectedLot(lot);
    setShowBuyOutModal(true);
  };
  
  const handleConfirmBuyOut = () => {
    if (selectedLot) {
      console.log('Confirming buy-out:', selectedLot);
      // In a real app, this would process the buy-out
      setShowBuyOutModal(false);
      setSelectedLot(null);
    }
  };
  
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Auction Lots</h1>
          <p className="text-gray-600">Browse and bid on our featured auction items</p>
        </div>
        
        {/* Product Grid - 2x3 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lots.map(lot => (
            <div key={lot.id} className="bg-white rounded-2xl border border-blue-100 overflow-hidden hover:shadow-lg transition-shadow duration-200 shadow-sm">
              {/* Product Image */}
              <div className="relative">
                <img 
                  src={lot.img} 
                  alt={lot.title} 
                  className="w-full h-48 object-cover"
                />
                {/* Lot ID Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full text-gray-700">
                    {lot.id}
                  </span>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-4 space-y-3">
                {/* Title */}
                <h3 className="font-semibold text-gray-900 text-lg line-clamp-2">
                  {lot.title}
                </h3>
                
                {/* Price */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Current bid</span>
                    <span className="font-semibold text-gray-900">{lot.currency} {lot.topBid.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Buy-out price</span>
                    <span className="font-semibold text-gray-900">{lot.currency} {lot.buyout.toLocaleString()}</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleBidNow(lot)}
                    className={cls(
                      "flex-1 py-2.5 px-4 rounded-xl font-medium text-sm transition-colors duration-200",
                      themeObj.primary,
                      "text-white hover:opacity-90"
                    )}
                  >
                    Bid Now
                  </button>
                  <button 
                    onClick={() => handleBuyOut(lot)}
                    className="flex-1 py-2.5 px-4 rounded-xl border border-blue-200 text-blue-700 font-medium text-sm hover:bg-blue-50 transition-colors duration-200"
                  >
                    Buy Out
                  </button>
                </div>
                
                {/* Additional Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-blue-100">
                  <span>Ends in 2h 15m</span>
                  <span>12 bidders</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className={cls(
            "px-6 py-3 rounded-xl font-medium transition-colors duration-200",
            themeObj.primary,
            "text-white hover:opacity-90"
          )}>
            Load More Items
          </button>
        </div>
      </div>
      
      {/* Bid Modal */}
      {showBidModal && selectedLot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-blue-100">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-blue-600">{selectedLot.id}</span>
                <h2 className="text-xl font-bold text-gray-900">Place Your Bid</h2>
              </div>
              <button 
                onClick={() => setShowBidModal(false)}
                className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {/* Product Image */}
            <div className="p-6">
              <img 
                src={selectedLot.img} 
                alt={selectedLot.title} 
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              
              {/* Product Details */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{selectedLot.title}</h3>
              
              {/* Auction Status */}
              <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Ends soon</span>
                </div>
                <div className="text-sm text-gray-600">
                  Reserve: {selectedLot.currency} {selectedLot.topBid.toLocaleString()}
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  Top bid: {selectedLot.currency} {selectedLot.topBid.toLocaleString()}
                </div>
              </div>
              
              {/* Bidding Section */}
              <div className="space-y-4">
                {/* Place Pre-Bid */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Place Pre-Bid
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                      {selectedLot.currency}
                    </span>
                    <input
                      type="number"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your bid amount"
                      min={selectedLot.topBid}
                    />
                  </div>
                </div>
                
                {/* Instant Buy-Out */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Instant Buy-Out
                  </label>
                  <button 
                    onClick={() => handleBuyOut(selectedLot)}
                    className="w-full flex items-center justify-between p-4 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">Pre Bid</span>
                    </div>
                    <span className="font-semibold">
                      Buy for {selectedLot.currency} {selectedLot.buyout.toLocaleString()}
                    </span>
                  </button>
                </div>
                
                {/* Escrow Information */}
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-700">
                    Pre-bids are locked via escrow. If outbid, your hold is instantly released.
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handlePlaceBid}
                    disabled={!bidAmount || parseFloat(bidAmount) <= selectedLot.topBid}
                    className={cls(
                      "flex-1 py-3 px-6 rounded-xl font-medium transition-colors duration-200",
                      bidAmount && parseFloat(bidAmount) > selectedLot.topBid
                        ? cls(themeObj.primary, "text-white hover:opacity-90")
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    )}
                  >
                    Place Bid
                  </button>
                  <button
                    onClick={() => setShowBidModal(false)}
                    className="flex-1 py-3 px-6 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Buy Out Modal */}
      {showBuyOutModal && selectedLot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-500">{selectedLot.id}</span>
                <h2 className="text-xl font-bold text-gray-900">Instant Buy-Out</h2>
              </div>
              <button 
                onClick={() => setShowBuyOutModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            {/* Product Image */}
            <div className="p-6">
              <img 
                src={selectedLot.img} 
                alt={selectedLot.title} 
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              
              {/* Product Details */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{selectedLot.title}</h3>
              
              {/* Auction Status */}
              <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Ends soon</span>
                </div>
                <div className="text-sm text-gray-600">
                  Reserve: {selectedLot.currency} {selectedLot.topBid.toLocaleString()}
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  Top bid: {selectedLot.currency} {selectedLot.topBid.toLocaleString()}
                </div>
              </div>
              
              {/* Buy Out Section */}
              <div className="space-y-4">
                {/* Buy Out Price Display */}
                <div className="text-center p-6 bg-green-50 rounded-xl border-2 border-green-200">
                  <div className="text-sm text-green-700 mb-2">Instant Buy-Out Price</div>
                  <div className="text-3xl font-bold text-green-800">
                    {selectedLot.currency} {selectedLot.buyout.toLocaleString()}
                  </div>
                  <div className="text-sm text-green-600 mt-1">
                    Secure this item immediately
                  </div>
                </div>
                
                {/* Current Bidding Info */}
                <div className="p-4 bg-blue-50 rounded-xl">
                  <div className="text-sm font-medium text-blue-900 mb-2">Current Auction Status</div>
                  <div className="space-y-1 text-sm text-blue-700">
                    <div className="flex justify-between">
                      <span>Current highest bid:</span>
                      <span className="font-semibold">{selectedLot.currency} {selectedLot.topBid.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Number of bidders:</span>
                      <span className="font-semibold">12 active bidders</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time remaining:</span>
                      <span className="font-semibold">2h 15m</span>
                    </div>
                  </div>
                </div>
                
                {/* Benefits of Buy Out */}
                <div className="p-4 bg-yellow-50 rounded-xl">
                  <div className="text-sm font-medium text-yellow-900 mb-2">Why Buy Out?</div>
                  <ul className="text-xs text-yellow-700 space-y-1">
                    <li>• Skip the bidding process entirely</li>
                    <li>• Guarantee you win the item</li>
                    <li>• Avoid potential bidding wars</li>
                    <li>• Secure immediate ownership</li>
                  </ul>
                </div>
                
                {/* Escrow Information */}
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-700">
                    Payment will be processed immediately via escrow. You'll receive confirmation and shipping details within minutes.
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleConfirmBuyOut}
                    className="flex-1 py-3 px-6 bg-green-500 hover:bg-green-600 text-white font-medium rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Confirm Buy-Out
                  </button>
                  <button
                    onClick={() => setShowBuyOutModal(false)}
                    className="flex-1 py-3 px-6 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// WhatsApp chat simulator (UX model)
function WhatsAppChat({ open, onClose, theme }: { open: boolean; onClose: () => void; theme: ThemeName }) {
  const themeObj = typeof theme === 'string' ? (themes[theme] || themes.emerald) : (themes[theme] || themes.emerald);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Type 'join' to start KYC · 'catalog' to browse · 'prebid LOT-001 2200' to pre-bid." }
  ]);
  const [input, setInput] = useState("");
  const boxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [messages]);
  
  if (!open) return null;
  
  const send = (t: string) => {
    if (!t) return;
    setMessages(m => [...m, { from: "me", text: t }]);
    setInput("");
    setTimeout(() => 
      setMessages(m => [...m, { from: "bot", text: "(demo) Escrow locked. You are leading pre-bid." }]), 
      500
    );
  };
  
  return (
    <div className="fixed right-4 bottom-4 z-50 w-full sm:w-[380px] rounded-2xl border bg-white shadow-2xl overflow-hidden">
      <div className={cls("h-12 text-white flex items-center justify-between px-3", themeObj.primary)}>
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4"/> WhatsApp
        </div>
        <button onClick={onClose} className="p-1 rounded-lg hover:bg-white/10">
          <X className="w-4 h-4"/>
        </button>
      </div>
      <div 
        ref={boxRef} 
        className="h-72 overflow-auto bg-[url('https://i.imgur.com/8Km9tLL.png')] bg-repeat p-3 space-y-2"
      >
        {messages.map((m, i) => (
          <div 
            key={i} 
            className={cls(
              "max-w-[85%] px-3 py-2 rounded-2xl text-sm", 
              m.from === "me" ? "ml-auto bg-[#DCF8C6]" : "bg-white border"
            )}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className="h-12 flex items-center gap-2 px-2">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyDown={(e) => e.key === 'Enter' && send(input)} 
          placeholder="Type a message" 
          className="flex-1 h-9 rounded-xl border px-3"
        />
        <button 
          onClick={() => send(input)} 
          className={cls("h-9 px-3 rounded-xl text-white", themeObj.primary)}
        >
          Send
        </button>
      </div>
    </div>
  );
}

// Main Auction Platform Component
export default function AuctionPlatform() {
  const [currentView, setCurrentView] = useState<'rules' | 'instagram' | 'core' | 'whatsapp'>('core');
  const [selectedTheme, setSelectedTheme] = useState<ThemeName>('emerald');
  const [instagramChatOpen, setInstagramChatOpen] = useState(false);
  const [whatsappChatOpen, setWhatsappChatOpen] = useState(false);

  const handleShare = () => {
    setInstagramChatOpen(true);
  };

  const handleWhatsAppShare = () => {
    setWhatsappChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-md border-b border-blue-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-sky-600 rounded-xl flex items-center justify-center shadow-md">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">BidChat - Auction Platform</h1>
            </div>
            
            {/* Theme Selector */}
            <div className="flex items-center">
              <select 
                value={selectedTheme} 
                onChange={(e) => setSelectedTheme(e.target.value as ThemeName)}
                className="px-4 py-2 border border-blue-200 rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
              >
                <option value="emerald">Emerald</option>
                <option value="blue">Blue</option>
                <option value="purple">Purple</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white/95 backdrop-blur-md border-b border-blue-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 py-3 h-12">
            {[
              { id: 'rules', label: 'Rules & Settings' },
              { id: 'instagram', label: 'Instagram Channel' },
              { id: 'core', label: 'Core App' },
              { id: 'whatsapp', label: 'WhatsApp Chat' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id as 'rules' | 'instagram' | 'core' | 'whatsapp')}
                className={`py-2 px-4 rounded-full font-medium text-sm transition-all duration-300 ${
                  currentView === item.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {currentView === 'rules' && <RulesView rules={sampleRules} />}
        {currentView === 'instagram' && <InstagramView lots={sampleLots} onShare={() => handleShare()} />}
        {currentView === 'core' && <CoreAppView lots={sampleLots} theme={selectedTheme} />}
        {currentView === 'whatsapp' && (
          <div className="p-4">
            <div className="rounded-2xl border p-4 bg-white mb-4">
              <div className="flex items-center gap-2 text-slate-600 text-sm mb-2">
                <MessageCircle className="w-4 h-4"/> WhatsApp Integration
              </div>
              <div className="text-xs text-slate-500 mb-4">
                WhatsApp Business API: messaging, payments, catalog sharing
              </div>
              <button 
                onClick={() => setWhatsappChatOpen(true)}
                className="px-4 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600"
              >
                Open WhatsApp Chat
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sampleLots.map(l => (
                <div key={l.id} className="rounded-2xl border overflow-hidden bg-white">
                  <img src={l.img} alt={l.title} className="w-full h-48 object-cover"/>
                  <div className="p-3 space-y-1">
                    <div className="text-xs text-slate-500">{l.id}</div>
                    <div className="font-medium line-clamp-1">{l.title}</div>
                    <div className="text-sm text-slate-600">Buy-out {l.currency} {l.buyout.toLocaleString()}</div>
                    <div className="pt-2">
                      <button 
                        onClick={() => handleWhatsAppShare()} 
                        className="w-full px-3 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600"
                      >
                        Share via WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Chat Modals */}
      <InstagramChat open={instagramChatOpen} onClose={() => setInstagramChatOpen(false)} />
      <WhatsAppChat open={whatsappChatOpen} onClose={() => setWhatsappChatOpen(false)} theme={selectedTheme} />
    </div>
  );
}