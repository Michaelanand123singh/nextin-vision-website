// src/pages/Contact.jsx
import { MapPin, Phone, Mail, Clock, CheckCircle, MessageCircle } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/common/ContactForm';

export default function Contact() {
  return (
    <div className="pt-20">
      
      {/* WhatsApp Contact Section */}
      <section className="bg-green-100 py-8 mb-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-green-800">
              Prefer Messaging Us Directly?
            </h2>
            <p className="text-green-700 mt-2">
              Reach out to us instantly on WhatsApp for quick support!
            </p>
          </div>
          <a
            href="https://wa.me/7667925604" // Replace 'yourNumber' with your WhatsApp number in international format (e.g., 1234567890)
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Message Us on WhatsApp
          </a>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionTitle
                subtitle="Contact Us"
                title="Get in Touch"
                description="Ready to start your project? Contact us for a free consultation."
              />

              <div className="space-y-6 mt-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-600">Mayur Vihar</p>
                    <p className="text-gray-600">New Delhi, India</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600"></p>
                  </div>+91-7667925604
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info.nextinvision@gmail.com</p>
                    <p className="text-gray-600">official.nextinvision@gmail.com</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us Section */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Why Work With Us</h3>
                <div className="space-y-3">
                  {[
                    'Professional video production team',
                    'Quick response within 24 hours',
                    'Flexible scheduling and planning',
                    'Competitive pricing options',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="text-primary" size={20} />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle
            subtitle="FAQs"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services and process."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Most projects are completed within 2-4 weeks, depending on complexity and requirements."
              },
              {
                question: "Do you provide raw footage?",
                answer: "Yes, raw footage can be provided upon request as part of our premium packages."
              },
              {
                question: "What is your revision policy?",
                answer: "We offer up to 2 rounds of revisions with every project to ensure your complete satisfaction."
              },
              {
                question: "Do you travel for shoots?",
                answer: "Yes, we are available for both local and international shoots. Travel costs will be discussed beforehand."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
