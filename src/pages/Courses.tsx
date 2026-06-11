import { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import {
  Database, Code, Brain, Shield, TrendingUp, Calculator, Cloud,
  BarChart3, Briefcase, Laptop, User, ArrowRight
} from "lucide-react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Course = {
  icon: React.ElementType;
  title: string;
  desc: string;
  items: string[];
};

const technicalCourses: Course[] = [
  {
    icon: Brain,
    title: "AI And ML",
    desc: "Learn AI And ML Using Python, TensorFlow, And Scikit-Learn. Build Models That Predict, Automate, And Learn From Data.",
    items: ["TensorFlow", "Scikit-Learn", "Neural Networks", "Deep Learning"],
  },
  {
    icon: Brain,
    title: "Data Science With AI",
    desc: "Turn Data Into Decisions — Learn Python, ML, & Visualization With Real Projects.",
    items: ["Python & ML", "Deep Learning", "Data Visualization", "AI Integration"],
  },
  {
    icon: Database,
    title: "Data Analytics",
    desc: "Transform Data Into Insights — Build Your Career With Our Expert Data Analytics Program.",
    items: ["Python & R", "Data Visualization", "Statistical Analysis", "Real Projects"],
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    desc: "Transform Raw Data Into Powerful Business Strategies. Gain Skills In Analytics, Visualization, And KPI Reporting.",
    items: ["Analytics Tools", "Visualization", "KPI Reporting", "Business Strategy"],
  },
  {
    icon: Cloud,
    title: "AWS & Azure",
    desc: "Discover Cloud Computing With AWS And Azure. Learn Infrastructure, Services, Storage, And Deployment Strategies.",
    items: ["Cloud Migration", "Load Balancing", "Security", "Scalable Apps"],
  },
  {
    icon: Code,
    title: "Full Stack Development",
    desc: "Master HTML, CSS, JavaScript, React, Node.js, Express.js, And MongoDB.",
    items: ["React & Node.js", "Express.js", "MongoDB", "Full-Stack Apps"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Explore Cybersecurity Fundamentals And Advanced Techniques To Protect Systems, Networks, And Data.",
    items: ["Ethical Hacking", "Threat Detection", "Risk Assessment", "Secure Coding"],
  },
  {
    icon: Briefcase,
    title: "Salesforce (Admin & Dev)",
    desc: "Configure, Customize, And Manage Salesforce Platforms.",
    items: ["Lightning & Apex", "CRM Systems", "Dashboards", "Automation"],
  },
  {
    icon: BarChart3,
    title: "Qlik Sense",
    desc: "Create Data Visualizations And Interactive Dashboards.",
    items: ["Dashboards", "Data Loading", "Transformation", "Visual Analytics"],
  },
  {
    icon: Briefcase,
    title: "SAP (Core)",
    desc: "Learn Core Enterprise Processes Using SAP.",
    items: ["SAP GUI", "T-Codes", "Reporting Tools", "Enterprise Workflows"],
  },
  {
  icon: Calculator,
  title: "SAP FICO S/4HANA",
  desc: "Master Financial Accounting And Controlling Using SAP S/4HANA For Modern Enterprise Finance Operations.",
  items: [
    "General Ledger",
    "Accounts Payable",
    "Accounts Receivable",
    "Asset Accounting"
  ],
},
  {
  icon: Briefcase,
  title: "SAP MM S/4HANA",
  desc: "Learn Procurement, Inventory Management, And Supply Chain Processes Using SAP S/4HANA.",
  items: [
    "Procurement",
    "Inventory Management",
    "Vendor Management",
    "Material Planning"
  ],
},
{
    icon: Code,
    title: "Java",
    desc: "Learn Core Java, OOP Concepts, Collections, JDBC, And Enterprise Application Development.",
    items: ["Core Java", "JDBC", "Collections", "Spring Basics"],
  },
  {
    icon: Code,
    title: "Python",
    desc: "Master Python Programming For Automation, Web Development, Data Science, And AI.",
    items: ["Core Python", "OOP", "Automation", "Projects"],
  },
  {
    icon: Code,
    title: "Angular",
    desc: "Build Modern Web Applications Using Angular Framework.",
    items: ["Components", "Routing", "Services", "API Integration"],
  },
  {
    icon: Code,
    title: "React JS",
    desc: "Develop Interactive Frontend Applications Using React.",
    items: ["Hooks", "State Management", "Components", "API Calls"],
  },
  {
    icon: Laptop,
    title: "Mobile App Development",
    desc: "Create Android And Cross-Platform Mobile Applications.",
    items: ["Flutter", "Android", "Firebase", "Deployment"],
  },
  {
    icon: Shield,
    title: "Software Testing",
    desc: "Learn Manual And Automation Testing Concepts.",
    items: ["Manual Testing", "Test Cases", "Bug Tracking", "QA"],
  },
  {
    icon: Shield,
    title: "Selenium Automation",
    desc: "Automate Web Testing Using Selenium Framework.",
    items: ["Selenium", "TestNG", "Automation", "Frameworks"],
  },
  {
    icon: Cloud,
    title: "DevOps",
    desc: "Master CI/CD, Docker, Jenkins, And Cloud Deployment.",
    items: ["Docker", "Jenkins", "Git", "CI/CD"],
  },
  {
    icon: Cloud,
    title: "CCNA",
    desc: "Learn Networking Fundamentals And Cisco Technologies.",
    items: ["Routing", "Switching", "Networking", "Cisco"],
  },
  {
    icon: Shield,
    title: "Ethical Hacking",
    desc: "Understand Security Testing And Ethical Hacking Techniques.",
    items: ["Pen Testing", "Network Security", "Kali Linux", "Security Tools"],
  },
  {
    icon: Brain,
    title: "Generative AI",
    desc: "Build AI Solutions Using LLMs, Prompt Engineering, And AI Tools.",
    items: ["LLMs", "Prompt Engineering", "OpenAI APIs", "Projects"],
  },
];

const nonTechnicalCourses: Course[] = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    desc: "Boost Your Online Presence With Skills In SEO, Social Media, Email Campaigns, And Paid Advertising.",
    items: ["SEO & SEM", "Social Media", "Google Analytics", "Paid Advertising"],
  },
  {
    icon: Calculator,
    title: "Tally Prime",
    desc: "Manage Accounting, Inventory, Taxation, And Payroll With Ease.",
    items: ["GST Compliance", "Payroll", "Inventory", "Financial Reports"],
  },
  {
    icon: Calculator,
    title: "Zoho Books",
    desc: "Master Zoho Books To Efficiently Manage Online Accounting And Financial Operations.",
    items: ["Invoicing", "Expense Tracking", "GST Compliance", "Bank Reconciliation"],
  },
  {
    icon: Calculator,
    title: "QuickBooks",
    desc: "Organize Finances, Manage Payroll, And Simplify Tax Preparation.",
    items: ["Payroll", "Tax Prep", "Cloud Bookkeeping", "Financial Reports"],
  },
  {
    icon: BarChart3,
    title: "Financial Modelling",
    desc: "Create Models That Simulate Business Performance And Forecast Outcomes.",
    items: ["DCF Analysis", "Valuation", "Forecasting", "Strategic Planning"],
  },
  {
    icon: BarChart3,
    title: "Financial Analytics",
    desc: "Turn Data Into Actionable Financial Insights Using Excel, Power BI, And SQL.",
    items: ["Excel & Power BI", "SQL", "KPI Analysis", "Cash Flow Analysis"],
  },
  {
    icon: Briefcase,
    title: "Primavera",
    desc: "Master Project Scheduling And Resource Management.",
    items: ["WBS Creation", "Milestone Tracking", "Risk Assessment", "Budget Control"],
  },
  {
    icon: User,
    title: "Spoken English",
    desc: "Improve Communication, Vocabulary, And Interview Skills.",
    items: ["Grammar", "Vocabulary", "Public Speaking", "Interviews"],
  },
  {
    icon: Briefcase,
    title: "Microsoft Office",
    desc: "Master MS Word, Excel, PowerPoint, And Outlook.",
    items: ["Excel", "Word", "PowerPoint", "Reports"],
  },
];
const designingCourses: Course[] = [
  {
    icon: Laptop,
    title: "UI/UX Design",
    desc: "Design User-Friendly Digital Experiences Using Modern Design Principles.",
    items: ["Figma", "Wireframing", "Prototyping", "User Research"],
  },
  {
    icon: Laptop,
    title: "Photoshop & Illustrator",
    desc: "Create Professional Graphics, Branding, And Marketing Assets.",
    items: ["Photoshop", "Illustrator", "Logo Design", "Branding"],
  },
  {
    icon: Laptop,
    title: "Video Editing & Color Grading",
    desc: "Learn Professional Video Editing And Post Production.",
    items: ["Premiere Pro", "After Effects", "Color Grading", "Editing"],
  },
];

type Tab = "technical" | "non-technical" | "designing";

export default function Courses() {
  const [tab, setTab] = useState<Tab>("technical");
  const courses = tab === "technical" ? technicalCourses : tab === "non-technical" ? nonTechnicalCourses : designingCourses;

  return (
    <PageShell>
      <PageHero
        eyebrow="Programs"
        title="Wide Range Of Technical & Non-Technical | Industry-Ready Courses"
        subtitle="Each course comes with Placement Assistance, Industry Mentors, Live Projects, and Hands-On Experience — designed to launch your career."
      />

      {/* Tab Switcher */}
      <section className="py-10 pb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
  <div className="inline-flex relative p-1 rounded-full bg-muted border border-border mb-0"></div>
            {([
              { key: "technical" as Tab, label: "Technical Courses", Icon: Laptop },
              { key: "non-technical" as Tab, label: "Non-Technical Courses", Icon: User },
              { key: "designing" as Tab, label: "Designing Courses", Icon: Laptop },
            ]).map(({ key, label, Icon }) => {
              const active = tab === key;
              return (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    active
                      ? "bg-gradient-gold text-navy-deep shadow"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

     <section className="py-12">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {courses.map((c) => (
      <Card
        key={c.title}
        className="hover-lift border-border overflow-hidden group"
      >
        <CardContent className="p-7">
          <div className="flex items-start gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-glow shrink-0">
              <c.icon className="h-6 w-6 text-navy-deep" />
            </div>

            <h3 className="text-xl font-semibold mt-1">
              {c.title}
            </h3>
          </div>

          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {c.desc}
          </p>

          <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
            {c.items.map((item) => (
              <li key={item} className="flex gap-2 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            className="mt-6 w-full bg-primary text-primary-foreground"
          >
            <Link to="/contact">
              Enquire Now
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    ))}

  </div>

  {/* Common Benefits Card */}

  <div className="mx-auto max-w-5xl px-4 mt-12">
    <Card className="border-0 bg-gradient-brand text-white shadow-2xl overflow-hidden">
      <CardContent className="p-8 text-center">

       <div className="flex items-center justify-center gap-3 mb-8">
  <GraduationCap className="h-8 w-8 text-yellow-300" />
  <h3 className="text-3xl font-bold text-white">
    Course Benefits
  </h3>
</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
         <div className="flex items-center gap-2 font-medium text-white">
  <span className="text-yellow-300">✔</span>
  <span>Free Internship</span>
</div>
          <div className="flex items-center gap-2 font-medium text-white">
  <span className="text-yellow-300">✔</span>
<span>Free Communication Skills Training</span>
</div>
          <div className="flex items-center gap-2 font-medium text-white">
  <span className="text-yellow-300">✔</span>
  <span>Free Job Profile Support</span>
</div>
          <div className="flex items-center gap-2 font-medium text-white">
  <span className="text-yellow-300">✔</span>
  <span>Free Interview Sessions</span>
</div>
          <div className="flex items-center gap-2 font-medium text-white">
  <span className="text-yellow-300">✔</span>
  <span>Free Group Discussion Training</span>
</div>
          <div className="flex items-center gap-2 font-medium text-white">
  <span className="text-yellow-300">✔</span>
  <span>Certification Exam</span>
</div>
        </div>

      </CardContent>
    </Card>
  </div>

</section>
      <section className="py-20 bg-gradient-brand text-white text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Need Help Choosing the Right Course?</h2>
          <p className="mt-3 text-white/70">
            Speak with our expert mentors at Skandha Edu Tech Training Center and discover the best career path
            in Data Science, AI, SAP, Full Stack Development, and more — all in a free 15-minute consultation.
          </p>
          <Button asChild size="lg" className="mt-7 bg-gradient-gold text-navy-deep">
            <Link to="/contact">Book a Free Counselling Call</Link>
          </Button>
        </div>
       
      </section>
      
    </PageShell>
  );
}
