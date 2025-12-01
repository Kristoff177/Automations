'use client';

import { Navigation } from '@/components/sections/Navigation';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    title: 'E-Commerce Automation',
    client: 'Global Retail Brand',
    category: 'AI-Powered Automations',
    description: 'Automated inventory management and customer service with AI, reducing operational costs by 65% and improving response times by 10x.',
    results: ['65% cost reduction', '10x faster response', '24/7 operations'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Customer Support Bot',
    client: 'SaaS Company',
    category: 'Intelligent Chatbots',
    description: 'Deployed multilingual AI chatbot handling 85% of customer inquiries automatically across 12 languages.',
    results: ['85% automation rate', '12 languages', '95% satisfaction'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Sales Pipeline Automation',
    client: 'B2B Services',
    category: 'Process Automation',
    description: 'Streamlined lead qualification and follow-up processes, increasing conversion rates by 180% and saving 40 hours per week.',
    results: ['180% conversion increase', '40 hours saved/week', 'Automated follow-ups'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Predictive Analytics Platform',
    client: 'Financial Services',
    category: 'Predictive Analytics',
    description: 'Built custom ML models for risk assessment and market prediction, improving forecast accuracy by 300%.',
    results: ['300% accuracy improvement', 'Real-time insights', 'Risk mitigation'],
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'Document Processing System',
    client: 'Legal Firm',
    category: 'Custom AI Solutions',
    description: 'Automated document review and extraction, processing 1000+ documents daily with 99.5% accuracy.',
    results: ['1000+ docs/day', '99.5% accuracy', '90% time saved'],
    image: 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    title: 'AI Strategy Implementation',
    client: 'Manufacturing Corp',
    category: 'AI Consulting',
    description: 'Developed comprehensive AI roadmap and implementation strategy, leading to 250% ROI in first year.',
    results: ['250% ROI', 'Full automation strategy', 'Scalable framework'],
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function CaseStudies() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-[#0A0A0A] to-[#0A0A0A]"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      <div className="relative z-10">
        <Navigation />

        <section className="container mx-auto px-6 pt-20 pb-12">
          <Link href="/">
            <Button variant="ghost" className="text-[#D4AF37] hover:text-[#FFEB3B] hover:bg-[#D4AF37]/10 mb-8">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center mb-16">
            <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/30 mb-4">
              Case Studies
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Real Results from
              <span className="block bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
                Real Projects
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              See how I've helped businesses transform their operations with AI automation
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-24">
          <div className="mb-12 max-w-2xl mx-auto">
            <Card className="group bg-gradient-to-br from-[#D4AF37]/20 to-[#FFEB3B]/20 border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all duration-300 p-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] bg-clip-text text-transparent">
                    Become the First Case Study
                  </span>
                </h2>
                <div className="space-y-3 text-white/80">
                  <p className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Shows potential clients that your service is already set up for results.</span>
                  </p>
                  <p className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Offers SEO benefit because linking their site on my site will give their site exposure.</span>
                  </p>
                  <p className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>Creates anticipation for future real case studies.</span>
                  </p>
                </div>
                <Button className="bg-gradient-to-r from-[#D4AF37] to-[#FFEB3B] hover:from-[#FFEB3B] hover:to-[#D4AF37] text-[#0A0A0A] font-semibold mt-4">
                  Get Your Case Study
                </Button>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="group bg-white/5 border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-[#D4AF37]/90 text-[#0A0A0A]">
                    {study.category}
                  </Badge>
                </div>

                <div className="p-6">
                  <div className="text-sm text-[#D4AF37] mb-2">{study.client}</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-white/80">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2"></div>
                        {result}
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="text-[#D4AF37] hover:text-[#FFEB3B] hover:bg-[#D4AF37]/10 w-full group"
                  >
                    View Details
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
