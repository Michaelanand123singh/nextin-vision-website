import { 
    Terminal, 
    Cpu, 
    Users, 
    LineChartIcon,
    Code,
    Cloud,
    Shield,
    Smartphone
  } from 'lucide-react';
  
  export const techData = {
    items: [
      {
        id: 't1',
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard',
        technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
        metrics: {
          users: '50K+',
          transactions: '100K+',
          uptime: '99.9%',
          performance: '98/100'
        },
        category: 'Web Development',
        github: 'https://github.com/example/ecommerce',
        liveDemo: 'https://demo-ecommerce.example.com',
        thumbnail: '/images/portfolio/tech/ecommerce.jpg'
      },
      {
        id: 't2',
        title: 'AI-Powered Analytics Dashboard',
        description: 'Machine learning-based analytics platform for business intelligence with predictive modeling capabilities',
        technologies: ['Python', 'TensorFlow', 'React', 'Django', 'PostgreSQL'],
        metrics: {
          accuracy: '94%',
          processedData: '2TB+',
          predictions: '1M+',
          companies: '25+'
        },
        category: 'Machine Learning',
        github: 'https://github.com/example/ai-analytics',
        liveDemo: 'https://demo-analytics.example.com',
        thumbnail: '/images/portfolio/tech/ai-analytics.jpg'
      },
      {
        id: 't3',
        title: 'Mobile Fitness App',
        description: 'Cross-platform fitness tracking application with social features and personalized workout plans',
        technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
        metrics: {
          downloads: '100K+',
          activeUsers: '45K',
          rating: '4.8/5',
          workouts: '250K+'
        },
        category: 'Mobile Development',
        github: 'https://github.com/example/fitness-app',
        liveDemo: 'https://demo-fitness.example.com',
        thumbnail: '/images/portfolio/tech/fitness-app.jpg'
      },
      {
        id: 't4',
        title: 'Real Estate Management System',
        description: 'Cloud-based property management platform with virtual tours and automated tenant screening',
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS', 'Docker'],
        metrics: {
          properties: '15K+',
          users: '75K+',
          transactions: '$50M+',
          uptime: '99.95%'
        },
        category: 'Web Development',
        github: 'https://github.com/example/realestate',
        liveDemo: 'https://demo-realestate.example.com',
        thumbnail: '/images/portfolio/tech/realestate.jpg'
      }
    ],
    stats: [
      { icon: Terminal, title: "Projects Completed", value: "87", trend: 15.2 },
      { icon: Cpu, title: "Apps Deployed", value: "34", trend: 8.7 },
      { icon: Users, title: "Active Users", value: "125K", trend: 22.4 },
      { icon: LineChartIcon, title: "Success Rate", value: "96%", trend: 3.2 }
    ]
  };