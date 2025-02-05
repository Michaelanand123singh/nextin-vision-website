import { 
    Globe, 
    MessageSquare, 
    BarChart, 
    Layout, 
    TrendingUp, 
    Users, 
    Share2, 
    Award
  } from 'lucide-react';
  
  export const smma = {
    items: [
      {
        id: 's1',
        title: 'E-commerce Brand Growth Campaign',
        client: 'FashionFusion',
        description: 'Comprehensive social media campaign that increased online sales by 200% through targeted Instagram and Facebook ads',
        growth: 156,
        metrics: [
          { label: 'Reach', value: '1.2M' },
          { label: 'Engagement', value: '12.4%' },
          { label: 'Conversions', value: '2.8K' },
          { label: 'ROI', value: '324%' }
        ],
        category: 'Social Media Marketing',
        platforms: ['Instagram', 'Facebook', 'TikTok'],
        thumbnail: '/images/portfolio/smma/fashion-campaign.jpg'
      },
      {
        id: 's2',
        title: 'Restaurant Chain Local SEO',
        client: 'TasteMax',
        description: 'Local SEO optimization and social media management for a restaurant chain, resulting in 85% increase in foot traffic',
        growth: 85,
        metrics: [
          { label: 'Local Search Visibility', value: '+156%' },
          { label: 'Customer Reviews', value: '850+' },
          { label: 'Foot Traffic', value: '12K' },
          { label: 'ROI', value: '245%' }
        ],
        category: 'Local SEO',
        platforms: ['Google Business', 'Yelp', 'Instagram'],
        thumbnail: '/images/portfolio/smma/restaurant-seo.jpg'
      },
      {
        id: 's3',
        title: 'B2B Lead Generation',
        client: 'TechSolutions Pro',
        description: 'LinkedIn-focused B2B campaign generating qualified leads for SaaS product through content marketing and paid advertising',
        growth: 234,
        metrics: [
          { label: 'Qualified Leads', value: '450+' },
          { label: 'Conversion Rate', value: '8.2%' },
          { label: 'Cost per Lead', value: '$32' },
          { label: 'ROI', value: '478%' }
        ],
        category: 'B2B Marketing',
        platforms: ['LinkedIn', 'Twitter', 'Email'],
        thumbnail: '/images/portfolio/smma/b2b-leads.jpg'
      },
      {
        id: 's4',
        title: 'Influencer Marketing Campaign',
        client: 'HealthyLife',
        description: 'Coordinated influencer marketing campaign across Instagram and TikTok for health supplement launch',
        growth: 312,
        metrics: [
          { label: 'Influencer Posts', value: '45' },
          { label: 'Total Reach', value: '2.5M' },
          { label: 'Sales Generated', value: '$180K' },
          { label: 'ROI', value: '285%' }
        ],
        category: 'Influencer Marketing',
        platforms: ['Instagram', 'TikTok'],
        thumbnail: '/images/portfolio/smma/influencer-campaign.jpg'
      }
    ],
    stats: [
      { icon: Globe, title: "Total Reach", value: "5.2M", trend: 18.9 },
      { icon: MessageSquare, title: "Avg. Engagement", value: "12.4%", trend: 7.5 },
      { icon: BarChart, title: "Avg. ROI", value: "324%", trend: 25.8 },
      { icon: Layout, title: "Active Campaigns", value: "28", trend: 4.3 }
    ]
  };