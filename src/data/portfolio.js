const categories = [
  'All', 'Brand Story', 'Product Animation', 'Training Content', 'Social Media', 
  '2D Explainer Video', 'Motion Graphics', 'CGI Ads', '3D Animations', 'Commericial Product Animation', 'AI Generated Animation', 'VFX & CGI Videos'
];

const portfolioItems = [

  // Brand Story
  {
    title: 'Tech Company Brand Story',
    category: 'Brand Story',
    image: '/assets/images/portfolio/brand-1.jpg',
    description: 'A compelling brand story for a leading tech company.',
    youtubeUrl: 'https://www.youtube.com/embed/9uY_VEFGPUA?si=rXf3ufVwexWvUlu5'
  },

  {
    title: 'Founder Story',
    category: 'Brand Story',
    image: '/assets/images/portfolio/brand-2.jpg',
    description: 'A founder story for a leading tech company.',
    youtubeUrl: 'https://www.youtube.com/embed/8sG6rWT6HjI?si=0IPgoj67bI0wUt-R'
  },

  {
    title: 'Seeds of Innovation',
    category: 'Brand Story',
    image: '/assets/images/portfolio/founding-vision.jpg',
    description: 'Explore the inspiring journey of our founders\' initial vision, tracing how a bold idea transformed into a groundbreaking enterprise.',
    youtubeUrl: 'https://www.youtube.com/embed/8sG6rWT6HjI?si=TttrND7BKWukZas0'
  },

  {
    title: 'From Dream to Reality',
    category: 'Brand Story',
    image: '/assets/images/portfolio/company-origins.jpg',
    description: 'Uncover the compelling narrative of our company\'s inception, highlighting the challenges, breakthroughs, and pivotal moments that shaped our early years.',
    youtubeUrl: 'https://www.youtube.com/embed/CQe1IQ0zjqc?si=m60TnNS7cxA68_dk'
  },

  //Motion Graphics

  {
    title: 'Project Tramontia',
    category: 'Motion Graphics',
    image: '/assets/images/portfolio/motion-1.jpg',
    description: 'Engaging animations that break down complex concepts into easy-to-understand visualizations',
    youtubeUrl: 'https://www.youtube.com/embed/BWtajwT6Weg?si=Ynf3B1bJ4qfBZvOA'
  },

  {
    title: 'Project Porter',
    category: 'Motion Graphics',
    image: '/assets/images/portfolio/motion-1.jpg',
    description: 'A mesmerizing visual journey that transports viewers to a world of wonder and discovery',
    youtubeUrl: 'https://www.youtube.com/embed/_0JlqhxRx3Q?si=gA6WGJ9rrKur2vGZ'
  },

  {
    title: 'Project Lumina',
    category: 'Motion Graphics',
    image: '/assets/images/portfolio/motion-1.jpg',
    description: 'A captivating narrative that weaves together the threads of imagination and innovation',
    youtubeUrl: 'https://www.youtube.com/embed/f6aKWrDJ3CM?si=fCvjekAQZRkksy-k',
  },

  //CGI Ads
  {
    title: 'Project Aurora',
    category: 'CGI Ads',
    image: '/assets/images/portfolio/cg-ad-1.jpg',
    description: 'A visually stunning campaign that showcases the beauty of our product in a futuristic world',
    youtubeUrl: 'https://www.youtube.com/embed/pp7WBN5c0-c?si=4vBICjyLag5OFwzg',
  },

  {
    title: 'Project Nova',
    category: 'CGI Ads',
    image: '/assets/images/portfolio/cg-ad-1.jpg',
    description: 'A captivating narrative that transports viewers to a world of wonder and discovery',
    youtubeUrl: 'https://www.youtube.com/embed/Lku978C7MVk?si=CzBB8aO_ECB4VK4z',
  },

  {
    title: 'Head & Shoulder CGI Ads',
    category: 'CGI Ads',
    image: '/assets/images/portfolio/cg-ad-1.jpg',
    description: 'A visually stunning campaign that showcases the beauty of our product in a futuristic world',
    youtubeUrl: 'https://www.youtube.com/embed/hs2eBxJEG8w?si=sBi3o5uIMC1E1vDk',
  },

  {
    title: 'Final Sky Arc', 
    category: 'CGI Ads',
    image: '/assets/images/portfolio/cg-ad-1.jpg',
    description: 'A captivating narrative that weaves together the threads of imagination and innovation',
    youtubeUrl: 'https://www.youtube.com/embed/PQwUWmYvHok?si=z0gp1hsvtKimwUbj',
  },

  {
    title: 'Project Sky Arc',
    category: 'CGI Ads',
    image: '/assets/images/portfolio/cg-ad-1.jpg',
    description: 'A visually stunning campaign that showcases the beauty of our product in a futuristic world',
    youtubeUrl: 'https://www.youtube.com/embed/CtZBjekZaq4?si=nTyZA8U5Il34iSBi',
  },

  {
    title: 'Dubai Cream CGI',
    category: 'CGI Ads',
    image: '/assets/images/portfolio/cg-ad-1.jpg',
    description: 'A captivating narrative that transports viewers to a world of wonder and discovery',
    youtubeUrl: 'https://www.youtube.com/embed/CtZBjekZaq4?si=2vmLdsz8M-ifTwMi',
  },

  {
    title: 'Dubai Cream CGI',
    category: 'CGI Ads',
    image: '/assets/images/portfolio/cg-ad-1.jpg',
    description: 'A CGI Videos',
    youtubeUrl: 'https://www.youtube.com/embed/9amfDhXygZs?si=ZqXMzKozokqhph3Q',
  },

  {
    title: 'Dubai Cream CGI',
    category: 'CGI Ads',
    image: '/assets/images/portfolio/cg-ad-1.jpg',
    description: 'A visually stunning campaign that showcases the beauty of our product in a futuristic world',
    youtubeUrl: 'https://www.youtube.com/embed/TM-5-uiUiQQ?si=hbKAzjZC5otQ0W-k',
  },

  {
    title: 'Dubai Cream CGI',
    category: 'CGI Ads',
    image: '/assets/images/portfolio/cg-ad-1.jpg',
    description: 'A captivating narrative that weaves together the threads of imagination and innovation',
    youtubeUrl: 'https://www.youtube.com/embed/nE3OLDmpocU?si=NS7L1282c-6vXt5A',
  },

  {
    title: 'Dubai Cream CGI',
    category: 'CGI Ads',
    image: '/assets/images/portfolio/cg-ad-1.jpg',
    description: 'A visually stunning campaign that showcases the beauty of our product in a futuristic world',
    youtubeUrl: 'https://www.youtube.com/embed/KBF5X5vkuek?si=czfAIv9oDa2bCFhT',
  },

  //VFX & CGI Videos
  {
    title: 'Project Sky Arc',
    category: 'VFX & CGI Videos',
    image: '/assets/images/portfolio/vfx-cgivideo-1.jpg',
    description: 'A visually stunning campaign that showcases the beauty of our product in a futuristic world',
    youtubeUrl: 'https://www.youtube.com/embed/OoULgCJP3QI?si=a5yH5xYKs4o8U2PI',
  },

  {
    title: 'Project Sky Arc',
    category: 'VFX & CGI Videos',
    image: '/assets/images/portfolio/vfx-cgivideo-1.jpg',
    description: 'A captivating narrative that weaves together the threads of imagination and innovation',
    youtubeUrl: 'https://www.youtube.com/embed/Th7YG6-67Ms?si=nx0I6z__EtWTRp0F',
  },

  {
    title: 'Project Sky Arc',
    category: 'VFX & CGI Videos',
    image: '/assets/images/portfolio/vfx-cgivideo-1.jpg',
    description: 'A visually stunning campaign that showcases the beauty of our product in a futuristic world',
    youtubeUrl: 'https://www.youtube.com/embed/GySzTAFRzS8?si=-tgwGt1U1kaCuTXs',
  },

  // 2D Explainer Videos
  {
    title: 'Project Sky Arc',
    category: '2D Explainer Video',
    image: '/assets/images/portfolio/2d-explainer-video-1.jpg',
    description: 'A captivating narrative that weaves together the threads of imagination and innovation',
    youtubeUrl: 'https://www.youtube.com/embed/JM9bCHdZ_LA?si=SnZpotFBxi7aZaw3',
  },

  {
    title: 'Dubai Cream Explainer', 
    category: '2D Explainer Video',
    image: '/assets/images/portfolio/2d-explainer-video-1.jpg',
    description: 'A visually stunning campaign that showcases the beauty of our product in a futuristic world',
    youtubeUrl: 'https://www.youtube.com/embed/2LhaLXd8zGo?si=6pR1Bmz_sDAJthlG',
  }




];




export { categories, portfolioItems };
