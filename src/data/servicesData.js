import { Code, Bot, Settings, Cloud, Palette, Users, Zap, Shield, Smartphone, Globe, Cpu, Target, Camera, Megaphone, Lightbulb, Briefcase, Layers, Sparkles, TrendingUp, Eye, Award } from 'lucide-react';

export const coreServices = [
  {
    icon: Code,
    title: "Web & Mobile Development",
    headline: "Custom Web Apps — From MVP to Enterprise",
    description: "Scalable applications tailored to your business needs with modern architecture",
    features: [
      { icon: Smartphone, text: "Mobile-first responsive design" },
      { icon: Zap, text: "High-performance architecture" },
      { icon: Shield, text: "Enterprise-grade security" }
    ],
    gradient: "from-orange-500 via-amber-500 to-orange-600",
    glowColor: "orange-500/30",
    bgGradient: "from-orange-500/5 via-amber-500/10 to-orange-600/5",
    borderGradient: "from-orange-500/20 via-amber-500/30 to-orange-600/20"
  },
  {
    icon: Bot,
    title: "Agentic AI Assistants",
    headline: "Smart AI That Works — No Hype, Just Results",
    description: "Intelligent automation handling tasks, support, and research efficiently",
    features: [
      { icon: Target, text: "Task-specific AI solutions" },
      { icon: Cpu, text: "Advanced NLP processing" },
      { icon: Zap, text: "Real-time decision making" }
    ],
    gradient: "from-amber-500 via-orange-600 to-red-500",
    glowColor: "amber-500/30",
    bgGradient: "from-amber-500/5 via-orange-600/10 to-red-500/5",
    borderGradient: "from-amber-500/20 via-orange-600/30 to-red-500/20"
  },
  {
    icon: Settings,
    title: "Business Operations Software",
    headline: "Internal Tools That Save Time — ERP, CRMs, HR & More",
    description: "Custom platforms designed to streamline your business processes",
    features: [
      { icon: Target, text: "Workflow automation" },
      { icon: Globe, text: "Real-time dashboards" },
      { icon: Shield, text: "Role-based access control" }
    ],
    gradient: "from-orange-600 via-red-500 to-pink-500",
    glowColor: "orange-600/30",
    bgGradient: "from-orange-600/5 via-red-500/10 to-pink-500/5",
    borderGradient: "from-orange-600/20 via-red-500/30 to-pink-500/20"
  },
  {
    icon: Cloud,
    title: "Cloud Migration & Infrastructure",
    headline: "Bulletproof Cloud Setup — AWS, Azure & GCP",
    description: "Secure cloud architecture with seamless migration and maintenance",
    features: [
      { icon: Shield, text: "Security-first architecture" },
      { icon: Zap, text: "Auto-scaling infrastructure" },
      { icon: Globe, text: "Multi-cloud expertise" }
    ],
    gradient: "from-orange-500 via-amber-600 to-yellow-500",
    glowColor: "orange-500/30",
    bgGradient: "from-orange-500/5 via-amber-600/10 to-yellow-500/5",
    borderGradient: "from-orange-500/20 via-amber-600/30 to-yellow-500/20"
  },
  {
    icon: Palette,
    title: "Product Design & UX/UI",
    headline: "Interfaces People Love — Functional & Beautiful",
    description: "User-centered design that converts visitors into loyal customers",
    features: [
      { icon: Target, text: "User research & testing" },
      { icon: Smartphone, text: "Conversion-optimized flows" },
      { icon: Zap, text: "Rapid prototyping" }
    ],
    gradient: "from-amber-400 via-orange-500 to-red-400",
    glowColor: "amber-400/30",
    bgGradient: "from-amber-400/5 via-orange-500/10 to-red-400/5",
    borderGradient: "from-amber-400/20 via-orange-500/30 to-red-400/20"
  },
  {
    icon: Users,
    title: "Tech Consulting & Support",
    headline: "Your Tech Strategy Partners — Planning to Scale",
    description: "Strategic guidance and ongoing support for technology decisions",
    features: [
      { icon: Target, text: "Technology roadmapping" },
      { icon: Cpu, text: "Performance optimization" },
      { icon: Shield, text: "24/7 technical support" }
    ],
    gradient: "from-orange-600 via-amber-500 to-orange-400",
    glowColor: "orange-600/30",
    bgGradient: "from-orange-600/5 via-amber-500/10 to-orange-400/5",
    borderGradient: "from-orange-600/20 via-amber-500/30 to-orange-400/20"
  }
];

export const mediaServices = [
  {
    icon: Camera,
    title: "Enterprise Video Production",
    headline: "Cinematic Quality — Brand Films & Corporate Documentaries",
    description: "High-budget production with top-tier teams for industry-leading content",
    features: [
      { icon: Award, text: "Multi-location shoot capabilities" },
      { icon: Layers, text: "Film studio partnerships" },
      { icon: Sparkles, text: "Cinematic advertising campaigns" }
    ],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    glowColor: "purple-500/30",
    bgGradient: "from-purple-500/5 via-pink-500/10 to-rose-500/5",
    borderGradient: "from-purple-500/20 via-pink-500/30 to-rose-500/20"
  },
  {
    icon: Layers,
    title: "3D & VFX Solutions",
    headline: "Hyper-Realistic CGI — AR/VR & Advanced Visual Effects",
    description: "Cutting-edge 3D visualization for corporate and entertainment industries",
    features: [
      { icon: Eye, text: "Photorealistic 3D modeling" },
      { icon: Zap, text: "AR/VR immersive experiences" },
      { icon: Globe, text: "Large-scale visualization projects" }
    ],
    gradient: "from-pink-500 via-purple-600 to-indigo-500",
    glowColor: "pink-500/30",
    bgGradient: "from-pink-500/5 via-purple-600/10 to-indigo-500/5",
    borderGradient: "from-pink-500/20 via-purple-600/30 to-indigo-500/20"
  },
  {
    icon: Sparkles,
    title: "AI-Powered Content Production",
    headline: "Automated Excellence — AI-Driven Video & Digital Content",
    description: "Revolutionary AI tools for automated editing and synthetic media creation",
    features: [
      { icon: Bot, text: "AI-driven video editing" },
      { icon: Target, text: "Generative content creation" },
      { icon: Users, text: "AI avatars & synthetic media" }
    ],
    gradient: "from-purple-600 via-indigo-500 to-blue-500",
    glowColor: "purple-600/30",
    bgGradient: "from-purple-600/5 via-indigo-500/10 to-blue-500/5",
    borderGradient: "from-purple-600/20 via-indigo-500/30 to-blue-500/20"
  }
];

export const digitalMarketingServices = [
  {
    icon: Megaphone,
    title: "Social Media Management",
    headline: "Strategic Social Presence — Content Planning & Community Growth",
    description: "Comprehensive social media strategy with performance-driven results",
    features: [
      { icon: Target, text: "Strategic content planning" },
      { icon: Users, text: "Community engagement optimization" },
      { icon: TrendingUp, text: "Analytics & performance tracking" }
    ],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    glowColor: "blue-500/30",
    bgGradient: "from-blue-500/5 via-cyan-500/10 to-teal-500/5",
    borderGradient: "from-blue-500/20 via-cyan-500/30 to-teal-500/20"
  },
  {
    icon: Palette,
    title: "Content Creation & Strategy",
    headline: "Visual Storytelling — Photography, Design & Trending Content",
    description: "Professional content creation that captures attention and drives engagement",
    features: [
      { icon: Camera, text: "Professional photography & videography" },
      { icon: Sparkles, text: "Graphic design & visual content" },
      { icon: TrendingUp, text: "Trending content research" }
    ],
    gradient: "from-cyan-500 via-blue-600 to-indigo-500",
    glowColor: "cyan-500/30",
    bgGradient: "from-cyan-500/5 via-blue-600/10 to-indigo-500/5",
    borderGradient: "from-cyan-500/20 via-blue-600/30 to-indigo-500/20"
  },
  {
    icon: Award,
    title: "Brand Development",
    headline: "Complete Brand Identity — From Concept to Market Leadership",
    description: "Strategic brand development with influencer partnerships and market positioning",
    features: [
      { icon: Lightbulb, text: "Comprehensive brand identity" },
      { icon: Globe, text: "Social media optimization" },
      { icon: Users, text: "Influencer collaboration management" }
    ],
    gradient: "from-blue-600 via-indigo-500 to-purple-500",
    glowColor: "blue-600/30",
    bgGradient: "from-blue-600/5 via-indigo-500/10 to-purple-500/5",
    borderGradient: "from-blue-600/20 via-indigo-500/30 to-purple-500/20"
  }
];

export const additionalServices = [
  {
    icon: Bot,
    title: "AI Solutions Hub",
    headline: "Custom AI Agents — Automation Tools & System Integration",
    description: "Bespoke AI solutions designed to integrate seamlessly with your existing systems",
    features: [
      { icon: Settings, text: "Custom AI agent development" },
      { icon: Zap, text: "System integration services" },
      { icon: TrendingUp, text: "Performance optimization & scaling" }
    ],
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    glowColor: "green-500/30",
    bgGradient: "from-green-500/5 via-emerald-500/10 to-teal-500/5",
    borderGradient: "from-green-500/20 via-emerald-500/30 to-teal-500/20"
  },
  {
    icon: Code,
    title: "Dev Market Solutions",
    headline: "Ready-to-Deploy — Templates, Components & Development Resources",
    description: "Professional development resources and ready-to-use software solutions",
    features: [
      { icon: Layers, text: "Ready-to-use software components" },
      { icon: Palette, text: "Custom landing page templates" },
      { icon: Briefcase, text: "Professional development tools" }
    ],
    gradient: "from-emerald-500 via-green-600 to-lime-500",
    glowColor: "emerald-500/30",
    bgGradient: "from-emerald-500/5 via-green-600/10 to-lime-500/5",
    borderGradient: "from-emerald-500/20 via-green-600/30 to-lime-500/20"
  },
  {
    icon: Briefcase,
    title: "Premium Business Solutions",
    headline: "Enterprise Services — Presentations, Partnerships & Collaboration",
    description: "High-end business solutions including corporate presentations and partnership opportunities",
    features: [
      { icon: Award, text: "High-end corporate presentations" },
      { icon: Users, text: "Influencer-brand matching platform" },
      { icon: Globe, text: "Enterprise collaboration opportunities" }
    ],
    gradient: "from-green-600 via-teal-500 to-cyan-500",
    glowColor: "green-600/30",
    bgGradient: "from-green-600/5 via-teal-500/10 to-cyan-500/5",
    borderGradient: "from-green-600/20 via-teal-500/30 to-cyan-500/20"
  }
];

export const categories = [
  { 
    id: 'core', 
    name: 'Core Tech Services', 
    services: coreServices, 
    color: 'orange',
    gradient: 'from-orange-500 to-amber-500'
  },
  { 
    id: 'media', 
    name: 'Media & Production', 
    services: mediaServices, 
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    id: 'marketing', 
    name: 'Digital Marketing', 
    services: digitalMarketingServices, 
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    id: 'additional', 
    name: 'Additional Services', 
    services: additionalServices, 
    color: 'green',
    gradient: 'from-green-500 to-emerald-500'
  }
];