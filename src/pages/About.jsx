import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { Award, Target, Globe, FileText, Zap, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Anand Singh',
    role: 'Founder & CEO',
    image: 'assets/Portfolio/Team/Anand.svg',
    bio: 'Visionary leader with 5+ years of experience in digital media and strategic communication.',
  },
  {
    name: 'Aditya Kumar',
    role: 'Creative Director',
    image: '/assets/images/team/jane.jpg',
    bio: 'Award-winning creative professional specializing in innovative visual storytelling.',
  },
  {
    name: 'Ankit Raj',
    role: 'Art Director',
    image: '/assets/images/team/sarah.jpg',
    bio: 'Expert in developing data-driven content strategies that drive engagement and conversions.',
  }
];

const achievements = [
  {
    icon: <Award className="w-10 h-10 text-orange-500" />,
    title: 'Industry Awards',
    description: 'Multiple international recognitions for creative excellence and innovative storytelling.'
  },
  {
    icon: <Globe className="w-10 h-10 text-orange-500" />,
    title: 'Global Reach',
    description: 'Serving clients across 15+ countries with world-class video production services.'
  },
  {
    icon: <Zap className="w-10 h-10 text-orange-500" />,
    title: 'Rapid Delivery',
    description: 'Efficient workflow ensuring high-quality content delivered within agreed timelines.'
  }
];

export default function About() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-orange-900 to-black">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-500">
            Nextin Vision
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-12">
            Transforming Corporate Narratives Through Innovative Visual Storytelling
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/Portfolio">
            <button className="px-8 py-3 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-400 transition-all duration-300 transform hover:scale-105">
              Our Portfolio
            </button>
            </Link>
            <Link href="/Contact">
            <button className="px-8 py-3 border-2 border-orange-500 text-white rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>

      {/* About Us Section */}
      <section className="section py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionTitle
                subtitle="Our Journey"
                title="Crafting Visual Stories"
                textColor="text-white"
                subtitleColor="text-orange-500"
              />
              <p className="text-gray-300 leading-relaxed">
                Nextin Vision emerged from a passion to revolutionize corporate communication. 
                We believe in the power of visual storytelling to connect, inspire, and drive meaningful change.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our multidisciplinary team combines strategic insights, creative expertise, 
                and cutting-edge technology to deliver compelling video content that resonates.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-orange-900 p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-white">Our Core Values</h3>
              <ul className="space-y-6">
                {[
                  { icon: <Target className="w-8 h-8 text-orange-500" />, text: 'Innovation-Driven Approach' },
                  { icon: <Brain className="w-8 h-8 text-orange-500" />, text: 'Collaborative Creative Process' },
                  { icon: <FileText className="w-8 h-8 text-orange-500" />, text: 'Transparent Client Engagement' }
                ].map((value, index) => (
                  <li key={index} className="flex items-center space-x-4 group">
                    {value.icon}
                    <span className="text-gray-300 group-hover:text-white transition-colors">{value.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section py-24 bg-gradient-to-br from-black via-orange-900/10 to-black">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Our Impact"
            title="Proven Excellence"
            textColor="text-white"
            subtitleColor="text-orange-500"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-black/50 border border-orange-900 p-8 rounded-xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-orange-500"
              >
                <div className="flex justify-center mb-6">{achievement.icon}</div>
                <h4 className="text-2xl font-semibold mb-4 text-white">{achievement.title}</h4>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-black py-24">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Meet the Team"
            title="Creative Minds Behind Nextin Vision"
            textColor="text-white"
            subtitleColor="text-orange-500"
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {team.map((member) => (
              <div 
                key={member.name} 
                className="bg-gradient-to-br from-gray-900 to-black border border-orange-900 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-4 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2 text-white">{member.name}</h3>
                  <p className="text-orange-500 mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}