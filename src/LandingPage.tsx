import { useState } from 'react';
import { MessageCircle, Shield, Users, CheckCircle, Star, ArrowRight, Play, Lock, Smartphone, CreditCard, BarChart3, Target } from 'lucide-react';

const LandingPage = ({ onGetStarted }: { onGetStarted: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pricingToggle, setPricingToggle] = useState('monthly');


  const stats = [
    { number: "2.5B+", label: "WhatsApp Users" },
    { number: "70-80%", label: "Market Penetration" },
    { number: "15%", label: "Auction Growth CAGR" },
    { number: "$100B+", label: "African E-commerce by 2030" }
  ];

  const pricingPlans = [
    {
      name: "Basic Plan",
      price: { monthly: "$29", annually: "$290" },
      description: "Perfect for individual sellers",
      features: [
        "Up to 10 lots per month",
        "Basic WhatsApp integration",
        "Standard escrow protection",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Pro Plan",
      price: { monthly: "$99", annually: "$990" },
      description: "For growing businesses",
      features: [
        "Unlimited lots",
        "Advanced AI recommendations",
        "Multi-currency wallets",
        "Priority support",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise Plan",
      price: { monthly: "$299", annually: "$2,990" },
      description: "For large organizations",
      features: [
        "White-label solution",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced compliance tools",
        "API access"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Art Dealer, Lagos",
      content: "The WhatsApp integration made it so easy for my clients to bid. Sales increased by 300% in just 3 months.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Ahmed Hassan",
      role: "Collectibles Trader, Cairo",
      content: "The escrow system gives buyers confidence. I've never had a payment issue since switching to this platform.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Join via WhatsApp",
      description: "Simply message us to start. No app download required.",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      step: "02", 
      title: "Complete KYC",
      description: "AI-guided verification process. Upload ID, verify identity.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Fund Your Wallet",
      description: "Deposit guarantee funds. Multi-currency support.",
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Start Bidding",
      description: "Browse catalog, place pre-bids, or buy instantly.",
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-5xl">
  <div className="bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-blue-100/50 px-6 py-4">
    <div className="flex justify-between items-center h-12">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-sky-600 rounded-xl flex items-center justify-center shadow-md">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <span className="ml-3 text-xl font-bold text-gray-900">BidChat</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-1">
        <a href="#features" className="text-gray-600 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-blue-50">Features</a>
        <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-blue-50">How it Works</a>
        <a href="#pricing" className="text-blue-600 bg-blue-50 px-4 py-2 text-sm font-medium rounded-full">Pricing</a>
        <a href="#testimonials" className="text-gray-600 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-blue-50">Testimonials</a>
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <button
          onClick={onGetStarted}
          className="bg-gradient-to-r from-blue-600 to-sky-600 text-white px-6 py-2.5 rounded-full hover:from-blue-700 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
        >
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile menu */}
  {isMenuOpen && (
    <div className="md:hidden mt-4">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100/50 px-4 py-4 space-y-2">
        <a href="#features" className="text-gray-600 hover:text-blue-600 block px-4 py-3 text-base font-medium rounded-xl hover:bg-blue-50 transition-colors">Features</a>
        <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 block px-4 py-3 text-base font-medium rounded-xl hover:bg-blue-50 transition-colors">How it Works</a>
        <a href="#pricing" className="text-blue-600 bg-blue-50 block px-4 py-3 text-base font-medium rounded-xl">Pricing</a>
        <a href="#testimonials" className="text-gray-600 hover:text-blue-600 block px-4 py-3 text-base font-medium rounded-xl hover:bg-blue-50 transition-colors">Testimonials</a>
        <button
          onClick={onGetStarted}
          className="w-full bg-gradient-to-r from-blue-600 to-sky-600 text-white px-4 py-3 rounded-xl hover:from-blue-700 hover:to-sky-700 transition-all duration-300 font-medium"
        >
          Get Started
        </button>
      </div>
    </div>
  )}
</nav>


      {/* Hero Section */}
      <section className="mt-16 pt-20 pb-16 bg-gradient-to-r from-blue-50 via-sky-50 to-blue-100 rounded-3xl mx-4 relative overflow-hidden">
        {/* Dotted Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #3B82F6 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              Best Auction Platform
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              WhatsApp + Intelligence
              <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent block">Bidding Platform</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Reimagining Auctions, Commerce & Payments with Conversational AI. 
              The most widely adopted messaging platform meets intelligent auction technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onGetStarted}
                className="bg-gradient-to-r from-blue-600 to-sky-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-sky-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Bidding Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-blue-200 text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-blue-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Auction Experience</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Real-time bidding via WhatsApp</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                      <span className="text-gray-700">Guaranteed escrow protection</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">AI-powered recommendations</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6 text-center border border-blue-100">
                  <Smartphone className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700">WhatsApp Interface Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#B2B0E8] to-[#7A85C1] mx-4 rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              [BidChat Platform]
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A80] mb-4">
              How our platform makes your workflow
              <span className="text-[#3B38A0]"> easier</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run successful auctions, all integrated into WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Leading AI Models Card */}
            <div className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle, #8B5CF6 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Leading AI Models to work with</h3>
                    <p className="text-gray-600 text-sm">Access and chat with leading closed and open-source AI models in one easy to use interface.</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-[#1A2A80] text-white px-4 py-2 rounded-lg flex items-center">
                    <span className="text-sm font-medium">WhatsApp</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-[#3B38A0] rounded-full flex items-center justify-center text-white text-xs font-bold">AI</div>
                    <div className="w-8 h-8 bg-[#7A85C1] rounded-full flex items-center justify-center text-white text-xs font-bold">ML</div>
                    <div className="w-8 h-8 bg-[#B2B0E8] rounded-full flex items-center justify-center text-white text-xs font-bold">+</div>
                  </div>
                  <div className="bg-[#1A2A80] text-white px-4 py-2 rounded-lg flex items-center">
                    <span className="text-sm font-medium">BidChat</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Securely Connect Card */}
            <div className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle, #8B5CF6 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#1A2A80] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Securely Connect your knowledge base</h3>
                  <p className="text-gray-600 text-sm">Securely connect AI to your institutional data, creating a powerful AI-powered knowledge base for faculty and students.</p>
                </div>
                <div className="flex justify-center space-x-2">
                  <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-500 rounded"></div>
                  </div>
                  <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-500 rounded"></div>
                  </div>
                  <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
                    <div className="w-3 h-3 bg-gray-500 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Access Prompt Library Card */}
            <div className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle, #8B5CF6 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Access prompt library & smart tasks</h3>
                <p className="text-gray-600 text-sm mb-6">Leverage the Prompt Library and Smart Tasks for collaborative projects and streamlined AI adoption across campus.</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">General</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">Teaching</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">Students</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">Admin</span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">Research</span>
                </div>
                
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="What should I do..." 
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A2A80] focus:border-transparent"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#1A2A80] text-white p-2 rounded-lg">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              [BidChat Features]
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A80] mb-4">
              Boost your finances with
              <span className="text-[#3B38A0]"> BidChat</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, secure, and intelligent auction platform designed for emerging markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#1A2A80] rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Data Transfer</h3>
                    <p className="text-gray-600">Seamless integration with existing systems and multiple payment methods</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#3B38A0] rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Powerful Reporting Tools</h3>
                    <p className="text-gray-600">Real-time analytics and insights to optimize your auction performance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#7A85C1] rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Goals</h3>
                    <p className="text-gray-600">AI-driven recommendations based on your bidding history and preferences</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#B2B0E8] rounded-lg flex items-center justify-center">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Wallet Access</h3>
                    <p className="text-gray-600">Bank-grade security with multi-currency support and escrow protection</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle, #8B5CF6 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Ready to transform your financial management?</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">20+ Integrations</span>
                    <CheckCircle className="w-5 h-5 text-[#1A2A80]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Team Collaboration</span>
                    <CheckCircle className="w-5 h-5 text-[#3B38A0]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Real-time Reports</span>
                    <CheckCircle className="w-5 h-5 text-[#7A85C1]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Budget Tracking</span>
                    <CheckCircle className="w-5 h-5 text-[#B2B0E8]" />
                  </div>
                </div>
                <button
                  onClick={onGetStarted}
                  className="w-full mt-6 bg-gradient-to-r from-[#1A2A80] to-[#3B38A0] text-white py-3 rounded-lg font-semibold hover:from-[#3B38A0] hover:to-[#7A85C1] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              [Getting Started]
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A80] mb-4">
              Get started in 4 simple steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From joining to winning your first auction, we've made it incredibly simple
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1A2A80] to-[#3B38A0] text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#B2B0E8] rounded-full flex items-center justify-center shadow-md">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              [BidChat Pricing]
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A80] mb-4">
              Simple and transparent
              <span className="text-[#3B38A0]"> pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your needs. No hidden fees, no surprises.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setPricingToggle('monthly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pricingToggle === 'monthly' 
                    ? 'bg-[#1A2A80] text-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPricingToggle('annually')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pricingToggle === 'annually' 
                    ? 'bg-[#1A2A80] text-white shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annually
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-[#1A2A80] to-[#3B38A0] text-white shadow-2xl scale-105' 
                    : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#B2B0E8] text-[#1A2A80] px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mb-4 ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {pricingToggle === 'monthly' ? plan.price.monthly : plan.price.annually}
                    </span>
                    <span className={`ml-2 ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                      /{pricingToggle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className={`w-5 h-5 mr-3 ${plan.popular ? 'text-green-300' : 'text-green-500'}`} />
                      <span className={plan.popular ? 'text-purple-100' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onGetStarted}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-white text-purple-600 hover:bg-purple-50'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What our clients are saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied users who have transformed their auction experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            [Ready to Start?]
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A80] mb-4">
            Ready to revolutionize your auction experience?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the future of intelligent bidding. Start your journey with BidChat today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-[#1A2A80] to-[#3B38A0] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-[#3B38A0] hover:to-[#7A85C1] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Start Bidding Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-[#1A2A80] text-[#1A2A80] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1A2A80] hover:text-white transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#1A2A80] to-[#3B38A0] rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">BidChat</span>
              </div>
              <p className="text-gray-600">
                The future of intelligent auction platforms, powered by WhatsApp and AI.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#1A2A80] transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#1A2A80] transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#1A2A80] transition-colors">API</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#1A2A80] transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#1A2A80] transition-colors">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#1A2A80] transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#1A2A80] transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#1A2A80] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#1A2A80] transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#1A2A80] transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#1A2A80] transition-colors">Status</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#1A2A80] transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 BidChat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
