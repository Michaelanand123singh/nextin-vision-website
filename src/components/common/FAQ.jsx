export default function FAQ() {
    const faqData = [
      {
        question: "What’s included in the video editing packages?",
        answer: "Our packages include editing, color grading, sound mixing, and other enhancements as listed.",
      },
      {
        question: "Can I request a custom package?",
        answer: "Yes! Contact us with your requirements, and we’ll create a custom package for you.",
      },
      {
        question: "What’s the typical turnaround time?",
        answer: "Turnaround depends on the project scope, but we strive to deliver within 7-10 business days.",
      },
    ];
  
    return (
      <div className="space-y-8">
        {faqData.map((faq, index) => (
          <div key={index}>
            <h4 className="text-xl font-semibold text-gray-800">{faq.question}</h4>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    );
  }
  