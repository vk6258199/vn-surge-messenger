
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Join thousands of marketers who are already using VN Sender to create, customize, and 
              conquer their email marketing goals with unparalleled precision and creativity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/thank-you">
                <Button size="lg" className="gap-2">
                  <Download className="h-5 w-5" />
                  Download Now
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Compatible with Windows 10 and Windows 11
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
