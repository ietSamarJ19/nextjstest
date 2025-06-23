'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, GraduationCap } from 'lucide-react';
interface Program {
  title: string;
  description: string;
  duration: string;
  type: string;
}
interface Programs {
  [key:string]: Program[];
}
const AcademicPrograms = () => {
  const [activeTab, setActiveTab] = useState('Bachelors');

  const programs:Programs = {
    Bachelors: [
      {
        title: 'Computer Science',
        description: 'Comprehensive program covering software development, algorithms, and emerging technologies.',
        duration: '4 years',
        type: 'Bachelor'
      },
      {
        title: 'Information Technology',
        description: 'Focus on IT systems, networking, database management, and cybersecurity.',
        duration: '4 years',
        type: 'Bachelor'
      },
      {
        title: 'Electronics And Telecommunication',
        description: 'Advanced study in electronic systems, communication networks, and signal processing.',
        duration: '4 years',
        type: 'Bachelor'
      },
      {
        title: 'Electronics And Instrumentation',
        description: 'Specialized program in measurement systems, control engineering, and automation.',
        duration: '4 years',
        type: 'Bachelor'
      },
      {
        title: 'Civil Engineering',
        description: 'Comprehensive civil engineering with focus on infrastructure and construction.',
        duration: '4 years',
        type: 'Bachelor'
      },
      {
        title: 'Mechanical Engineering',
        description: 'Traditional mechanical engineering with modern manufacturing techniques.',
        duration: '4 years',
        type: 'Bachelor'
      }
    ],
    Masters: [
      {
        title: 'M.Tech Computer Science',
        description: 'Advanced research in AI, machine learning, and software engineering.',
        duration: '2 years',
        type: 'Master'
      },
      {
        title: 'M.Tech Electronics',
        description: 'Specialized master\'s program in advanced electronics and VLSI design.',
        duration: '2 years',
        type: 'Master'
      },
      {
        title: 'MBA Technology Management',
        description: 'Management program focused on technology sector leadership.',
        duration: '2 years',
        type: 'Master'
      }
    ],
    PhD: [
      {
        title: 'PhD Computer Science',
        description: 'Research doctorate in cutting-edge computer science domains.',
        duration: '3-5 years',
        type: 'Doctorate'
      },
      {
        title: 'PhD Electronics Engineering',
        description: 'Advanced research in electronics and communication systems.',
        duration: '3-5 years',
        type: 'Doctorate'
      },
      {
        title: 'PhD Mechanical Engineering',
        description: 'Research program in advanced mechanical and manufacturing systems.',
        duration: '3-5 years',
        type: 'Doctorate'
      }
    ]
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering programs designed to meet industry demands and foster innovation
          </p>
        </div>

        {/* Program Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            {Object.keys(programs).map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 mx-1 font-semibold transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs[activeTab].map((program:Program, index:number) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                    {program.type}
                  </Badge>
                  <div className="text-sm text-gray-500 font-medium">
                    {program.duration}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
            View All Programs
            <GraduationCap className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;