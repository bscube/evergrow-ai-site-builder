import React from 'react';

const RecognitionSection = () => {
  const awards = [
    {
      title: "Regional Leader",
      subtitle: "G2 Spring 2024",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Regional Leader", 
      subtitle: "Software Advice 2024",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Grid Leader",
      subtitle: "G2 Summer 2024", 
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Best Innovation in Chatbots",
      subtitle: "CogX Awards",
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Best Conversational Tool",
      subtitle: "MarTech Breakthrough Awards",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Best Conversational AI Platform", 
      subtitle: "AI Breakthrough Awards",
      color: "from-cyan-400 to-blue-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recognized as a Leading Software Across Categories
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow duration-300 w-full max-w-[180px]"
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${award.color} flex items-center justify-center`}>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-700">★</span>
                </div>
              </div>
              <h3 className="font-semibold text-sm text-gray-900 mb-1">
                {award.title}
              </h3>
              <p className="text-xs text-gray-600">
                {award.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;