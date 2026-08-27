import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import {
  Database, Code, Brain, Shield, Calculator, Cloud,
  BarChart3, Briefcase, Laptop, User, ArrowRight,
  Sparkles,
} from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { Parallax } from "@/components/site/Parallax";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Course = {
  icon: React.ElementType;
  title: string;
  desc: string;
  items: string[];
};

type Tab = "technical" | "non-technical";

const technicalCourses: Course[] = [
  {
    icon: Brain,
    title: "Generative AI",
    desc: "Learn Generative AI, prompt engineering, LLM tools, and AI-powered application development through practical projects.",
    items: ["Prompt Engineering", "LLMs", "AI Tools", "Real-Time Projects"],
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    desc: "Build a strong foundation in Artificial Intelligence concepts, automation, problem-solving, and intelligent systems.",
    items: ["AI Basics", "Automation", "Intelligent Systems", "AI Projects"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    desc: "Master Machine Learning algorithms, model training, data processing, and prediction techniques using real datasets.",
    items: ["ML Algorithms", "Model Training", "Data Processing", "Predictions"],
  },
  {
    icon: Brain,
    title: "Data Science With AI",
    desc: "Learn Data Science with AI using Python, machine learning, data visualization, and real-world analytics projects.",
    items: ["Python", "Machine Learning", "Data Visualization", "AI Analytics"],
  },
  {
    icon: Database,
    title: "Data Analytics With AI",
    desc: "Transform raw data into business insights using AI-powered analytics, dashboards, reporting, and visualization tools.",
    items: ["AI Analytics", "Dashboards", "Reports", "Visualization"],
  },
  {
    icon: Briefcase,
    title: "Business Analyst",
    desc: "Learn business analysis, requirement gathering, documentation, process mapping, and stakeholder communication skills.",
    items: ["Requirements", "Documentation", "Process Mapping", "Communication"],
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    desc: "Develop business analytics skills using data visualization, KPI tracking, reporting, and decision-making techniques.",
    items: ["KPI Tracking", "Visualization", "Reporting", "Business Insights"],
  },
  {
    icon: Cloud,
    title: "AWS And Azure",
    desc: "Learn cloud computing with AWS and Microsoft Azure, including cloud services, deployment, storage, and security.",
    items: ["AWS", "Azure", "Cloud Security", "Deployment"],
  },
  {
    icon: Cloud,
    title: "DevOps",
    desc: "Master DevOps practices including Git, Docker, Jenkins, CI/CD pipelines, automation, and cloud deployment.",
    items: ["Git", "Docker", "Jenkins", "CI/CD"],
  },
  {
    icon: Code,
    title: "Full Stack Development With AI",
    desc: "Build modern full stack web applications using frontend, backend, database, APIs, and AI integration.",
    items: ["Frontend", "Backend", "Database", "AI Integration"],
  },
  {
    icon: Shield,
    title: "Cyber Security",
    desc: "Learn cyber security fundamentals, network protection, threat detection, risk management, and secure system practices.",
    items: ["Network Security", "Threat Detection", "Risk Management", "Security Tools"],
  },
  {
    icon: Briefcase,
    title: "Salesforce Admin And Developer",
    desc: "Learn Salesforce administration and development, including CRM setup, automation, dashboards, Apex, and Lightning.",
    items: ["CRM", "Automation", "Apex", "Lightning"],
  },
  {
    icon: BarChart3,
    title: "Qlik Sense",
    desc: "Create interactive dashboards, business intelligence reports, data models, and visual analytics using Qlik Sense.",
    items: ["Dashboards", "BI Reports", "Data Models", "Visual Analytics"],
  },
  {
    icon: Code,
    title: "Python",
    desc: "Master Python programming for web development, automation, data science, artificial intelligence, and real-time projects.",
    items: ["Core Python", "Automation", "Data Science", "Projects"],
  },
  {
    icon: Code,
    title: "Java",
    desc: "Learn Core Java, object-oriented programming, collections, JDBC, backend development, and enterprise applications.",
    items: ["Core Java", "OOP", "JDBC", "Backend"],
  },
  {
    icon: Shield,
    title: "Software Testing",
    desc: "Learn manual testing, test case writing, bug reporting, quality assurance, and software testing life cycle concepts.",
    items: ["Manual Testing", "Test Cases", "Bug Reports", "QA"],
  },
  {
    icon: Laptop,
    title: "Mobile App Development",
    desc: "Create Android and cross-platform mobile applications using modern app development tools and deployment practices.",
    items: ["Android", "Flutter", "Firebase", "Deployment"],
  },
  {
    icon: Shield,
    title: "Selenium Automation",
    desc: "Learn Selenium automation testing, test scripts, TestNG, web automation frameworks, and real-time QA projects.",
    items: ["Selenium", "TestNG", "Automation", "QA Projects"],
  },
  {
    icon: Cloud,
    title: "Cisco Certified Network Associate (CCNA)",
    desc: "Learn networking fundamentals, routing, switching, Cisco technologies, IP addressing, and network troubleshooting.",
    items: ["Routing", "Switching", "Cisco", "Networking"],
  },
  {
    icon: Shield,
    title: "Ethical Hacking",
    desc: "Understand ethical hacking, penetration testing, Kali Linux, vulnerability assessment, and cyber security tools.",
    items: ["Pen Testing", "Kali Linux", "Vulnerability", "Security Tools"],
  },
];

const nonTechnicalCourses: Course[] = [
  {
    icon: Briefcase,
    title: "SAP FICO",
    desc: "Master SAP Financial Accounting & Controlling for enterprise financial management, reporting, and compliance.",
    items: ["General Ledger", "Accounts Payable", "Controlling", "SAP Reports"],
  },
  {
    icon: Briefcase,
    title: "SAP MM",
    desc: "Learn SAP Materials Management for procurement, inventory control, vendor management, and supply chain processes.",
    items: ["Procurement", "Inventory", "Vendor Management", "Supply Chain"],
  },
  {
    icon: Briefcase,
    title: "SAP SD",
    desc: "Understand SAP Sales & Distribution for order management, billing, shipping, and customer relationship processes.",
    items: ["Order Management", "Billing", "Shipping", "CRM"],
  },
  {
    icon: Briefcase,
    title: "SAP HCM",
    desc: "Learn SAP Human Capital Management for payroll, personnel administration, time management, and HR processes.",
    items: ["Payroll", "HR Admin", "Time Mgmt", "Recruitment"],
  },
  {
    icon: Briefcase,
    title: "SAP ABAP Development",
    desc: "Develop SAP applications using ABAP programming, reports, enhancements, and custom development techniques.",
    items: ["ABAP Basics", "Reports", "Function Modules", "Enhancements"],
  },
  {
    icon: Briefcase,
    title: "SAP SuccessFactors",
    desc: "Learn cloud-based SAP SuccessFactors for talent management, performance, learning, and HR digitization.",
    items: ["Talent Mgmt", "Performance", "Learning", "Onboarding"],
  },
  {
    icon: Calculator,
    title: "Financial Modelling",
    desc: "Build advanced financial models, forecasting tools, valuation analysis, and investment decision frameworks.",
    items: ["Forecasting", "Valuation", "Excel Models", "Investment Analysis"],
  },
  {
    icon: Calculator,
    title: "Tally Prime With GST",
    desc: "Master Tally Prime for accounting, GST compliance, taxation, invoicing, and financial statement preparation.",
    items: ["Tally Prime", "GST", "Invoicing", "Financial Statements"],
  },
  {
    icon: Calculator,
    title: "GST Taxation & Compliance",
    desc: "Understand GST laws, filing procedures, input tax credit, returns, and tax compliance for Indian businesses.",
    items: ["GST Filing", "Tax Credit", "Returns", "Compliance"],
  },
  {
    icon: BarChart3,
    title: "PMP – Project Management",
    desc: "Prepare for PMP certification with project planning, scheduling, risk management, and leadership frameworks.",
    items: ["Project Planning", "Risk Mgmt", "Scheduling", "Leadership"],
  },
  {
    icon: BarChart3,
    title: "Primavera P6",
    desc: "Learn Primavera P6 for enterprise project planning, scheduling, resource management, and progress tracking.",
    items: ["Scheduling", "Resources", "Baseline", "Progress Tracking"],
  },
  {
    icon: Sparkles,
    title: "Graphic Design",
    desc: "Create professional graphics, brand identities, social media content, and visual designs using industry tools.",
    items: ["Photoshop", "Illustrator", "Branding", "Social Media"],
  },
  {
    icon: Sparkles,
    title: "UI/UX Design",
    desc: "Design user-friendly interfaces and experiences with wireframing, prototyping, Figma, and usability principles.",
    items: ["Figma", "Wireframing", "Prototyping", "Usability"],
  },
  {
    icon: Laptop,
    title: "Diploma In Computer Applications",
    desc: "Master essential computer applications including MS Office, internet skills, and basic accounting for office roles.",
    items: ["MS Word", "MS Excel", "PowerPoint", "Tally Prime"],
  },
  {
    icon: Laptop,
    title: "Digital Marketing",
    desc: "Learn digital marketing, SEO, social media, Google Ads, email marketing, and analytics to grow brands online.",
    items: ["SEO", "Social Media", "Google Ads", "Analytics"],
  },
];

export default function Courses() {
  const [tab, setTab] = useState<Tab>("technical");

  const currentCourses = tab === "technical" ? technicalCourses : nonTechnicalCourses;

  return (
    <PageShell>
      <PageHero
        eyebrow="Programs & Tracks"
        title="Industry-Ready Technical & Professional Courses"
        subtitle="Every program features direct industry mentorship, hands-on live projects, free internship credit, and guaranteed placement support."
      />

      {/* TAB SWITCHER */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-secondary border border-border/60 shadow-sm">
              {([
                { key: "technical" as Tab, label: "Technical", Icon: Laptop, count: technicalCourses.length },
                { key: "non-technical" as Tab, label: "Non Technical", Icon: User, count: nonTechnicalCourses.length },
              ] as const).map(({ key, label, Icon, count }) => {
                const active = tab === key;

                return (
                  <button
                    key={key}
                    onClick={() => setTab(key)}
                    className={`relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      active
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                    <span
                      className={`ml-1 px-2 py-0.5 text-[10px] font-bold rounded-full transition-colors ${
                        active
                          ? "bg-white/20 text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* COURSE GRID */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            key={tab}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up"
            style={{ animationDuration: "0.4s" }}
          >
            {currentCourses.map((course, i) => (
              <Parallax key={course.title} speed={0.06 * ((i % 3) + 1)} className="h-full">
                <Reveal delay={i * 40} variant="up">
                  <Card className="h-full hover-lift border-border/80 bg-card hover:border-primary/50 overflow-hidden group rounded-2xl transition-all duration-300">
                  <CardContent className="p-7 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <course.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">{course.title}</h3>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">{course.desc}</p>

                      <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 pt-4 border-t border-border/50">
                        {course.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="mt-6 w-full font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                      <Link to="/contact#contact-form">
                        Enquire Now <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                </Reveal>
              </Parallax>
            ))}
          </div>

          {/* CAREER BENEFITS */}
          <div className="mx-auto max-w-5xl px-4 mt-16">
            <Card className="border-0 bg-black text-white shadow-2xl overflow-hidden rounded-3xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent pointer-events-none" />
              <CardContent className="p-10 relative">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <GraduationCap className="h-8 w-8 text-emerald-400" />
                  <h3 className="text-3xl font-extrabold text-white">Included Career Benefits</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
                  {[
                    "Free Internship Experience",
                    "Soft Skills & Communication Training",
                    "Resume & LinkedIn Optimization",
                    "1-on-1 Mock Interview Sessions",
                    "Group Discussion & HR Prep",
                    "Recognized Certification Exam",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3 font-semibold text-sm text-white/90">
                      <span className="h-6 w-6 rounded-full bg-emerald-400/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-brand text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Unsure Which Track Fits Your Profile?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto leading-relaxed">
            Schedule a 1-on-1 session with our career advisors at Varsav Academy to evaluate your background and select the highest ROI training path.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="h-12 px-8 text-base font-semibold bg-white text-black hover:bg-white/90 rounded-xl shadow-xl">
              <Link to="/contact">Book Free Consultation Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}