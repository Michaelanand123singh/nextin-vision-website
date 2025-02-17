const categories = [
  'All', 'Video Editing', 'VFX', 'Motion Graphics', 'Animation'
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