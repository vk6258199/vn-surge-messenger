
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Shield, Clock, BarChart } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-grid relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            <span className="block">Advanced Email Bulk Sender</span>
            <span className="block text-gradient">For Windows</span>
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-500 sm:mt-5">
            VN Sender isn't just another email-sending tool; it's a powerful application designed to revolutionize 
            how you engage with your audience through email campaigns.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Button size="lg" className="group">
              Download Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Mail className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Streamlined Bulk Emailing</h3>
            <p className="text-gray-500">Send thousands of personalized emails with ease and precision.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Smart Email Verification</h3>
            <p className="text-gray-500">Verify email domains before sending to ensure deliverability.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <BarChart className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Detailed Reporting</h3>
            <p className="text-gray-500">Gain valuable insights into your email campaigns with comprehensive analytics.</p>
          </div>
        </div>

        {/* App mockup */}
        <div className="mt-20 relative">
          <div className="relative mx-auto max-w-4xl">
            <div className="bg-gray-800 rounded-t-xl shadow-2xl overflow-hidden border-2 border-gray-700">
              <div className="h-8 bg-gray-900 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-gray-400 text-xs">VN Sender - Advanced Email Marketing</div>
              </div>
              {/* Mock interface */}
              <div className="h-[400px] bg-gradient-to-b from-gray-900 to-gray-800 p-6">
                <div className="grid grid-cols-4 gap-4 h-full">
                  <div className="col-span-1 bg-gray-800 rounded-lg border border-gray-700 p-3">
                    <div className="w-full h-8 bg-gray-700 rounded mb-3"></div>
                    <div className="w-full h-6 bg-gray-700 rounded mb-2"></div>
                    <div className="w-full h-6 bg-gray-700 rounded mb-2"></div>
                    <div className="w-full h-6 bg-gray-700 rounded mb-2"></div>
                    <div className="w-full h-6 bg-gray-700 rounded mb-2"></div>
                    <div className="w-3/4 h-6 bg-gray-700 rounded"></div>
                  </div>
                  <div className="col-span-3 bg-gray-800 rounded-lg border border-gray-700 p-3">
                    <div className="flex justify-between mb-4">
                      <div className="w-1/3 h-8 bg-primary rounded"></div>
                      <div className="w-1/4 h-8 bg-gray-700 rounded"></div>
                    </div>
                    <div className="w-full h-32 bg-gray-700 rounded mb-4"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-gray-700 rounded"></div>
                      <div className="h-20 bg-gray-700 rounded"></div>
                      <div className="h-20 bg-gray-700 rounded"></div>
                      <div className="h-20 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
