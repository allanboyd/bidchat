import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Shield, Users, CheckCircle, Star, ArrowRight, Play, Lock, CreditCard, BarChart3, Target, FileText, Globe } from 'lucide-react';

const LandingPage = ({ onGetStarted }: { onGetStarted: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pricingToggle, setPricingToggle] = useState('monthly');
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    const currentRefs = cardRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);


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
      avatar: "https://i.pravatar.cc/100?img=1"
    },
    {
      name: "Ahmed Hassan",
      role: "Collectibles Trader, Cairo",
      content: "The escrow system gives buyers confidence. I've never had a payment issue since switching to this platform.",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=2"
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
      
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#071952'}}>
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="ml-3 text-lg font-semibold" style={{color: '#071952'}}>BidChat</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-[#0B666A] text-sm font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-[#0B666A] text-sm font-medium transition-colors">How it Works</a>
              <a href="#pricing" className="text-[#0B666A] bg-gray-50 px-3 py-1.5 rounded-lg text-sm font-medium">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-[#0B666A] text-sm font-medium transition-colors">Testimonials</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={onGetStarted}
                className="text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
                style={{backgroundColor: '#071952'}}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#0B666A'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#071952'}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 transition-colors"
                style={{color: '#0B666A'}}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50 px-4 py-4 space-y-3">
              <a href="#features" className="text-gray-600 hover:text-[#0B666A] block px-3 py-2 text-sm font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-[#0B666A] block px-3 py-2 text-sm font-medium transition-colors">How it Works</a>
              <a href="#pricing" className="text-[#0B666A] bg-gray-50 block px-3 py-2 text-sm font-medium rounded-lg">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-[#0B666A] block px-3 py-2 text-sm font-medium transition-colors">Testimonials</a>
              <button
                onClick={onGetStarted}
                className="w-full text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                style={{backgroundColor: '#071952'}}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
</nav>


      {/* Hero Section */}
      <section className="pt-40 pb-20 relative" style={{backgroundColor: '#f8f9fa'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium mb-8" style={{backgroundColor: '#071952', color: 'white'}}>
              <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#97FEED'}}></div>
              Best Auction Platform
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{color: '#071952'}}>
              WhatsApp + Intelligence
              <span className="block mt-2 bg-gradient-to-r from-[#0B666A] to-[#35A29F] bg-clip-text text-transparent">
                Bidding Platform
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed" style={{color: '#071952'}}>
              Reimagining Auctions, Commerce & Payments with 
              <span className="font-semibold" style={{color: '#0B666A'}}> Conversational AI</span>. 
              The most widely adopted messaging platform meets intelligent auction technology.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={onGetStarted}
                className="text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center"
                style={{backgroundColor: '#071952'}}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#0B666A'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#071952'}
              >
                Start Bidding Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              <button className="bg-white border-2 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                      style={{borderColor: '#071952', color: '#071952'}}>
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Process Steps Visual */}
            <div className="mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto items-end">
                
                {/* Step 1 */}
                <div 
                  ref={(el) => { cardRefs.current[0] = el; }}
                  className={`group relative transition-all duration-700 transform ${
                    visibleCards[0] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: visibleCards[0] ? '0ms' : '0ms' }}
                >
                  {/* Floating Title - Left Side */}
                  <div className="absolute left-0 top-8 z-10 transform -translate-x-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-100">
                      <div className="text-sm font-bold tracking-wider mb-1" style={{color: '#071952'}}>STEP 1</div>
                      <h3 className="text-lg font-semibold" style={{color: '#071952'}}>Join via WhatsApp</h3>
                    </div>
                  </div>
                  
                  {/* Custom Bid Image */}
                  <div className="relative overflow-hidden rounded-2xl group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="/images/bid1.jpg" 
                      alt="WhatsApp bidding process" 
                      className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                    </div>
                    
                {/* Step 2 */}
                <div 
                  ref={(el) => { cardRefs.current[1] = el; }}
                  className={`group relative transition-all duration-700 transform ${
                    visibleCards[1] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: visibleCards[1] ? '200ms' : '0ms' }}
                >
                  {/* Floating Title - Top Center */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 z-10">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-100">
                      <div className="text-sm font-bold tracking-wider mb-1" style={{color: '#071952'}}>STEP 2</div>
                      <h3 className="text-lg font-semibold" style={{color: '#071952'}}>AI-guided verification</h3>
                    </div>
                        </div>
                        
                  {/* Custom Bid Image */}
                  <div className="relative overflow-hidden rounded-3xl group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="/images/bid2.jpg" 
                      alt="Verification process" 
                      className="w-full h-96 object-cover rounded-3xl shadow-xl"
                    />
                          </div>
                        </div>
                        
                {/* Step 3 */}
                <div 
                  ref={(el) => { cardRefs.current[2] = el; }}
                  className={`group relative transition-all duration-700 transform ${
                    visibleCards[2] 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: visibleCards[2] ? '400ms' : '0ms' }}
                >
                  {/* Floating Title - Right Side */}
                  <div className="absolute right-0 top-8 z-10 transform translate-x-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-100">
                      <div className="text-sm font-bold tracking-wider mb-1" style={{color: '#071952'}}>STEP 3</div>
                      <h3 className="text-lg font-semibold" style={{color: '#071952'}}>Start bidding & win</h3>
                      </div>
                    </div>
                  
                  {/* Custom Bid Image */}
                  <div className="relative overflow-hidden rounded-2xl group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="/images/bid3.jpg" 
                      alt="Bidding process" 
                      className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071952] via-[#0B666A] to-[#35A29F]"></div>
        
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-white/8 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                {/* Floating Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                  <div className="text-sm md:text-base text-white/90 font-medium">{stat.label}</div>
                  
                  {/* Decorative Element */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #071952 2px, transparent 2px), radial-gradient(circle at 75% 75%, #0B666A 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-8 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
              <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{backgroundColor: '#071952'}}></div>
              [BidChat Platform]
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#071952] to-[#0B666A] bg-clip-text text-transparent">
              How our platform makes your workflow
              </span>
              <span className="block mt-2" style={{color: '#35A29F'}}>easier</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything you need to run successful auctions, all integrated into WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Leading AI Models Card - Takes up more space */}
            <div className="lg:col-span-7 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              {/* Floating Background Elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-[#071952] to-[#0B666A] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-[#35A29F] to-[#97FEED] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4" style={{color: '#071952'}}>Leading AI Models to work with</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">Access and chat with leading closed and open-source AI models in one easy to use interface.</p>
                  </div>
                
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
                  <div className="bg-white px-6 py-3 rounded-xl flex items-center shadow-lg border border-gray-100">
                    <span className="text-sm font-medium" style={{color: '#071952'}}>WhatsApp</span>
                    <ArrowRight className="w-4 h-4 ml-3" style={{color: '#0B666A'}} />
                </div>
                  
                  <div className="flex space-x-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg" style={{backgroundColor: '#071952'}}>AI</div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg" style={{backgroundColor: '#0B666A'}}>ML</div>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg" style={{backgroundColor: '#97FEED', color: '#071952'}}>+</div>
                  </div>
                  
                  <div className="bg-white px-6 py-3 rounded-xl flex items-center shadow-lg border border-gray-100">
                    <span className="text-sm font-medium" style={{color: '#071952'}}>BidChat</span>
                    <ArrowRight className="w-4 h-4 ml-3" style={{color: '#0B666A'}} />
                  </div>
                </div>
              </div>
            </div>

            {/* Securely Connect Card - Smaller */}
            <div className="lg:col-span-5 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              {/* Floating Background Elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#35A29F] to-[#97FEED] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg" style={{background: 'linear-gradient(135deg, #071952 0%, #0B666A 100%)'}}>
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{color: '#071952'}}>Securely Connect your knowledge base</h3>
                  <p className="text-gray-600 leading-relaxed">Securely connect AI to your institutional data, creating a powerful AI-powered knowledge base for faculty and students.</p>
                </div>
                
                <div className="flex justify-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#071952] to-[#0B666A] rounded-lg flex items-center justify-center shadow-md">
                    <div className="w-4 h-4 bg-white rounded"></div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-[#0B666A] to-[#35A29F] rounded-lg flex items-center justify-center shadow-md">
                    <div className="w-4 h-4 bg-white rounded"></div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-[#35A29F] to-[#97FEED] rounded-lg flex items-center justify-center shadow-md">
                    <div className="w-4 h-4 bg-white rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Access Prompt Library Card - Full width below */}
            <div className="lg:col-span-12 bg-gradient-to-r from-white to-gray-50 rounded-3xl p-10 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 mt-8">
              {/* Floating Background Elements */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-[#071952] to-[#0B666A] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-[#35A29F] to-[#97FEED] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4" style={{color: '#071952'}}>Access prompt library & smart tasks</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">Leverage the Prompt Library and Smart Tasks for collaborative projects and streamlined AI adoption across campus.</p>
                    
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-md border border-gray-100" style={{color: '#071952'}}>General</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-md border border-gray-100" style={{color: '#071952'}}>Teaching</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-md border border-gray-100" style={{color: '#071952'}}>Students</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-md border border-gray-100" style={{color: '#071952'}}>Admin</span>
                      <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-md border border-gray-100" style={{color: '#071952'}}>Research</span>
                    </div>
                </div>
                
                  <div className="flex-shrink-0 w-full lg:w-96">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="What should I do..." 
                        className="w-full px-6 py-4 pr-14 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:border-transparent text-lg shadow-lg"
                        style={{'--tw-ring-color': '#071952'} as React.CSSProperties}
                      />
                      <button 
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-xl shadow-lg"
                        style={{background: 'linear-gradient(135deg, #071952 0%, #0B666A 100%)'}}
                      >
                        <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                    </div>
                  </div>
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
            <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{backgroundColor: '#f3f4f6', color: '#0B666A'}}>
              [BidChat Features]
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#071952'}}>
              Boost your finances with
              <span style={{color: '#0B666A'}}> BidChat</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, secure, and intelligent auction platform designed for emerging markets
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Features with Images */}
            <div className="lg:col-span-7">
              <div className="space-y-8">
                <div className="flex items-start space-x-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #071952 0%, #0B666A 100%)'}}>
                      <Users className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3" style={{color: '#071952'}}>Flexible Data Transfer</h3>
                    <p className="text-gray-600 mb-4">Seamless integration with existing systems and multiple payment methods</p>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #0B666A 0%, #35A29F 100%)'}}>
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3" style={{color: '#071952'}}>Powerful Reporting Tools</h3>
                    <p className="text-gray-600 mb-4">Real-time analytics and insights to optimize your auction performance</p>
                    <div className="flex space-x-1">
                      <div className="w-12 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-8 h-full bg-gradient-to-r from-[#071952] to-[#0B666A] rounded-full"></div>
                      </div>
                      <div className="w-16 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-12 h-full bg-gradient-to-r from-[#0B666A] to-[#35A29F] rounded-full"></div>
                      </div>
                      <div className="w-20 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-16 h-full bg-gradient-to-r from-[#35A29F] to-[#97FEED] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #35A29F 0%, #97FEED 100%)'}}>
                      <Target className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3" style={{color: '#071952'}}>Personalized Goals</h3>
                    <p className="text-gray-600 mb-4">AI-driven recommendations based on your bidding history and preferences</p>
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#071952] to-[#0B666A] flex items-center justify-center text-white font-bold text-sm">85%</div>
                        <div className="text-xs text-gray-500 mt-1">Success</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#0B666A] to-[#35A29F] flex items-center justify-center text-white font-bold text-sm">24h</div>
                        <div className="text-xs text-gray-500 mt-1">Avg Time</div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#35A29F] to-[#97FEED] flex items-center justify-center text-white font-bold text-sm">$2.4K</div>
                        <div className="text-xs text-gray-500 mt-1">Avg Win</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #97FEED 0%, #071952 100%)'}}>
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3" style={{color: '#071952'}}>Secure Wallet Access</h3>
                    <p className="text-gray-600 mb-4">Bank-grade security with multi-currency support and escrow protection</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded flex items-center justify-center">
                          <Lock className="w-3 h-3 text-white" />
                        </div>
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-600 rounded flex items-center justify-center">
                          <Shield className="w-3 h-3 text-white" />
                        </div>
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-600 rounded flex items-center justify-center">
                          <CreditCard className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-600 ml-2">Multi-layer Security</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main Visual Card */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  {/* Custom Image Background */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <img 
                      src="/images/bid2.jpg" 
                      alt="Bidding process" 
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-6" style={{color: '#071952'}}>Ready to transform your auction experience?</h4>
                    
                    {/* Visual Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <div className="text-2xl font-bold mb-1" style={{color: '#071952'}}>98%</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                        <div className="text-2xl font-bold mb-1" style={{color: '#0B666A'}}>24/7</div>
                        <div className="text-sm text-gray-600">Support</div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                        <span className="text-gray-700 font-medium">WhatsApp Integration</span>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                        <span className="text-gray-700 font-medium">AI-Powered Bidding</span>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                        <span className="text-gray-700 font-medium">Real-time Auctions</span>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                        <span className="text-gray-700 font-medium">Secure Payments</span>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={onGetStarted}
                      className="w-full text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      style={{background: `linear-gradient(135deg, #071952 0%, #0B666A 100%)`}}
                    >
                      Get Started Now
                    </button>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-[#35A29F] to-[#97FEED] rounded-2xl flex items-center justify-center shadow-lg opacity-80">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#071952] to-[#0B666A] rounded-xl flex items-center justify-center shadow-lg opacity-80">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#071952]/10 to-[#0B666A]/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#35A29F]/10 to-[#97FEED]/10 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-8 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
              <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{backgroundColor: '#071952'}}></div>
              [Getting Started]
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#071952] to-[#0B666A] bg-clip-text text-transparent">
              Get started in 4 simple steps
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From joining to winning your first auction, we've made it incredibly simple
            </p>
          </div>

          {/* Modern Step Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#071952] via-[#0B666A] to-[#35A29F] opacity-30"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Step Card */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group-hover:scale-105 relative overflow-hidden">
                    {/* Floating Background Element */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#071952] to-[#0B666A] rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      {/* Step Number & Icon */}
                      <div className="flex items-center justify-center mb-6">
                        <div className="relative">
                          <div className="w-20 h-20 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300" 
                               style={{background: `linear-gradient(135deg, ${'#071952'} 0%, ${'#0B666A'} 100%)`}}>
                    {step.step}
                  </div>
                          <div className="absolute -top-2 -right-2 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg bg-white border-2 border-gray-100 group-hover:scale-110 transition-transform duration-300" 
                               style={{borderColor: '#35A29F'}}>
                            <div className="text-lg" style={{color: '#35A29F'}}>{step.icon}</div>
                  </div>
                </div>
              </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-xl font-bold mb-4" style={{color: '#071952'}}>{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                        
                        {/* Progress Indicator */}
                        <div className="flex justify-center">
                          <div className="flex space-x-1">
                            {processSteps.map((_, dotIndex) => (
                              <div 
                                key={dotIndex}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  dotIndex <= index 
                                    ? 'w-8' 
                                    : 'bg-gray-200'
                                }`}
                                style={{
                                  backgroundColor: dotIndex <= index ? '#35A29F' : '#e5e7eb'
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Connector (Desktop Only) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-2 w-4 h-4 transform rotate-45 z-20" 
                         style={{backgroundColor: '#35A29F'}}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-left">
                <div className="text-sm font-medium text-gray-500 mb-1">Ready to get started?</div>
                <div className="text-lg font-bold" style={{color: '#071952'}}>Join thousands of successful bidders</div>
              </div>
              <button
                onClick={onGetStarted}
                className="px-8 py-3 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{background: 'linear-gradient(135deg, #071952 0%, #0B666A 100%)'}}
              >
                Start Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Risk, Privacy & Auction Protocols Section */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 right-16 w-24 h-24 bg-gradient-to-br from-[#071952]/10 to-[#0B666A]/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-16 left-16 w-32 h-32 bg-gradient-to-br from-[#35A29F]/10 to-[#97FEED]/10 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-8 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
              <Shield className="w-4 h-4 mr-3" style={{color: '#071952'}} />
              [Security & Compliance]
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#071952] to-[#0B666A] bg-clip-text text-transparent">
                Risk, Privacy & Auction Protocols
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade security and fairness protocols ensuring transparent, secure, and compliant auctions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Security Features */}
            <div className="space-y-8">
              {/* Fairness */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #071952 0%, #0B666A 100%)'}}>
                      <Target className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4" style={{color: '#071952'}}>Fairness Protocols</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Synchronized server time</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Anti-sniping extension</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Sealed pre-bids not revealed</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Masked bidder IDs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Anti-collusion */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #0B666A 0%, #35A29F 100%)'}}>
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4" style={{color: '#071952'}}>Anti-collusion Systems</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Graph analysis for shared devices/IPs</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Off-platform coordination signals</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AML/CFT */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #35A29F 0%, #97FEED 100%)'}}>
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4" style={{color: '#071952'}}>AML/CFT Compliance</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Watchlist screening</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">SAR thresholds</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Source-of-funds checks for high-value lots</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Privacy & Controls */}
            <div className="space-y-8">
              {/* Privacy */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #97FEED 0%, #071952 100%)'}}>
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4" style={{color: '#071952'}}>Privacy Protection</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Data minimization</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Encryption at rest (AES-256)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Encryption in transit (TLS 1.2+)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Field-level encryption for IDs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclosures */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #071952 0%, #97FEED 100%)'}}>
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4" style={{color: '#071952'}}>Transparent Disclosures</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Clear terms for extensions</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Reserve not met notifications</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Bid withdrawal policy</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Transparent fee schedule</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Jurisdiction Controls */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{background: 'linear-gradient(135deg, #0B666A 0%, #97FEED 100%)'}}>
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4" style={{color: '#071952'}}>Jurisdiction Controls</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Country allow/block lists</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#35A29F'}}></div>
                        <span className="text-gray-700">Age/sector restrictions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6" style={{color: '#35A29F'}} />
                <span className="font-semibold" style={{color: '#071952'}}>Bank-Grade Security</span>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex items-center space-x-3">
                <Lock className="w-6 h-6" style={{color: '#35A29F'}} />
                <span className="font-semibold" style={{color: '#071952'}}>Compliance Ready</span>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6" style={{color: '#35A29F'}} />
                <span className="font-semibold" style={{color: '#071952'}}>Global Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Visual Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#071952]/10 to-[#0B666A]/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[#35A29F]/10 to-[#97FEED]/10 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-8 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
              <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{backgroundColor: '#071952'}}></div>
              [BidChat Pricing]
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#071952] to-[#0B666A] bg-clip-text text-transparent">
                Simple and transparent
              </span>
              <span className="block mt-2" style={{color: '#35A29F'}}>pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose the plan that fits your needs. No hidden fees, no surprises.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
              <button
                onClick={() => setPricingToggle('monthly')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  pricingToggle === 'monthly' 
                    ? 'text-white shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={pricingToggle === 'monthly' ? {background: 'linear-gradient(135deg, #071952 0%, #0B666A 100%)'} : {}}
              >
                Monthly
              </button>
              <button
                onClick={() => setPricingToggle('annually')}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  pricingToggle === 'annually' 
                    ? 'text-white shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={pricingToggle === 'annually' ? {background: 'linear-gradient(135deg, #071952 0%, #0B666A 100%)'} : {}}
              >
                Annually
                <span className="ml-2 px-2 py-1 text-xs rounded-full bg-white/20">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 group hover:scale-105 transition-all duration-500 ${
                  plan.popular 
                    ? 'text-white shadow-2xl' 
                    : 'bg-white border border-gray-100 shadow-lg hover:shadow-2xl'
                }`}
                style={plan.popular ? {background: `linear-gradient(135deg, #071952 0%, #0B666A 100%)`} : {}}
              >
                {/* Floating Background Elements */}
                <div className={`absolute inset-0 rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500 ${
                  plan.popular ? 'bg-white' : 'bg-gradient-to-br from-[#071952] to-[#0B666A]'
                }`}></div>

                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#35A29F] to-[#97FEED] px-6 py-2 rounded-full text-sm font-semibold text-white shadow-lg">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                {/* Visual Indicator */}
                <div className="absolute top-6 right-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                    plan.popular 
                      ? 'bg-white/20' 
                      : 'bg-gradient-to-r from-[#071952] to-[#0B666A]'
                  }`}>
                    {plan.popular ? (
                      <Star className="w-6 h-6 text-white" />
                    ) : (
                      <Target className="w-6 h-6 text-white" />
                    )}
                  </div>
                </div>
                
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
                    <li key={featureIndex} className="flex items-center bg-white/10 rounded-lg p-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 ${
                        plan.popular ? 'bg-white/20' : 'bg-gradient-to-r from-green-400 to-green-600'
                      }`}>
                        <CheckCircle className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-white'}`} />
                      </div>
                      <span className={`font-medium ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onGetStarted}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-white hover:bg-gray-50'
                      : 'text-white'
                  }`}
                  style={plan.popular ? {color: '#0B666A'} : {backgroundColor: '#0B666A'}}
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{backgroundColor: '#f3f4f6', color: '#0B666A'}}>
            [Ready to Start?]
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#071952'}}>
            Ready to revolutionize your auction experience?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the future of intelligent bidding. Start your journey with BidChat today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetStarted}
              className="text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
              style={{background: `linear-gradient(to right, ${'#071952'}, ${'#0B666A'})`}}
            >
              Start Bidding Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300" 
                    style={{borderColor: '#071952', color: '#071952'}}
                    onMouseEnter={(e) => {(e.target as HTMLElement).style.backgroundColor = '#071952'; (e.target as HTMLElement).style.color = 'white'}}
                    onMouseLeave={(e) => {(e.target as HTMLElement).style.backgroundColor = 'transparent'; (e.target as HTMLElement).style.color = '#071952'}}>
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" 
                     style={{background: `linear-gradient(to bottom right, ${'#071952'}, ${'#0B666A'})`}}>
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold" style={{color: '#071952'}}>BidChat</span>
              </div>
              <p className="text-gray-600">
                The future of intelligent auction platforms, powered by WhatsApp and AI.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 transition-colors hover:text-[#0B666A]">Features</a></li>
                <li><a href="#" className="text-gray-600 transition-colors hover:text-[#0B666A]">Pricing</a></li>
                <li><a href="#" className="text-gray-600 transition-colors hover:text-[#0B666A]">API</a></li>
                <li><a href="#" className="text-gray-600 transition-colors hover:text-[#0B666A]">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 transition-colors hover:text-[#0B666A]">About</a></li>
                <li><a href="#" className="text-gray-600 transition-colors hover:text-[#0B666A]">Blog</a></li>
                <li><a href="#" className="text-gray-600 transition-colors hover:text-[#0B666A]">Careers</a></li>
                <li><a href="#" className="text-gray-600 transition-colors hover:text-[#0B666A]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 transition-colors hover:text-[#0B666A]">Help Center</a></li>
                <li><a href="#" className="text-gray-600 transition-colors hover:text-[#0B666A]">Documentation</a></li>
                <li><a href="#" className="text-gray-600 transition-colors hover:text-[#0B666A]">Status</a></li>
                <li><a href="#" className="text-gray-600 transition-colors hover:text-[#0B666A]">Security</a></li>
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
