
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Clock, Users, BarChart, ChevronRight } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    "Support for unlimited messages and mail lists",
    "Unlimited SMTP server configurations",
    "Smart domain and email verification",
    "Efficient personalized messaging at scale",
    "Comprehensive reporting and analytics",
    "Export reports in Excel format",
    "Flexible message delay management",
    "User-friendly modern interface",
    "Complete documentation included",
    "Dynamic variable insertion",
    "Intuitive pause and resume functionality",
    "Advanced Spintax support"
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-gradient">VN Sender?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              VN Sender isn't just another email-sending tool; it's a comprehensive solution designed to elevate 
              your email marketing to new heights of efficiency and effectiveness.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="ml-3 text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="group">
              Get Started Today
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="flex items-start">
                <div className="p-4 bg-primary/10 rounded-xl mr-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Save Time & Effort</h3>
                  <p className="text-gray-600">
                    Automate your email marketing campaigns and reclaim hours of manual work each week.
                    VN Sender handles the repetitive tasks while you focus on strategy.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="flex items-start">
                <div className="p-4 bg-primary/10 rounded-xl mr-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Improve Engagement</h3>
                  <p className="text-gray-600">
                    Craft personalized, targeted messages that resonate with your audience.
                    Dynamic variables and Spintax support ensure each email feels unique.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="flex items-start">
                <div className="p-4 bg-primary/10 rounded-xl mr-4">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Maximize Results</h3>
                  <p className="text-gray-600">
                    Track campaign performance with detailed analytics and reporting.
                    Use these insights to refine your approach and boost your success rate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
