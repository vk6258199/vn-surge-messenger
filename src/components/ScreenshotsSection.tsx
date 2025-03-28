
import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Laptop 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScreenshotsSection = () => {
  // Normally these would be actual screenshots of the app
  const screenshots = [
    {
      title: "Campaign Dashboard",
      description: "Overview of all your email campaigns with performance metrics.",
    },
    {
      title: "Email Editor",
      description: "Create beautiful, personalized emails with our intuitive editor.",
    },
    {
      title: "SMTP Configuration",
      description: "Easily manage and test your SMTP server settings.",
    },
    {
      title: "Analytics Dashboard",
      description: "Detailed insights into campaign performance and recipient engagement.",
    }
  ];

  return (
    <section id="screenshots" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className="text-gradient">VN Sender</span> in Action
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Take a closer look at the powerful features and intuitive interface of VN Sender.
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 z-10">
            <Button variant="outline" size="icon" className="rounded-full bg-white shadow-md">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10">
            <Button variant="outline" size="icon" className="rounded-full bg-white shadow-md">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Screenshots carousel */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-4 overflow-hidden">
            {screenshots.map((screenshot, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-purple-500/10 p-6 flex items-center justify-center">
                  <div className="w-full h-full bg-gray-800 rounded-md flex items-center justify-center border-4 border-gray-700 shadow-lg">
                    <Laptop className="w-20 h-20 text-gray-600" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{screenshot.title}</h3>
                  <p className="text-gray-600">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile navigation dots */}
          <div className="flex items-center justify-center mt-8 md:hidden">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
