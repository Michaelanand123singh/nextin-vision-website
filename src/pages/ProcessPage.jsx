import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  PenTool, 
  Video, 
  BarChart, 
  CheckCircle,
  ArrowRight,
  ChevronRight 
} from 'lucide-react';

const SectionTitle = ({ subtitle, title, description, center }) => (
  <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
    <span className="text-primary font-semibold tracking-wider uppercase text-sm">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">{title}</h2>
    {description && (
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
    )}
  </div>
);

const ProcessSteps = () => {
  const steps = [
    {
      title: 'Discovery & Strategy',
      content: [
        'Initial consultation with the client to understand their needs.',
        'Analyzing target audience and developing a strategy.',
        'Setting clear project goals and timelines.'
      ]
    },
    {
      title: 'Concept & Scripting',
      content: [
        'Brainstorming and ideation of the concept.',
        'Developing the script and storyline with client feedback.',
        'Creating a mood board and visual direction.'
      ]
    },
    {
      title: 'Filming & Production',
      content: [
        'Filming the video with professional equipment.',
        'On-site direction and coordination with the talent.',
        'Utilizing motion graphics and special effects.'
      ]
    },
    {
      title: 'Editing & Post-Production',
      content: [
        'Editing raw footage to craft a compelling narrative.',
        'Adding sound design, music, and voiceover.',
        'Color grading and final touch-ups for a polished look.'
      ]
    },
    {
      title: 'Review & Feedback',
      content: [
        'Presenting the rough cut to the client for feedback.',
        'Making necessary revisions and incorporating feedback.',
        'Final approval from the client before the project completion.'
      ]
    },
    {
      title: 'Delivery & Optimization',
      content: [
        'Delivering the final video in multiple formats.',
        'Optimizing content for various platforms (social media, websites).',
        'Setting up analytics for performance tracking.'
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <SectionTitle
          subtitle="Our Workflow"
          title="Step-by-Step Process"
          description="We follow a structured workflow that ensures every video is produced to the highest standards."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-primary font-bold text-xl">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <ul className="space-y-4">
                {step.content.map((item, stepIndex) => (
                  <li key={stepIndex} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 w-5 h-5 shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessPage = () => {
  const deliverables = [
    'High-quality video files optimized for different platforms',
    'Detailed analytics and performance tracking setup',
    'Raw footage and project files (upon request)',
    'Social media cutdowns and variations',
    'Comprehensive usage rights and licensing'
  ];

  const advantages = [
    {
      icon: Search,
      title: 'Thorough Discovery',
      description: 'We dive deep into understanding your brand, goals, and target audience to create content that resonates.'
    },
    {
      icon: PenTool,
      title: 'Creative Excellence',
      description: 'Our experienced team crafts compelling narratives and visually stunning content that captures attention.'
    },
    {
      icon: Video,
      title: 'Production Quality',
      description: 'Using top-tier equipment and techniques to ensure professional-grade output every time.'
    },
    {
      icon: BarChart,
      title: 'Results Focused',
      description: 'We measure success through concrete metrics and optimize content for maximum impact.'
    }
  ];

  const detailedPhases = [
    {
      phase: "Discovery Phase",
      steps: [
        "Initial consultation and goal setting",
        "Target audience analysis",
        "Content strategy development",
        "Budget and timeline planning"
      ]
    },
    {
      phase: "Creative Planning",
      steps: [
        "Concept development and ideation",
        "Storyboarding and visual direction",
        "Script writing and refinement",
        "Production schedule creation"
      ]
    },
    {
      phase: "Production",
      steps: [
        "Professional filming and direction",
        "Motion graphics and animation",
        "Sound design and music selection",
        "Color grading and final touches"
      ]
    },
    {
      phase: "Review & Optimization",
      steps: [
        "Client feedback integration",
        "Platform-specific optimization",
        "Analytics setup and tracking",
        "Performance monitoring"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="container relative px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Our Production Process
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              A strategic, results-driven approach to creating impactful corporate videos
              that deliver measurable results.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-semibold"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <ProcessSteps />

      {/* Detailed Process Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <SectionTitle
            subtitle="Workflow"
            title="Detailed Production Phases"
            description="Each phase is carefully designed to ensure quality, efficiency, and success."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {detailedPhases.map((phase, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-primary/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">{phase.phase}</h3>
                <ul className="space-y-4">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-1 w-5 h-5 shrink-0" />
                      <span className="text-gray-600 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container px-4 mx-auto">
          <SectionTitle
            subtitle="Why Choose Us"
            title="Our Advantages"
            description="What sets our production process apart from others"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <advantage.icon className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-12 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
                What You'll Receive
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-white shrink-0" />
                    <span className="text-blue/90">{item}</span>
                  </div>
                ))}
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-primary-100 transition-colors duration-300 font-semibold"
              >
                Schedule a Call
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;