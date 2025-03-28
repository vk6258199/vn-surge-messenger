
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Download, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="mb-8 flex justify-center">
            <div className="bg-primary/10 p-4 rounded-full">
              <Check className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Thank You for Your Purchase!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your VN Sender license has been activated successfully. You'll receive an email with your 
            download link and activation details shortly.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-10">
            <h2 className="text-2xl font-semibold mb-4">What's Next?</h2>
            <ul className="space-y-4 text-left mb-6">
              <li className="flex items-start">
                <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>Check your email for your license key and download instructions</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>Download and install VN Sender on your Windows computer</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>Activate your license using the provided key</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span>Explore our documentation to get started quickly</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                Download Now
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Mail className="mr-2 h-5 w-5" />
                Contact Support
              </Button>
            </div>
          </div>
          
          <Link to="/" className="text-primary hover:text-primary/80 inline-flex items-center font-medium">
            Return to Homepage
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
