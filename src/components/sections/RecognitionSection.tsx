import React from 'react';
import { Star } from 'lucide-react';

const RecognitionSection = () => {
  const awards = [
    {
      title: "Regional Leader",
      subtitle: "G2 Spring 2024",
      gradient: "from-purple-400 via-purple-500 to-pink-400"
    },
    {
      title: "Regional Leader", 
      subtitle: "Software Advice 2024",
      gradient: "from-violet-400 via-purple-500 to-indigo-400"
    },
    {
      title: "Grid Leader",
      subtitle: "G2 Summer 2024", 
      gradient: "from-orange-400 via-red-400 to-pink-400"
    },
    {
      title: "Best Innovation in Chatbots",
      subtitle: "CogX Awards",
      gradient: "from-blue-400 via-indigo-500 to-purple-500"
    },
    {
      title: "Best Conversational Tool",
      subtitle: "MarTech Breakthrough Awards",
      gradient: "from-pink-400 via-purple-500 to-violet-400"
    },
    {
      title: "Best Conversational AI Platform", 
      subtitle: "AI Breakthrough Awards",
      gradient: "from-cyan-400 via-blue-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Recognized as a Leading Software Across Categories
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl shadow-sm border border-border/50 p-6 text-center hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer backdrop-blur-sm"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${award.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                <div className="w-10 h-10 bg-white/95 rounded-xl flex items-center justify-center shadow-inner">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-base text-foreground mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                {award.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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