
import React from 'react';
import { 
  Mail, Users, Server, BarChart3, RefreshCw, CheckCircle, 
  Clock, Settings, FileText, Loader2, Zap, Globe, 
  FileSpreadsheet, Variable, PauseCircle, Shuffle
} from 'lucide-react';

const Feature = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="flex flex-col lg:flex-row items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="flex-shrink-0">
      <div className="p-2 bg-primary/10 rounded-lg">
        <Icon className="h-6 w-6 text-primary" />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: Mail,
      title: "Streamlined Bulk Emailing",
      description: "Send thousands of personalized emails with ease and precision, automating the entire process."
    },
    {
      icon: Users,
      title: "Seamless Importing",
      description: "Import your contacts from text or CSV files effortlessly, saving time and eliminating manual entry."
    },
    {
      icon: FileText,
      title: "Dynamic Message Creation",
      description: "Create compelling emails with or without attachments using an intuitive message creation interface."
    },
    {
      icon: Server,
      title: "Advanced SMTP Management",
      description: "Take full control of your SMTP servers with comprehensive management and testing capabilities."
    },
    {
      icon: Settings,
      title: "Campaign Customization",
      description: "Run multiple campaigns simultaneously, each using different SMTP servers for maximum flexibility."
    },
    {
      icon: BarChart3,
      title: "Detailed Reporting",
      description: "Access comprehensive campaign analytics to optimize strategies and maximize your results."
    },
    {
      icon: RefreshCw,
      title: "SMTP Rotation",
      description: "Enhance deliverability by sending emails from the same campaign using different servers."
    },
    {
      icon: CheckCircle,
      title: "Smart Email Verification",
      description: "Verify email domains before sending to ensure your messages reach legitimate recipients."
    },
    {
      icon: Clock,
      title: "Customizable Sending Intervals",
      description: "Define time intervals between emails for precise control over your outreach efforts."
    },
    {
      icon: Loader2,
      title: "SMTP Tester Tool",
      description: "Validate your SMTP server settings in real-time to ensure proper functionality."
    },
    {
      icon: Zap,
      title: "Blacklist Emails Functionality",
      description: "Easily manage unwanted contacts with integrated blacklist capabilities."
    },
    {
      icon: Globe,
      title: "Mail List Filter By Country",
      description: "Target specific audiences by filtering your email list based on geographical location."
    },
    {
      icon: Variable,
      title: "Insert Dynamic Variables",
      description: "Personalize your emails with dynamic content that changes for each recipient."
    },
    {
      icon: PauseCircle,
      title: "Pause and Resume Functionality",
      description: "Control your campaigns by pausing and resuming them whenever needed."
    },
    {
      icon: Shuffle,
      title: "Spintax Support",
      description: "Create varied email content using Spintax to improve engagement and deliverability."
    },
    {
      icon: FileSpreadsheet,
      title: "Export Reports",
      description: "Export detailed campaign reports in Excel format for further analysis and record-keeping."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Powerful Features for <span className="text-gradient">Advanced Email Marketing</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            VN Sender comes packed with everything you need to create, manage, and optimize your email campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
