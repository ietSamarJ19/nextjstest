import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProgramCard from '@/components/ProgramCard';
import QuickLinks from '@/components/QuickLinks';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  const undergradPrograms = [
    {
      title: "B.E. Programs (Full-Time)",
      description: "IET is presently offering Four Year B.Tech Programs in following disciplines in given below:",
      branches: [
        "B.E. (Mechanical Engineering)",
        "B.E. (Computer Engineering)",
        "B.E. (Electronics & Instrumentation Engineering)",
        "B.E. (Information Technology)",
        "B.E. (Electronics & Telecommunication Engineering)",
        "B.E. (Civil Engineering)"
      ]
    },
    {
      title: "B.E. Programs (Part-Time)",
      description: "IET is presently offering Part Time B.year B.E. Programs in following two branches as given below:",
      branches: [
        "B.E. (Mechanical Engineering)",
        "B.E. (Computer Engineering)",
        "B.E. (Electronics & Instrumentation Engineering)",
        "B.E. (Information Technology)",
        "B.E. (Electronics & Telecommunication Engineering)"
      ]
    }
  ];

  const postgradPrograms = [
    {
      title: "M.E. Programs (Full-time)",
      description: "IET is presently offering Full Time 2 Year ME Programs in the following six branches with specializations as given below:",
      branches: [
        "Computer Engineering with specialization in Software Engineering",
        "Information Technology with specialization in Information Security",
        "Electronics engineering with specialization in Digital Communication",
        "Mechanical Engineering with specialization in Design & Manufacturing",
        "Industrial Engineering & Management",
        "Mechanical Engineering with specialization in Design & Thermal Engineering"
      ]
    },
    {
      title: "M.E. Programs (Part-time)",
      description: "IET is also offering 3 Year ME Programs in the following six branches with specializations as given below:",
      branches: [
        "Computer Engineering with specialization in Software Engineering",
        "Information Technology with specialization in Information Security",
        "Electronics engineering with specialization in VLSI & Embedded System",
        "Electronics engineering with specialization in Digital Communication",
        "Industrial Engineering & Management",
        "Mechanical Engineering with specialization in Design & Thermal Engineering"
      ]
    }
  ];

  const doctoralPrograms = [
    {
      title: "M. Phil Programs",
      description: "IET is presently offering Full Time 2 Year M.Phil programs in following branch:",
      branches: [
        "Applied Mathematics with specialization in Computing & Information"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      
      <main className="flex-grow bg-background">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          {/* Undergraduate Programs */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Undergraduate Programs
              </h2>
              <Separator className="w-24 h-1 bg-green-500" />
            </div>
            <div className="space-y-6">
              {undergradPrograms.map((program, index) => (
                <ProgramCard
                  key={index}
                  title={program.title}
                  description={program.description}
                  branches={program.branches}
                  type="undergraduate"
                />
              ))}
            </div>
          </section>

          {/* Postgraduate Programs */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Postgraduate Programs
              </h2>
              <Separator className="w-24 h-1 bg-blue-500" />
            </div>
            <div className="space-y-6">
              {postgradPrograms.map((program, index) => (
                <ProgramCard
                  key={index}
                  title={program.title}
                  description={program.description}
                  branches={program.branches}
                  type="postgraduate"
                />
              ))}
            </div>
          </section>

          {/* Doctoral Programs */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Doctoral Programs
              </h2>
              <Separator className="w-24 h-1 bg-purple-500" />
            </div>
            <div className="space-y-6">
              {doctoralPrograms.map((program, index) => (
                <ProgramCard
                  key={index}
                  title={program.title}
                  description={program.description}
                  branches={program.branches}
                  type="doctoral"
                />
              ))}
              
              {/* Additional Doctoral Information */}
              <Card className="border-l-4 border-l-purple-500 bg-purple-50/50">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Doctoral Programs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    PhD programmes is offered through the process of JRF-SRF. Programme in all relevant areas of Research, Research programmes of IET is also offering Ph.D a number of research scholars from external organizations work on PhD programmes, at IET. SRF, MCA, MBA, AICTE etc. have sponsored the PhD programmes in various departments of IET.
                  </p>
                  <Separator />
                  <p className="text-sm font-semibold text-foreground">
                    All Other Courses/Semester programmes comes under Faculty of Engineering (DAVV)
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <QuickLinks />
      <Footer />
    </div>
  );
}
