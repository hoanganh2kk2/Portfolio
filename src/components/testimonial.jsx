import T1 from "../assets/xinh1.jpg";
import T2 from "../assets/xinh2.jpg";
import T3 from "../assets/xinh3.jpg";
import T4 from "../assets/xinh4.jpg";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      position: "Assistant Manager",
      image: T1,
      testimonial: "Great service and professional team. Highly recommended!"
    },
    {
      id: 2,
      name: "Trần Thị B",
      position: "Senior Developer",
      image: T2,
      testimonial: "Excellent work quality and timely delivery. Amazing experience!"
    },
    {
      id: 3,
      name: "Lê Văn C",
      position: "Project Manager",
      image: T3,
      testimonial: "Outstanding results and great communication throughout the project."
    },
    {
      id: 4,
      name: "Phạm Thị D",
      position: "Tech Lead",
      image: T4,
      testimonial: "Professional, creative, and delivered beyond expectations."
    }
  ];

  const TestimonialCard = ({ testimonial }) => (
    <div className="relative rounded-xl overflow-auto p-4 lg:p-8 group">
      <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl hover:shadow-xl transition-all duration-300 group-hover:scale-105 dark:bg-slate-800 dark:ring-white/10">
        {/* Avatar */}
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="absolute -left-6 w-24 h-24 lg:w-28 lg:h-28 rounded-full shadow-lg object-cover border-4 border-white dark:border-slate-700 transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Content */}
        <div className="min-w-0 py-5 pl-20 lg:pl-28 pr-5">
          <div className="text-slate-900 font-semibold text-sm sm:text-base mb-1 dark:text-slate-200">
            {testimonial.name}
          </div>
          <div className="text-indigo-600 font-medium text-xs sm:text-sm mb-3 dark:text-indigo-400">
            {testimonial.position}
          </div>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed dark:text-slate-300">
            "{testimonial.testimonial}"
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-indigo-800 mx-4 lg:mx-20 my-20 rounded-2xl py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          What People Say
        </h2>
        <p className="text-indigo-200 text-lg max-w-2xl mx-auto px-4">
          Hear from our satisfied clients and partners
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 px-4 lg:px-8">
        {testimonialData.map((testimonial) => (
          <TestimonialCard 
            key={testimonial.id} 
            testimonial={testimonial} 
          />
        ))}
      </div>

      {/* Optional: Add a call-to-action */}
      <div className="text-center mt-12">
        <button className="bg-white text-indigo-800 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
          View All Reviews
        </button>
      </div>
    </section>
  );
};

export default Testimonial;