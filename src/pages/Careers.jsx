import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Target, Users, MapPin, Clock, DollarSign, 
  Star, Award, TrendingUp, Building, Heart, Coffee,
  Zap, Brain, Rocket, CheckCircle, ArrowRight, X,
  Briefcase, GraduationCap, Globe, Monitor, Database,
  Cpu, Smartphone, Cloud, Settings, Search, ExternalLink
} from 'lucide-react';

// Career data
const jobCategories = ['All', 'Engineering', 'AI/ML', 'Design', 'Marketing', 'Operations'];

const jobOpenings = [
  {
    "id": 1,
    "title": "Sales Executive Expert",
    "department": "Marketing",
    "location": "Remote / Hybrid",
    "type": "Part-Time",
    "experience": "3-5 years",
    "salary": "To be discussed",
    "posted": "2 days ago",
    "description": "Join NEXTIN VISION, a fast-growing IT company offering cutting-edge IT solutions and AI-based business automation services. We are seeking a motivated Sales Executive to market our services, build strong client relationships, and bring in quality leads to help expand our business.",
    "requirements": [
      "3-5 years of experience in sales or business development",
      "Strong understanding of IT services and business automation",
      "Excellent communication, negotiation, and interpersonal skills",
      "Proven ability to generate and convert leads independently",
      "Familiarity with CRM tools and digital marketing strategies"
    ],
    "skills": ["Sales", "Lead Generation", "IT Solutions", "Client Relationship Management", "CRM Tools"],
    "benefits": ["Remote Work", "Performance Incentives", "Flexible Hours", "Growth Opportunities"],
    "applyLink": "https://docs.google.com/forms/d/e/1FAIpQLScJ2dCwfPK0xZyWb-chu2-LluKvwbR2WQC37tGGD_L_xzmJdQ/viewform?usp=header",
    "featured": true
  },

  {
  "id": 2,
  "title": "SEO Expert",
  "department": "Digital Marketing",
  "location": "Remote / Hybrid",
  "type": "Part-Time",
  "experience": "2-4 years",
  "salary": "To be discussed",
  "posted": "Today",
  "description": "NEXTIN VISION is looking for a skilled SEO Expert to join our Digital Marketing team. You will be responsible for improving our website rankings, driving organic traffic, and optimizing content for search engines. If you have a passion for SEO strategies and staying ahead of algorithm updates, we want to hear from you.",
  "requirements": [
    "2-4 years of hands-on SEO experience",
    "Proficiency in tools like Google Analytics, Search Console, SEMrush, and Ahrefs",
    "Strong understanding of on-page, off-page, and technical SEO",
    "Experience with keyword research, backlink strategies, and content optimization",
    "Up-to-date with the latest SEO trends and algorithm changes"
  ],
  "skills": ["SEO", "Keyword Research", "Technical SEO", "Google Analytics", "Content Optimization"],
  "benefits": ["Remote Work", "Flexible Timing", "Performance Bonuses", "Skill Development Support"],
  "featured": true
},

{
  "id": 3,
  "title": "Full Stack Developer",
  "department": "Engineering",
  "location": "Remote / Hybrid",
  "type": "Full-Time",
  "experience": "3-5 years",
  "salary": "To be discussed",
  "posted": "Today",
  "description": "NEXTIN VISION is hiring a skilled Full Stack Developer to build scalable and efficient web applications. You'll work on both frontend and backend components using modern frameworks and cloud technologies.",
  "requirements": [
    "3-5 years of full stack development experience",
    "Proficiency in React.js, Node.js, and TypeScript",
    "Experience with MongoDB or PostgreSQL",
    "Familiarity with AWS or other cloud platforms",
    "Strong debugging and problem-solving skills"
  ],
  "skills": ["React.js", "Node.js", "TypeScript", "MongoDB", "AWS", "API Integration"],
  "benefits": ["Remote Work", "Flexible Hours", "Project Bonuses", "Learning Budget"],
  "featured": true
},

{
  "id": 4,
  "title": "Frontend Developer",
  "department": "Engineering",
  "location": "Remote / Hybrid",
  "type": "Full-Time",
  "experience": "2-4 years",
  "salary": "To be discussed",
  "posted": "Today",
  "description": "NEXTIN VISION is seeking a talented Frontend Developer to create clean, responsive, and user-friendly interfaces. You will work closely with our design and backend teams to deliver seamless user experiences.",
  "requirements": [
    "2-4 years of frontend development experience",
    "Strong proficiency in React.js and modern JavaScript",
    "Experience with responsive design and cross-browser compatibility",
    "Familiarity with RESTful APIs and state management (Redux/Zustand)",
    "Basic understanding of UI/UX principles"
  ],
  "skills": ["React.js", "HTML", "CSS", "JavaScript", "Redux", "UI/UX"],
  "benefits": ["Remote Work", "Flexible Schedule", "Team Collaboration", "Learning Support"],
  "featured": true
},

{
  "id": 5,
  "title": "Project Manager",
  "department": "Operations",
  "location": "Remote / Hybrid",
  "type": "Full-Time",
  "experience": "4-6 years",
  "salary": "To be discussed",
  "posted": "Today",
  "description": "NEXTIN VISION is looking for a result-driven Project Manager to oversee our IT and AI projects from conception to delivery. The ideal candidate will have excellent communication skills and strong leadership abilities to coordinate between cross-functional teams.",
  "requirements": [
    "4-6 years of project management experience in IT or software development",
    "Familiarity with Agile/Scrum methodologies",
    "Excellent communication and organizational skills",
    "Experience in managing remote teams",
    "Proficiency with project management tools like Jira, Trello, or Asana"
  ],
  "skills": ["Project Management", "Agile", "Scrum", "Team Leadership", "Risk Management"],
  "benefits": ["Remote Work", "Leadership Role", "Performance Bonuses", "Career Growth"],
  "featured": true
},


  
];

const companyStats = [
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Globe, value: "25+", label: "Countries" },
  { icon: Building, value: "100+", label: "Clients Served" },
  { icon: Award, value: "4.8/5", label: "Employee Rating" }
];


const benefits = [
  { icon: Monitor, title: "Remote-First Culture", description: "Work from anywhere with flexible hours" },
  { icon: GraduationCap, title: "Learning & Development", description: "$2000 annual learning budget" },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance" },
  { icon: Coffee, title: "Work-Life Balance", description: "Unlimited PTO and mental health days" },
  { icon: DollarSign, title: "Competitive Compensation", description: "Market-rate salaries plus equity" },
  { icon: Rocket, title: "Growth Opportunities", description: "Clear career progression paths" }
];

const Career = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showJobModal, setShowJobModal] = useState(false);

  const filteredJobs = useMemo(() => {
    return activeCategory === 'All' 
      ? jobOpenings 
      : jobOpenings.filter(job => job.department === activeCategory);
  }, [activeCategory]);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setShowJobModal(true);
  };

  const handleCloseModal = () => {
    setShowJobModal(false);
    setSelectedJob(null);
  };

  const handleApplyClick = (applyLink) => {
    window.open(applyLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-hidden">
      {/* Enhanced Animated Background Effects */}
      <div className="fixed inset-0">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-orange-600/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 120, 0],
            y: [0, 80, -60, 0],
            scale: [1, 0.7, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 right-20 w-72 h-72 bg-gradient-to-l from-amber-500/10 via-orange-400/15 to-yellow-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative pt-16 px-4 pb-8 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="mt-8 text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundSize: '200% 100%',
            }}
          >
            Join NEXTIN VISION
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-300/85 max-w-2xl mx-auto leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Shape the future of business automation with cutting-edge AI and software solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500/20 to-amber-500/15 border border-orange-500/30 backdrop-blur-sm"
          >
            <Building className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-medium">Remote-First • Global Team • Innovative Culture</span>
          </motion.div>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {companyStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl p-5 rounded-xl border border-gray-700/40 hover:border-orange-500/30 transition-all duration-500 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="flex justify-center mb-3"
              >
                <stat.icon className="w-6 h-6 text-orange-400" />
              </motion.div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Job Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {jobCategories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * index, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-400 backdrop-blur-xl border ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/15 text-white border-orange-500/40'
                  : 'bg-gray-800/40 text-gray-300 border-gray-700/40 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/5 rounded-lg -z-10"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Job Listings */}
        <motion.div layout className="space-y-4 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.01, y: -2 }}
                  onClick={() => handleJobClick(job)}
                  className={`group relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl p-6 rounded-xl border border-gray-700/40 hover:border-orange-500/30 transition-all duration-500 cursor-pointer ${
                    job.featured ? 'ring-1 ring-orange-500/20' : ''
                  }`}
                >
                  {job.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                    >
                      Featured
                    </motion.div>
                  )}
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                        >
                          <Briefcase className="w-6 h-6 text-orange-400" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                            <span className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              {job.salary}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                            {job.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-xs text-gray-500">{job.posted}</div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-lg"
                      >
                        <ArrowRight className="w-5 h-5 text-orange-400" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-xl p-8 border border-gray-700/50">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">No Positions Available</h3>
                  <p className="text-gray-400">Check back soon for new opportunities in this category.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-6 rounded-xl border border-gray-700/40 hover:border-orange-500/30 transition-all duration-500"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center mb-4"
                >
                  <benefit.icon className="w-6 h-6 text-orange-400" />
                </motion.div>
                <h3 className="text-white font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Job Details Modal */}
        <AnimatePresence>
          {showJobModal && selectedJob && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              onClick={handleCloseModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative bg-gradient-to-br from-gray-900/98 to-gray-800/98 backdrop-blur-2xl rounded-2xl p-8 w-full max-w-3xl max-h-[85vh] overflow-y-auto border border-gray-700/50"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  onClick={handleCloseModal}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/50 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>

                <div className="mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-2">{selectedJob.title}</h2>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {selectedJob.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {selectedJob.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {selectedJob.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400 rounded-lg text-sm font-medium border border-orange-500/30">
                          {selectedJob.salary}
                        </span>
                        <span className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-lg text-sm border border-gray-700/30">
                          {selectedJob.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">{selectedJob.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* Requirements */}
                  <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-6 rounded-xl border border-gray-700/50">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills & Benefits */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-6 rounded-xl border border-gray-700/50">
                      <h4 className="text-white font-bold mb-4">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedJob.skills.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400 rounded-lg text-sm border border-orange-500/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl p-6 rounded-xl border border-gray-700/50">
                      <h4 className="text-white font-bold mb-4">Benefits</h4>
                      <div className="space-y-2">
                        {selectedJob.benefits.map((benefit, index) => (
                          <div key={index} className="text-gray-300 text-sm flex items-center gap-2">
                            <Star className="w-4 h-4 text-orange-400" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <motion.button
                    onClick={() => handleApplyClick(selectedJob.applyLink)}
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 px-8 rounded-xl font-medium transition-all duration-500 shadow-xl flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Career;