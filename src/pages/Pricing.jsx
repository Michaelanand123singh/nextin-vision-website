import { pricingData } from '../data/pricingData';
import SectionTitle from '../components/common/SectionTitle';
import FAQ from '../components/common/FAQ';

export default function Pricing() {
  return (
    <div className="pt-20 bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-[url('/assets/images/hero/pricing-hero.jpg')] h-[500px] flex items-center">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="bg-black/50 p-8 rounded-lg max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              Premium Video Editing Services
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Discover transparent pricing plans designed for maximum value and professional results.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-transform transform hover:-translate-y-1 duration-300"
            >
              Get a Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionTitle
            subtitle="Our Pricing"
            title="Transparent Plans, Exceptional Value"
            description="Select from a variety of professional packages that cater to your video production needs."
            center
          />

          {pricingData.map((category, index) => (
            <div key={index} className="mt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">{service.name}</h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Price:</strong> {service.price}
                    </p>
                    <p className="text-gray-500">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Packages */}
      <section className="section bg-gray-100 py-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <SectionTitle
            subtitle="Custom Packages"
            title="Tailored Solutions for Unique Needs"
            description="If our standard packages don’t fit your requirements, reach out to us for a customized solution."
            center
          />
          <p className="mt-6 text-gray-600">
            Contact us today to create a bespoke package tailored to your business goals and video needs.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-transform transform hover:-translate-y-1 duration-300"
          >
            Request a Custom Quote
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionTitle
            subtitle="Have Questions?"
            title="Frequently Asked Questions"
            description="Find answers to the most common questions about our services and pricing."
            center
          />
          <FAQ />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-purple-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Let’s Create Something Amazing Together</h2>
          <p className="text-lg mb-8">Reach out to us today and elevate your brand with our video solutions.</p>
          <a
            href="/contact"
            className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
}
