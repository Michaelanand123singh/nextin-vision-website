import { 
  Bot, 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Users, 
  BarChart3, 
  MessageCircle,
  Workflow,
  Database,
  Cpu,
  Network,
  Target,
  TrendingUp,
  Code,
  Monitor,
  Smartphone,
  Cloud,
  Settings,
  Award,
  Clock,
  Star,
  Terminal,
  User,
  LineChartIcon,
  DollarSign
} from 'lucide-react';

export const aiAgentsData = {
  stats: [
    { label: 'AI Agents Deployed', value: '50+', icon: Bot },
    { label: 'Automation Processes', value: '200+', icon: Workflow },
    { label: 'Business Hours Saved', value: '10K+', icon: Clock },
    { label: 'Client Satisfaction', value: '98%', icon: Star }
  ],
  items: [
    {
      id: 'ai1',
      title: 'DevMarket - AI-Powered Developer Marketplace',
      description: 'AI-enabled marketplace platform that helps developers showcase their skills and connect with clients. Features intelligent matching algorithms and automated project management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML', 'OpenAI API', 'Stripe'],
      metrics: { 
        users: '5K+', 
        projects: '500+', 
        aiMatches: '2K+', 
        satisfaction: '95%' 
      },
      category: 'AI Marketplace',
      image: '/images/devmarket.png',
      url: 'https://devmarket.in/',
      icon: Bot,
      featured: true,
      aiFeatures: [
        'Intelligent project matching',
        'Automated client communication',
        'AI-powered skill assessment',
        'Smart pricing recommendations'
      ]
    },
    {
      id: 'ai2',
      title: 'CURK - AI Business Intelligence Platform',
      description: 'Advanced AI-powered business intelligence platform that provides real-time analytics, automated reporting, and intelligent insights for enterprise decision-making.',
      technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'Docker'],
      metrics: { 
        dataPoints: '1M+', 
        reports: '10K+', 
        accuracy: '99.2%', 
        uptime: '99.9%' 
      },
      category: 'AI Analytics',
      image: '/images/curk.png',
      url: 'https://curk.in/login',
      icon: Brain,
      featured: true,
      aiFeatures: [
        'Real-time data processing',
        'Automated report generation',
        'Predictive analytics',
        'Intelligent alerting system'
      ],
      credentials: {
        email: 'Nitish@gmail.com',
        password: 'Nitish@#12345'
      }
    },
    {
      id: 'ai3',
      title: 'AnalyzeSites - AI Website Analyzer',
      description: 'Comprehensive AI-powered website analysis tool that provides detailed insights on performance, SEO, accessibility, and user experience with automated recommendations.',
      technologies: ['Next.js', 'Python', 'AI/ML', 'Web Scraping', 'Analytics API'],
      metrics: { 
        sitesAnalyzed: '50K+', 
        accuracy: '97%', 
        recommendations: '100K+', 
        users: '15K+' 
      },
      category: 'AI Analytics',
      image: '/images/analyzesites.png',
      url: 'https://www.analyzesites.com/',
      icon: BarChart3,
      featured: true,
      aiFeatures: [
        'Automated website scanning',
        'AI-powered SEO analysis',
        'Performance optimization suggestions',
        'Competitive analysis'
      ]
    },
    {
      id: 'ai4',
      title: 'CatalystCareers - AI Career Platform',
      description: 'Intelligent career development platform that uses AI to match candidates with opportunities, provide personalized career guidance, and automate recruitment processes.',
      technologies: ['React', 'Node.js', 'AI/ML', 'MongoDB', 'OpenAI API', 'AWS'],
      metrics: { 
        candidates: '25K+', 
        matches: '8K+', 
        placements: '2K+', 
        successRate: '92%' 
      },
      category: 'AI Recruitment',
      image: '/images/catalystcareers.png',
      url: 'https://catalystcareers.in/',
      icon: Users,
      featured: true,
      aiFeatures: [
        'Intelligent job matching',
        'Automated resume screening',
        'AI-powered career coaching',
        'Smart interview scheduling'
      ]
    },
    {
      id: 'ai5',
      title: 'Legal Mind AI - AI Legal Assistant',
      description: 'Advanced AI-powered legal research and document analysis platform that helps lawyers and legal professionals with case research, document review, and legal writing assistance.',
      technologies: ['Next.js', 'Python', 'AI/ML', 'Legal APIs', 'Document Processing'],
      metrics: { 
        documentsProcessed: '100K+', 
        accuracy: '96%', 
        timeSaved: '80%', 
        lawyers: '500+' 
      },
      category: 'AI Legal Tech',
      image: '/images/legalmind.png',
      url: 'https://legal-mind-ai-frontend.vercel.app',
      icon: Shield,
      featured: true,
      aiFeatures: [
        'Automated legal research',
        'Document analysis and review',
        'AI-powered legal writing',
        'Case law recommendations'
      ]
    }
  ]
};

export const aiCategories = [
  'All',
  'AI Marketplace',
  'AI Analytics', 
  'AI Recruitment',
  'AI Legal Tech',
  'AI Automation'
];

export const aiServiceCategories = {
  aiAgents: {
    icon: Bot,
    color: 'purple-500',
    title: 'AI Agents & Automation',
    categories: aiCategories
  }
};
