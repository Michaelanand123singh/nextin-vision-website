import { Code, Bot, Settings, Cloud, Palette, Users, Zap, Shield, Smartphone, Globe, Cpu, Target, Camera, Megaphone, Lightbulb, Briefcase, Layers, Sparkles, TrendingUp, Eye, Award, Brain, BrainCircuit, MessageCircle, Workflow, Database, Network, Rocket, Gauge, Lock, RefreshCw, BarChart3, FileText, Command, Terminal, Server, Monitor, Globe2, ShieldCheck, Users2, Building, BookOpen, Headphones, AlertTriangle } from 'lucide-react';

export const coreServices = [
  {
    icon: Bot,
    title: "Agentic AI Development",
    headline: "Intelligent AI Agents That Work For You",
    description: "Custom AI agents that can autonomously handle complex tasks, make decisions, and learn from interactions to continuously improve performance.",
    features: [
      { icon: Brain, text: "Autonomous decision-making AI" },
      { icon: Workflow, text: "Multi-step task automation" },
      { icon: Zap, text: "Continuous learning & adaptation" }
    ],
    gradient: "from-orange-500 via-amber-500 to-orange-600",
    glowColor: "orange-500/30",
    bgGradient: "from-orange-500/5 via-amber-500/10 to-orange-600/5",
    borderGradient: "from-orange-500/20 via-amber-500/30 to-orange-600/20"
  },
  {
    icon: MessageCircle,
    title: "AI Chatbot Solutions",
    headline: "Conversational AI That Converts",
    description: "Intelligent chatbots and virtual assistants that provide 24/7 customer support, lead generation, and personalized user experiences.",
    features: [
      { icon: Brain, text: "Natural language processing" },
      { icon: Users, text: "Multi-language support" },
      { icon: Zap, text: "Seamless human handoff" }
    ],
    gradient: "from-amber-500 via-orange-600 to-red-500",
    glowColor: "amber-500/30",
    bgGradient: "from-amber-500/5 via-orange-600/10 to-red-500/5",
    borderGradient: "from-amber-500/20 via-orange-600/30 to-red-500/20"
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    headline: "Streamline Operations with AI",
    description: "End-to-end automation solutions that eliminate manual tasks, reduce errors, and increase operational efficiency across your organization.",
    features: [
      { icon: Zap, text: "Workflow automation" },
      { icon: Database, text: "Data processing automation" },
      { icon: Shield, text: "Compliance & audit trails" }
    ],
    gradient: "from-orange-600 via-red-500 to-pink-500",
    glowColor: "orange-600/30",
    bgGradient: "from-orange-600/5 via-red-500/10 to-pink-500/5",
    borderGradient: "from-orange-600/20 via-red-500/30 to-pink-500/20"
  },
  {
    icon: Code,
    title: "Custom Software Development",
    headline: "Tailored Solutions for Your Business",
    description: "Bespoke software applications built with modern technologies, designed to solve your specific business challenges and scale with your growth.",
    features: [
      { icon: Smartphone, text: "Cross-platform development" },
      { icon: Zap, text: "High-performance architecture" },
      { icon: Shield, text: "Enterprise-grade security" }
    ],
    gradient: "from-orange-500 via-amber-600 to-yellow-500",
    glowColor: "orange-500/30",
    bgGradient: "from-orange-500/5 via-amber-600/10 to-yellow-500/5",
    borderGradient: "from-orange-500/20 via-amber-600/30 to-yellow-500/20"
  },
  {
    icon: Cloud,
    title: "AI Infrastructure & Cloud",
    headline: "Scalable AI Computing Power",
    description: "Cloud-native AI infrastructure that provides the computing power, storage, and scalability needed for enterprise AI applications.",
    features: [
      { icon: Server, text: "GPU-optimized computing" },
      { icon: Zap, text: "Auto-scaling infrastructure" },
      { icon: Shield, text: "Enterprise security & compliance" }
    ],
    gradient: "from-amber-400 via-orange-500 to-red-400",
    glowColor: "amber-400/30",
    bgGradient: "from-amber-400/5 via-orange-500/10 to-red-400/5",
    borderGradient: "from-amber-400/20 via-orange-500/30 to-red-400/20"
  },
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    headline: "Your AI Transformation Partner",
    description: "Strategic guidance on AI implementation, technology selection, and digital transformation to maximize ROI and competitive advantage.",
    features: [
      { icon: Target, text: "AI roadmap development" },
      { icon: Cpu, text: "Technology assessment" },
      { icon: Shield, text: "Change management support" }
    ],
    gradient: "from-orange-600 via-amber-500 to-orange-400",
    glowColor: "orange-600/30",
    bgGradient: "from-orange-600/5 via-amber-500/10 to-orange-400/5",
    borderGradient: "from-orange-600/20 via-amber-500/30 to-orange-400/20"
  }
];

export const aiSpecializedServices = [
  {
    icon: BrainCircuit,
    title: "Large Language Model Integration",
    headline: "Harness the Power of Advanced AI",
    description: "Seamlessly integrate GPT, Claude, and other LLMs into your applications for enhanced natural language understanding and generation.",
    features: [
      { icon: Zap, text: "Multi-model integration" },
      { icon: Shield, text: "Enterprise security compliance" },
      { icon: Gauge, text: "Performance optimization" }
    ],
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    glowColor: "purple-500/30",
    bgGradient: "from-purple-500/5 via-pink-500/10 to-rose-500/5",
    borderGradient: "from-purple-500/20 via-pink-500/30 to-rose-500/20"
  },
  {
    icon: Network,
    title: "AI Agent Orchestration",
    headline: "Coordinate Multiple AI Agents",
    description: "Build complex systems where multiple AI agents work together, communicating and collaborating to solve sophisticated business problems.",
    features: [
      { icon: Users2, text: "Multi-agent coordination" },
      { icon: Workflow, text: "Complex workflow management" },
      { icon: Zap, text: "Real-time collaboration" }
    ],
    gradient: "from-pink-500 via-purple-600 to-indigo-500",
    glowColor: "pink-500/30",
    bgGradient: "from-pink-500/5 via-purple-600/10 to-indigo-500/5",
    borderGradient: "from-pink-500/20 via-purple-600/30 to-indigo-500/20"
  },
  {
    icon: Database,
    title: "AI Data Pipeline & Analytics",
    headline: "Turn Data into AI Intelligence",
    description: "End-to-end data solutions including collection, processing, training, and analytics to fuel your AI applications with quality data.",
    features: [
      { icon: BarChart3, text: "Advanced analytics & insights" },
      { icon: RefreshCw, text: "Real-time data processing" },
      { icon: Shield, text: "Data privacy & compliance" }
    ],
    gradient: "from-purple-600 via-indigo-500 to-blue-500",
    glowColor: "purple-600/30",
    bgGradient: "from-purple-600/5 via-indigo-500/10 to-blue-500/5",
    borderGradient: "from-purple-600/20 via-indigo-500/30 to-blue-500/20"
  }
];

export const automationServices = [
  {
    icon: Zap,
    title: "RPA & Intelligent Automation",
    headline: "Robotic Process Automation",
    description: "Automate repetitive tasks with intelligent bots that can handle complex workflows, data entry, and system integrations.",
    features: [
      { icon: Workflow, text: "Process mapping & optimization" },
      { icon: Shield, text: "Audit trails & compliance" },
      { icon: Zap, text: "Exception handling & alerts" }
    ],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    glowColor: "blue-500/30",
    bgGradient: "from-blue-500/5 via-cyan-500/10 to-teal-500/5",
    borderGradient: "from-blue-500/20 via-cyan-500/30 to-teal-500/20"
  },
  {
    icon: Command,
    title: "API Integration & Automation",
    headline: "Connect & Automate Everything",
    description: "Seamlessly integrate your existing systems and third-party services with custom APIs and automated workflows.",
    features: [
      { icon: Network, text: "Multi-system integration" },
      { icon: Zap, text: "Real-time synchronization" },
      { icon: Shield, text: "Secure data transmission" }
    ],
    gradient: "from-cyan-500 via-blue-600 to-indigo-500",
    glowColor: "cyan-500/30",
    bgGradient: "from-cyan-500/5 via-blue-600/10 to-indigo-500/5",
    borderGradient: "from-cyan-500/20 via-blue-600/30 to-indigo-500/20"
  },
  {
    icon: Monitor,
    title: "AI-Powered Monitoring & Alerting",
    headline: "Proactive System Intelligence",
    description: "Intelligent monitoring systems that use AI to detect anomalies, predict issues, and automatically respond to system events.",
    features: [
      { icon: Eye, text: "Anomaly detection" },
      { icon: Zap, text: "Predictive maintenance" },
      { icon: AlertTriangle, text: "Smart alerting & escalation" }
    ],
    gradient: "from-blue-600 via-indigo-500 to-purple-500",
    glowColor: "blue-600/30",
    bgGradient: "from-blue-600/5 via-indigo-500/10 to-purple-500/5",
    borderGradient: "from-blue-600/20 via-indigo-500/30 to-purple-500/20"
  }
];

export const enterpriseSolutions = [
  {
    icon: Building,
    title: "Enterprise AI Platforms",
    headline: "Scalable AI for Large Organizations",
    description: "Comprehensive AI platforms designed for enterprise-scale deployment with advanced security, compliance, and governance features.",
    features: [
      { icon: Shield, text: "Enterprise security & compliance" },
      { icon: Users, text: "Role-based access control" },
      { icon: Zap, text: "High availability & scalability" }
    ],
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    glowColor: "green-500/30",
    bgGradient: "from-green-500/5 via-emerald-500/10 to-teal-500/5",
    borderGradient: "from-green-500/20 via-emerald-500/30 to-teal-500/20"
  },
  {
    icon: Rocket,
    title: "AI Transformation Services",
    headline: "Complete Digital Transformation",
    description: "End-to-end services to help your organization adopt AI technologies, from strategy to implementation and ongoing support.",
    features: [
      { icon: Target, text: "Transformation roadmap" },
      { icon: Users, text: "Change management" },
      { icon: Zap, text: "Ongoing optimization" }
    ],
    gradient: "from-emerald-500 via-green-600 to-lime-500",
    glowColor: "emerald-500/30",
    bgGradient: "from-emerald-500/5 via-green-600/10 to-lime-500/5",
    borderGradient: "from-emerald-500/20 via-green-600/30 to-lime-500/20"
  },
  {
    icon: Globe2,
    title: "AI Training & Support",
    headline: "Empower Your Team",
    description: "Comprehensive training programs and ongoing support to ensure your team can effectively use and maintain AI solutions.",
    features: [
      { icon: Users, text: "Custom training programs" },
      { icon: BookOpen, text: "Documentation & resources" },
      { icon: Headphones, text: "24/7 technical support" }
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
    name: 'AI & Automation Core', 
    services: coreServices, 
    color: 'orange',
    gradient: 'from-orange-500 to-amber-500'
  },
  { 
    id: 'ai-specialized', 
    name: 'AI Specialized Services', 
    services: aiSpecializedServices, 
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    id: 'automation', 
    name: 'Process Automation', 
    services: automationServices, 
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    id: 'enterprise', 
    name: 'Enterprise Solutions', 
    services: enterpriseSolutions, 
    color: 'green',
    gradient: 'from-green-500 to-emerald-500'
  }
];