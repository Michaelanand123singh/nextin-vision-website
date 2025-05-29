import { 
  Search, 
  TrendingUp, 
  BarChart2, 
  Users, 
  DollarSign, 
  MessageSquare,
  Film,
  PenTool,
  Share2,
  ShoppingCart
} from 'lucide-react';

export const digitalMarketingData = {
  campaigns: [
    {
      id: 'dm1',
      title: 'E-Commerce SEO Campaign',
      client: 'Minuto Grocers',
      description: '360° SEO strategy for grocery delivery platform resulting in first-page rankings for 25+ high-value keywords',
      services: ['SEO', 'Content Marketing', 'Technical SEO'],
      metrics: {
        organicTraffic: '+320%',
        keywordRankings: '25+ top 3 positions',
        conversionRate: '+18%',
        timeframe: '6 months'
      },
      category: 'SEO',
      image: '/images/seo-minuto.png',
      url: 'https://minuto-grocersy-app.vercel.app/',
      icon: Search,
      featured: true
    },
    {
      id: 'dm2',
      title: 'Social Media Growth',
      client: 'Staylon Beauty',
      description: 'Instagram & TikTok growth strategy that increased engagement and follower base',
      services: ['Social Media Management', 'Influencer Marketing', 'Content Creation'],
      metrics: {
        followers: '+15K',
        engagementRate: '8.2%',
        reach: '2.1M monthly',
        timeframe: '3 months'
      },
      category: 'Social Media',
      image: '/images/staylon-social.png',
      url: 'https://staylon-beauty.vercel.app',
      icon: Share2,
      featured: true
    },
    {
      id: 'dm3',
      title: 'PPC Lead Generation',
      client: 'Tesod Technology',
      description: 'Google Ads campaign targeting B2B tech decision makers with optimized landing pages',
      services: ['PPC Management', 'Conversion Rate Optimization', 'Landing Page Design'],
      metrics: {
        cpa: '₹1200',
        leads: '380+',
        roas: '5.8x',
        timeframe: '4 months'
      },
      category: 'PPC',
      image: '/images/tesod-ads.png',
      url: 'https://tesod-technology.vercel.app',
      icon: DollarSign,
      featured: true
    },
    {
      id: 'dm4',
      title: 'Content Marketing',
      client: 'DesiQnA Education',
      description: 'Blog content strategy that established authority in competitive exam niche',
      services: ['Content Strategy', 'Blog Writing', 'Content Distribution'],
      metrics: {
        articles: '85+',
        backlinks: '420+',
        traffic: '+450%',
        timeframe: '8 months'
      },
      category: 'Content Marketing',
      image: '/images/desiqna-content.png',
      url: 'https://training.desiqna.in/',
      icon: PenTool,
      featured: false
    },
    {
      id: 'dm5',
      title: 'Video Marketing',
      client: '21Sec News',
      description: 'YouTube strategy that grew channel to 50K+ subscribers with viral explainer videos',
      services: ['Video Production', 'YouTube SEO', 'Thumbnail Design'],
      metrics: {
        subscribers: '52K+',
        watchHours: '120K+',
        ctr: '9.8%',
        timeframe: '1 year'
      },
      category: 'Video Marketing',
      image: '/images/21sec-video.png',
      url: 'https://21sec.in/',
      icon: Film,
      featured: false
    },
    {
      id: 'dm6',
      title: 'Local SEO',
      client: 'Sanjay Catering',
      description: 'Local search domination strategy for catering business in Delhi NCR',
      services: ['Google My Business', 'Local Citations', 'Review Management'],
      metrics: {
        mapPackRankings: '1st position',
        calls: '80+/month',
        reviews: '120+ 5-star',
        timeframe: '5 months'
      },
      category: 'Local SEO',
      image: '/images/sanjay-local.png',
      url: 'https://sanjaycatering.com/',
      icon: Search,
      featured: false
    }
  ],
  stats: [
    { icon: TrendingUp, title: "Client Growth", value: "142%", description: "Average YoY increase for clients" },
    { icon: BarChart2, title: "ROI Delivered", value: "8.3x", description: "Average return on ad spend" },
    { icon: Users, title: "Audience Reached", value: "15M+", description: "Across all campaigns" },
    { icon: DollarSign, title: "Revenue Generated", value: "₹4.2Cr+", description: "For clients in 2023" }
  ],
  services: [
    {
      title: "Search Engine Optimization",
      icon: Search,
      description: "Comprehensive on-page, technical and off-page SEO strategies",
      highlights: [
        "Keyword research & strategy",
        "Technical audits & fixes",
        "Content optimization",
        "Link building campaigns"
      ]
    },
    {
      title: "Social Media Marketing",
      icon: Share2,
      description: "Platform-specific strategies for engagement and conversions",
      highlights: [
        "Content calendar development",
        "Community management",
        "Influencer collaborations",
        "Paid social campaigns"
      ]
    },
    {
      title: "PPC Advertising",
      icon: DollarSign,
      description: "Data-driven paid campaigns across platforms",
      highlights: [
        "Google Ads management",
        "Meta advertising",
        "LinkedIn B2B campaigns",
        "Conversion tracking"
      ]
    },
    {
      title: "Content Marketing",
      icon: PenTool,
      description: "Strategic content that ranks and converts",
      highlights: [
        "Blog content strategy",
        "SEO-optimized writing",
        "Content distribution",
        "Performance tracking"
      ]
    }
  ],
  testimonials: [
    {
      quote: "Our organic traffic grew by 320% in just 6 months, with 25+ keywords ranking in top 3 positions.",
      author: "Minuto Grocers Team",
      role: "E-Commerce Platform"
    },
    {
      quote: "The social media strategy delivered 15K engaged followers and 2.1M monthly reach on Instagram.",
      author: "Staylon Beauty",
      role: "Cosmetics Brand"
    },
    {
      quote: "Our PPC campaigns achieved 5.8x ROAS with 380+ qualified leads in the tech sector.",
      author: "Tesod Technology",
      role: "B2B SaaS Company"
    }
  ]
};

// Export the data in the format expected by Portfolio.jsx
export const marketingData = digitalMarketingData.campaigns;

// Extract unique categories from the campaigns
export const marketingCategories = [
  'All',
  ...new Set(digitalMarketingData.campaigns.map(campaign => campaign.category))
];