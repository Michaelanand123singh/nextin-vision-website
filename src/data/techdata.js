import { Code, Cpu, LineChartIcon, Terminal, User } from "lucide-react";

export const techData = {
  items: [
    {
      id: 't1',
      title: 'SkytechInfotech',
      description: 'Full-stack website with integrated payment system and cloud hosting',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe', 'TypeScript'],
      metrics: { users: '75K+', transactions: '150K+', uptime: '99.99%', performance: '99/100' },
      category: 'Web Development',
      image: '/images/skytechinfotech.png',
      url: 'https://skytech-infotech.vercel.app/',
      icon: Code,
      featured: true
    },
    {
      id: 't2',
      title: 'NYWNFT',
      description: 'Blockchain and AI NFT marketplace platform',
      technologies: ['React', 'Solidity', 'Web3', 'Node.js', 'IPFS'],
      metrics: { users: '75K+', transactions: '150K+', uptime: '99.99%' },
      category: 'Blockchain',
      image: '/images/nft.png',
      url: 'https://nft-place-lake.vercel.app/',
      icon: Code,
      featured: true
    },
    {
      id: 't3',
      title: 'Sanjay Catering',
      description: 'Event catering booking platform',
      technologies: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
      metrics: { bookings: '500+', uptime: '99.9%' },
      category: 'Business Website',
      image: '/images/sanjay-catering.png',
      url: 'https://sanjaycatering.com/',
      icon: Code
    },
    {
      id: 't4',
      title: 'Nation First 9',
      description: 'News portal website',
      technologies: ['React', 'Node.js', 'MongoDB'],
      metrics: { dailyReaders: '10K+' },
      category: 'Media',
      image: '/images/nation-first.png',
      url: 'https://nation-first9.vercel.app/',
      icon: Code
    },
    {
      id: 't5',
      title: 'Jewellery E-Commerce',
      description: 'Online jewellery store',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      metrics: { products: '200+', transactions: '5K+' },
      category: 'E-Commerce',
      image: '/images/ecommerce.png',
      url: 'https://ecommerce-flax-chi.vercel.app/',
      icon: Code
    },
    {
      id: 't6',
      title: 'Event Planner',
      description: 'Dreamday event planning platform',
      technologies: ['React', 'Node.js', 'Calendar API'],
      metrics: { eventsPlanned: '300+' },
      category: 'Business',
      image: '/images/event.png',
      url: 'https://website-event-beta.vercel.app/',
      icon: Code
    },
    {
      id: 't7',
      title: 'NFT Marketplace',
      description: 'Digital art NFT trading platform',
      technologies: ['React', 'Solidity', 'Web3'],
      metrics: { collections: '50+', volume: '1K ETH' },
      category: 'Blockchain',
      image: '/images/neft-marketplace.png',
      url: 'https://nft-market-place-rho.vercel.app/',
      icon: Code
    },
    {
      id: 't8',
      title: 'Automation E-Commerce',
      description: 'Automated online store',
      technologies: ['React', 'Node.js', 'Automation Tools'],
      metrics: { products: '500+' },
      category: 'E-Commerce',
      image: '/images/ecommerce-1.png',
      url: 'https://ecommerce-automation-website.vercel.app/',
      icon: Code
    },
    {
      id: 't9',
      title: 'Renderverse',
      description: 'Company website for Renderverse',
      technologies: ['React', 'Three.js', 'WebGL'],
      metrics: { clients: '50+' },
      category: 'Corporate',
      image: '/images/renderverse-website.png',
      url: 'https://renderverse.in/',
      icon: Code
    },
    {
      id: 't10',
      title: 'Lets Code Job Portal',
      description: 'Tech job recruitment platform',
      technologies: ['React', 'Node.js', 'MongoDB'],
      metrics: { listings: '1K+', candidates: '10K+' },
      category: 'Web Application',
      image: '/images/lets-code-job-portal.png',
      url: 'https://letsremotejob.com/',
      icon: Code
    },
    {
      id: 't11',
      title: 'DDP Planner',
      description: 'Daily planning application',
      technologies: ['React', 'Firebase', 'Calendar API'],
      category: 'Productivity',
      image: '/images/ddp-planner.png',
      url: 'https://ddplanner.in/',
      icon: Code
    },
    {
      id: 't12',
      title: 'Minutos',
      description: 'Time management application',
      technologies: ['React', 'Node.js'],
      category: 'Productivity',
      image: '/images/minutos.png',
      url: 'https://minutos.in/',
      icon: Code
    },
    {
      id: 't13',
      title: 'PPT Market',
      description: 'Presentation template marketplace',
      technologies: ['React', 'Node.js', 'Payment Gateway'],
      category: 'Digital Goods',
      image: '/images/ppt-market.png',
      url: 'https://ppt-market.vercel.app/',
      icon: Code
    },
    // New additions from provided URLs
    {
      id: 't14',
      title: 'Lets Code',
      description: 'Coding education and training platform',
      technologies: ['React', 'Node.js', 'MongoDB', 'Educational APIs'],
      metrics: { students: '5K+', courses: '50+' },
      category: 'Education',
      image: '/images/lets-code.png',
      url: 'https://www.lets-code.co.in/',
      icon: Code
    },
    {
      id: 't15',
      title: 'MGA Dashboard',
      description: 'Management dashboard for MGA2002',
      technologies: ['React', 'Node.js', 'Dashboard APIs', 'Analytics'],
      metrics: { users: '100+', modules: '20+' },
      category: 'Dashboard',
      image: '/images/mga2002.png',
      url: 'https://www.mga2002.in/',
      icon: Code
    },
    {
      id: 't16',
      title: 'DrMind',
      description: 'Mental health and wellness platform',
      technologies: ['React', 'Node.js', 'Health APIs'],
      metrics: { users: '2K+', sessions: '10K+' },
      category: 'Healthcare',
      image: '/images/drmind.png',
      url: 'https://drmind.vercel.app/',
      icon: Code
    },
    {
      id: 't17',
      title: 'Desiqna Training',
      description: 'Design training and education platform',
      technologies: ['React', 'LMS Integration', 'Video Streaming'],
      metrics: { courses: '30+', students: '1K+' },
      category: 'Education',
      image: '/images/training-desiqna.png',
      url: 'https://training.desiqna.in/',
      icon: Code
    },
    {
      id: 't18',
      title: 'Now India',
      description: 'News and information portal for India',
      technologies: ['React', 'Node.js', 'CMS', 'Real-time Updates'],
      metrics: { articles: '5K+', dailyReaders: '15K+' },
      category: 'Media',
      image: '/images/now-india.png',
      url: 'https://now-india.vercel.app/',
      icon: Code
    },
    {
      id: 't19',
      title: 'DevAgga',
      description: 'Developer community and portfolio platform',
      technologies: ['React', 'Node.js', 'Community Features'],
      metrics: { developers: '500+', projects: '1K+' },
      category: 'Community',
      image: '/images/devagga.png',
      url: 'https://devagga.vercel.app/',
      icon: Code
    },
    {
      id: 't20',
      title: 'Course Desiqna Dashboard',
      description: 'Course management dashboard for Desiqna',
      technologies: ['React', 'Dashboard APIs', 'Course Management'],
      metrics: { courses: '100+', instructors: '25+' },
      category: 'Dashboard',
      image: '/images/coursedesiqna.png',
      url: 'https://coursedesiqna.in/',
      icon: Code
    },
    {
      id: 't21',
      title: 'Minuto Grocery App',
      description: 'Online grocery shopping application',
      technologies: ['React', 'Node.js', 'Payment Gateway', 'Delivery APIs'],
      metrics: { products: '1K+', orders: '2K+' },
      category: 'E-Commerce',
      image: '/images/minuto-grocery.png',
      url: 'https://minuto-grocersy-app.vercel.app/',
      icon: Code
    },
    {
      id: 't22',
      title: 'Staylon Beauty',
      description: 'Beauty and cosmetics e-commerce platform',
      technologies: ['React', 'Node.js', 'Payment Integration', 'Beauty APIs'],
      metrics: { products: '300+', customers: '1K+' },
      category: 'E-Commerce',
      image: '/images/staylon-beauty.png',
      url: 'https://staylon-beauty.vercel.app',
      icon: Code
    },
    {
      id: 't23',
      title: 'Planner Alpha',
      description: 'Advanced planning and scheduling application',
      technologies: ['React', 'Calendar APIs', 'Task Management'],
      metrics: { users: '800+', tasks: '50K+' },
      category: 'Productivity',
      image: '/images/planner-alpha.png',
      url: 'https://planner-alpha.vercel.app/',
      icon: Code
    },
    {
      id: 't24',
      title: 'Tesod Technology',
      description: 'Technology consulting company website',
      technologies: ['React', 'Node.js', 'CMS'],
      metrics: { clients: '30+', projects: '100+' },
      category: 'Corporate',
      image: '/images/tesod-technology.png',
      url: 'https://tesod-technology.vercel.app',
      icon: Code
    },
    {
      id: 't25',
      title: 'Tesod Technology Dashboard',
      description: 'Management dashboard for Tesod Technology',
      technologies: ['React', 'Dashboard APIs', 'Analytics', 'CRM'],
      metrics: { modules: '15+', users: '50+' },
      category: 'Dashboard',
      image: '/images/tesod-dashboard.png',
      url: 'https://tesod-technology-dashboard.vercel.app',
      icon: Code
    },
    {
      id: 't26',
      title: 'Sri Laxmi Alankar',
      description: 'Traditional jewelry and ornaments website',
      technologies: ['React', 'Node.js', 'E-commerce Features'],
      metrics: { products: '200+', customers: '500+' },
      category: 'E-Commerce',
      image: '/images/srilaxmialankar.png',
      url: 'https://srilaxmialankar.com/',
      icon: Code
    },
    {
      id: 't27',
      title: 'Student Says',
      description: 'Student feedback and review platform',
      technologies: ['React', 'Node.js', 'Review System', 'MongoDB'],
      metrics: { students: '2K+', reviews: '5K+' },
      category: 'Education',
      image: '/images/studentsays.png',
      url: 'https://studentsays.com/',
      icon: Code
    },
    {
      id: 't28',
      title: 'Book2500',
      description: 'Online book marketplace and booking platform',
      technologies: ['React', 'Node.js', 'Payment Gateway', 'Booking System'],
      metrics: { books: '2.5K+', users: '1K+' },
      category: 'E-Commerce',
      image: '/images/book2500.png',
      url: 'https://www.book2500.in/',
      icon: Code
    },
    {
      id: 't29',
      title: '21SEC',
      description: 'Security and technology solutions website',
      technologies: ['React', 'Node.js', 'Security APIs'],
      metrics: { clients: '25+', solutions: '10+' },
      category: 'Corporate',
      image: '/images/21sec.png',
      url: 'https://21sec.in/',
      icon: Code
    },
    {
      id: 't30',
      title: 'Frame Digital Solutions',
      description: 'Digital marketing and web solutions company',
      technologies: ['React', 'Node.js', 'Marketing Tools', 'Analytics'],
      metrics: { clients: '40+', campaigns: '100+' },
      category: 'Corporate',
      image: '/images/framedigital.png',
      url: 'https://www.framedigital.solutions/',
      icon: Code
    },
    {
      id: 't31',
      title: 'Lets Resource',
      description: 'Resource sharing and management platform',
      technologies: ['React', 'Node.js', 'File Management', 'Sharing APIs'],
      metrics: { resources: '1K+', users: '800+' },
      category: 'Productivity',
      image: '/images/letsresource.png',
      url: 'https://letsresource.in/',
      icon: Code
    },
    {
      id: 't32',
      title: 'Euthissa',
      description: 'Healthcare and wellness platform',
      technologies: ['React', 'Node.js', 'Healthcare APIs', 'Appointment System'],
      metrics: { patients: '500+', appointments: '2K+' },
      category: 'Healthcare',
      image: '/images/euthissa.png',
      url: 'https://www.euthissa.in/',
      icon: Code
    },
    {
      id: 't33',
      title: 'ChefKar',
      description: 'Food delivery and chef booking platform',
      technologies: ['React', 'Node.js', 'Payment Gateway', 'Location APIs'],
      metrics: { chefs: '100+', orders: '3K+' },
      category: 'Food & Dining',
      image: '/images/chefkar.png',
      url: 'https://chefkar-frontend1.vercel.app/',
      icon: Code
    },
    {
      id: 't34',
      title: 'EVI Web',
      description: 'Event management and booking platform',
      technologies: ['React', 'Node.js', 'Event Management', 'Booking APIs'],
      metrics: { events: '200+', bookings: '1K+' },
      category: 'Business',
      image: '/images/evi-web.png',
      url: 'https://evi-web-ry87.vercel.app/',
      icon: Code
    },
    {
      id: 't35',
      title: 'News Admin Dashboard',
      description: 'Content management dashboard for news portal',
      technologies: ['React', 'CMS', 'Admin Panel', 'Content APIs'],
      metrics: { articles: '10K+', editors: '15+' },
      category: 'Dashboard',
      image: '/images/news-admin.png',
      url: 'https://news-admin-teal.vercel.app/',
      icon: Code
    },
    {
      id: 't36',
      title: 'Video Desiqna Dashboard',
      description: 'Video content management dashboard',
      technologies: ['React', 'Video APIs', 'Content Management', 'Analytics'],
      metrics: { videos: '500+', users: '200+' },
      category: 'Dashboard',
      image: '/images/video-desiqna.png',
      url: 'https://video-desiqna.vercel.app/',
      icon: Code
    },
    {
      id: 't37',
      title: 'Stock Dashboard',
      description: 'Stock market tracking and analytics dashboard',
      technologies: ['React', 'Stock APIs', 'Real-time Data', 'Charts'],
      metrics: { stocks: '1K+', users: '300+' },
      category: 'Dashboard',
      image: '/images/stock-dashboard.png',
      url: 'https://stock-dashboard-sandy.vercel.app/',
      icon: Code
    },
    {
      id: 't38',
      title: 'Art Sparrow',
      description: 'Digital art gallery and marketplace',
      technologies: ['React', 'Node.js', 'Art APIs', 'Gallery Features'],
      metrics: { artworks: '300+', artists: '50+' },
      category: 'Digital Arts',
      image: '/images/artsparrow.png',
      url: 'https://artsparrow.in/',
      icon: Code
    },
    {
      id: 't39',
      title: 'Segal Shipping',
      description: 'Shipping and logistics management platform',
      technologies: ['React', 'Node.js', 'Logistics APIs', 'Tracking System'],
      metrics: { shipments: '5K+', clients: '100+' },
      category: 'Logistics',
      image: '/images/segalshipping.png',
      url: 'https://segalshipping.com/',
      icon: Code
    },
    {
      id: 't40',
      title: '99 Outlets',
      description: 'Multi-vendor e-commerce marketplace',
      technologies: ['React', 'Node.js', 'Multi-vendor System', 'Payment Gateway'],
      metrics: { vendors: '99+', products: '5K+' },
      category: 'E-Commerce',
      image: '/images/99outlets.png',
      url: 'https://99outlets.co.in/',
      icon: Code
    }
  ],
  stats: [
    { icon: Terminal, title: "Projects Completed", value: "87", trend: 15.2 },
    { icon: Cpu, title: "Apps Deployed", value: "34", trend: 8.7 },
    { icon: User, title: "Active Users", value: "125K", trend: 22.4 },
    { icon: LineChartIcon, title: "Success Rate", value: "96%", trend: 3.2 }
  ]
};

// Export the data in the format expected by Portfolio.jsx
export const developmentData = techData.items;

// Extract unique categories from the items
export const developmentCategories = [
  'All',
  ...new Set(techData.items.map(item => item.category))
];