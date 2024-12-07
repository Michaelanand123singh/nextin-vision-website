// src/data/servicesData.js
import { Video, Monitor, Users, Megaphone, Presentation } from 'lucide-react';

export const servicesData = [
  {
    icon: Video,
    title: 'Brand Story Videos',
    description: "Compelling narratives that showcase your company's mission and values.",
    price: '2,000',
    link: '/pages/detailServices/BrandStoryVideos'  // Path to detailed page
  },
  {
    icon: Monitor,
    title: 'Product Showcases',
    description: "Dynamic demonstrations that highlight your product's key features.",
    price: '1,500',
    link: '/pages/detailServices/ProductShowcases'
  },
  {
    icon: Users,
    title: 'Training Content',
    description: 'Engaging educational videos for employee development.',
    price: '1,000',
    link: '/pages/detailServices/TrainingContent'
  },
  {
    icon: Megaphone,
    title: 'Social Media Content',
    description: 'Engaging short-form videos optimized for social platforms.',
    price: '800',
    link: '/pages/detailServices/SocialMediaContent'
  },
  {
    icon: Presentation,
    title: 'Executive Communications',
    description: 'Professional video presentations for leadership messages.',
    price: '1,500',
    link: '/pages/detailServices/ExecutiveCommunication'
  },
];
