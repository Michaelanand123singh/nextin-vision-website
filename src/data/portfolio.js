import { title } from "framer-motion/client";

const categories = [
  'All', 'Video Editing', 'VFX', 'Motion Graphics', 'Animation', 'CGIs',
];

const portfolio = {
  items: [
    // Brand Story
    {
      id: 'brand-1',
      title: 'Tech Company Brand Story',
      category: 'Video Editing',
      image: '/assets/images/portfolio/brand-1.jpg',
      description: 'A compelling brand story for a leading tech company.',
      youtubeUrl: 'https://www.youtube.com/embed/9uY_VEFGPUA?si=rXf3ufVwexWvUlu5'
    },
    {
      id: 'brand-2',
      title: 'Founder Story',
      category: 'Video Editing',
      image: '/assets/images/portfolio/brand-2.jpg',
      description: 'A founder story for a leading tech company.',
      youtubeUrl: 'https://www.youtube.com/embed/8sG6rWT6HjI?si=0IPgoj67bI0wUt-R'
    },
    {
      id: 'brand-3',
      title: 'Seeds of Innovation',
      category: 'Video Editing',
      image: '/assets/images/portfolio/founding-vision.jpg',
      description: 'Explore the inspiring journey of our founders\' initial vision, tracing how a bold idea transformed into a groundbreaking enterprise.',
      youtubeUrl: 'https://www.youtube.com/embed/8sG6rWT6HjI?si=TttrND7BKWukZas0'
    },
    {
      id: 'brand-4',
      title: 'From Dream to Reality',
      category: 'Video Editing',
      image: '/assets/images/portfolio/company-origins.jpg',
      description: 'Uncover the compelling narrative of our company\'s inception, highlighting the challenges, breakthroughs, and pivotal moments that shaped our early years.',
      youtubeUrl: 'https://www.youtube.com/embed/CQe1IQ0zjqc?si=m60TnNS7cxA68_dk'
    },

    // Motion Graphics & Animation
    {
      id: 'motion-1',
      title: 'Project Tramontia',
      category: 'Motion Graphics',
      image: '/assets/images/portfolio/motion-1.jpg',
      description: 'Engaging animations that break down complex concepts into easy-to-understand visualizations',
      youtubeUrl: 'https://www.youtube.com/embed/BWtajwT6Weg?si=Ynf3B1bJ4qfBZvOA'
    },
    {
      id: 'motion-2',
      title: 'Website Explainer animation',
      category: 'Motion Graphics',
      image: '/assets/images/portfolio/motion-2.jpg',
      description: 'Website explainer animation videos 2D/ 3D',
      youtubeUrl: 'https://www.youtube.com/embed/JM9bCHdZ_LA?si=5HfsU8jX92hB1JxA'
    },
    {
      id: 'motion-3',
      title: 'website explainer videos',
      category: 'Motion Graphics',
      image: '/assets/images/portfolio/motion-3.jpg',
      description: 'Website explainer videos 2D/ 3D',
      youtubeUrl: 'https://www.youtube.com/embed/2LhaLXd8zGo?si=ifzbwh1rlYCfMKT2'
    },
    {
      id: 'motion-4',
      title: 'Product Explainer Video 2D/ 3D',
      category: 'Motion Graphics',
      image: '/assets/images/portfolio/motion-4.jpg',
      description: 'Product explainer video 2D/ 3D Rubber products',
      youtubeUrl: 'https://www.youtube.com/embed/EuYBw4Hgh2c?si=5I0YK1cClQvKovH2'
    },
    {
      id: 'motion-5',
      title: 'Plannado Product Explainer Video 2D/ 3D',
      category: 'Motion Graphics',
      image: '/assets/images/portfolio/motion-5.jpg',
      description: 'Plannado product explainer video 2D/ 3D',
      youtubeUrl: 'https://www.youtube.com/embed/eAN7oR7nCU0?si=guMo6bj7eVryhjg_'
    },


    // Animation 2D/ 3D
    {
      id: 'motion-2',
      title: 'Project Porter',
      category: 'Animation',
      image: '/assets/images/portfolio/motion-1.jpg',
      description: 'A mesmerizing visual journey that transports viewers to a world of wonder and discovery',
      youtubeUrl: 'https://www.youtube.com/embed/_0JlqhxRx3Q?si=gA6WGJ9rrKur2vGZ'
    },
    {
      id: 'motion-3',
      title: 'Project Lumina',
      category: 'Motion Graphics',
      image: '/assets/images/portfolio/motion-1.jpg',
      description: 'A captivating narrative that weaves together the threads of imagination and innovation',
      youtubeUrl: 'https://www.youtube.com/embed/f6aKWrDJ3CM?si=fCvjekAQZRkksy-k',
    },
    {
      id: 'motion-4',
      title: '3D Product Animation Video',
      category: 'Animation',
      image: '/assets/images/portfolio/motion-1.jpg',
      description: 'A 3D Product Animation videos of a can with floating ice cubes',
      youtubeUrl: 'https://www.youtube.com/embed/Im7tcILP2Wg?si=D9mg3-ukqLCq6GxY'
    },
    {
      id: 'motion-5',
      title: 'Product Animation Samples',
      category: 'Animation',
      image: '/assets/images/portfolio/motion-1.jpg',
      description: 'A 3D Product Animation videos of a floating can',
      youtubeUrl: 'https://www.youtube.com/embed/Lfafs86hvac?si=HG9nxnw4AGhPAptO'
    },
    {
      id: 'motion-6',
      title: 'Product Animation 2',
      category: 'Animation',
      image: '/assets/images/portfolio/motion-1.jpg',
      description: 'Peoduct ANimation of Pharma Related product',
      youtubeUrl: 'https://www.youtube.com/embed/jFX3adSf5YY?si=fT8MEEeChmgB7EIn'
    },
    {
      id: 'motion-7',
      title: 'Product Animation 3',
      category: 'Animation',
      image: '/assets/images/portfolio/motion-1.jpg',
      description: '3D Product Animation of Beans along with the movement',
      youtubeUrl: 'https://www.youtube.com/embed/TdXNeuessqQ?si=FRkCbASxt6TyTD-P'
    },

    {
      id: 'motion-8',
      title: 'Commerical Product animation of Chips',
      category: 'Animation',
      image: '/assets/images/portfolio/motion-1.jpg', 
      description: 'Chips commerical 3D product Animation',
      youtubeUrl: 'https://www.youtube.com/embed/dCYYhTiXX4M?si=OclYHp8sDCb8QAKQ'
    },
    {
      id: 'motion-9',
      title: 'Product Animation 4',
      category: 'Animation',
      image: '/assets/images/portfolio/motion-1.jpg',
      description: 'Product ANimation of Juice 2D/ 3D',
      youtubeUrl: 'Product animation of Juice'
    },
    {
      id: 'motion-10',
      title: 'Product Animation 5',
      category: 'Animation',
      image: '/assets/images/portfolio/motion-1.jpg',
      description: 'Commerical 3D Product ANiation',
      youtubeUrl: 'https://www.youtube.com/embed/bD8WiKJokEw?si=2DrOxwccnabvkGTO'
    },

    // VFX
    {
      id: 'vfx-1',
      title: 'Project Aurora',
      category: 'VFX',
      image: '/assets/images/portfolio/cg-ad-1.jpg',
      description: 'A visually stunning campaign that showcases the beauty of our product in a futuristic world',
      youtubeUrl: 'https://www.youtube.com/embed/pp7WBN5c0-c?si=4vBICjyLag5OFwzg',
    },
    {
      id: 'vfx-2',
      title: 'Project Nova',
      category: 'VFX',
      image: '/assets/images/portfolio/cg-ad-1.jpg',
      description: 'A captivating narrative that transports viewers to a world of wonder and discovery',
      youtubeUrl: 'https://www.youtube.com/embed/Lku978C7MVk?si=CzBB8aO_ECB4VK4z',
    },
    {
      id: 'vfx-3',
      title: 'Head & Shoulder VFX',
      category: 'VFX',
      image: '/assets/images/portfolio/cg-ad-1.jpg',
      description: 'A visually stunning campaign that showcases the beauty of our product in a futuristic world',
      youtubeUrl: 'https://www.youtube.com/embed/hs2eBxJEG8w?si=sBi3o5uIMC1E1vDk',
    }
  ],
  stats: [
    {
      label: 'Projects Completed',
      value: '150+'
    },
    {
      label: 'Client Satisfaction',
      value: '98%'
    },
    {
      label: 'Video Views',
      value: '10M+'
    }
  ]
};

export { categories, portfolio };