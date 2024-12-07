// src/pages/About.jsx
import SectionTitle from '../components/common/SectionTitle';

const team = [
  {
    name: 'Anand Singh',
    role: 'Founder',
    image: '/assets/images/team/john.jpg',
  },
  {
    name: 'Ankit Raj',
    role: 'Creative Director Head',
    image: '/assets/images/team/jane.jpg',
  },
  // Add more team members
];

export default function About() {
  return (
    <div className="pt-20 bg-gray-100">
      <section className="section py-16">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="About Us"
            title="Our Story"
            description="We're passionate about creating impactful video content that drives results."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded with a vision to transform corporate communication, Nextin Vision
                has been at the forefront of video production excellence. We combine
                creativity with strategic thinking to deliver results that exceed
                expectations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team of experienced professionals brings diverse expertise in
                videography, storytelling, and digital marketing to every project.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Why Choose Us</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-lg font-bold">✓</span>
                  <span className="text-gray-700">Expert team with industry experience</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-lg font-bold">✓</span>
                  <span className="text-gray-700">Strategic approach to content creation</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-lg font-bold">✓</span>
                  <span className="text-gray-700">Focus on ROI and business results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white py-16">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Our Team"
            title="Meet the Experts"
            description="The talented people behind our success."
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
