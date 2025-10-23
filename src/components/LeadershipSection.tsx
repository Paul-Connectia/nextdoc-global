import { User, Linkedin } from "lucide-react";
import drIbnWahabImage from "@/assets/team/dr-ibn-wahab.jpg";
import drPradeepImage from "@/assets/team/dr-pradeep-sabapathy.jpg";
import drRoshanImage from "@/assets/team/dr-roshan-khanderi.jpg";
import drKarthikImage from "@/assets/team/dr-karthik-kumar.jpg";

const LeadershipSection = () => {
  const teamMembers = [
    {
      name: "Dr. Roshan Khanderi",
      title: "Founder & CEO, NextDoc Global Ltd.",
      credentials: "Medical Doctor",
      background: "Former Resident Doctor (Manipal Hospitals). Founder-Vivid Foliage; Director- Royash Infra Services Pvt Ltd",
      quote: "NextDoc was born from lived experience, turning the uncertainty doctors face into structured pathways and measurable progress.",
      image: drRoshanImage,
      linkedin: "https://www.linkedin.com/in/dr-roshan-khanderi"
    },
    {
      name: "Dr. Pradeep Sabapathy",
      title: "Clinical Fellow, King's College Hospital NHS Foundation Trust, London",
      credentials: "NHS Clinician",
      background: "Experience across surgery and education pathways; supports mentoring, clinical interview preparation, and UK readiness",
      quote: "Every doctor deserves structured mentorship. We're building the system we wished we had.",
      image: drPradeepImage,
      linkedin: "https://www.linkedin.com/in/dr-pradeep-sabapathy"
    },
    {
      name: "Dr. Ibn Benin Wahab",
      title: "Strategic Advisor (Policy & Workforce)",
      credentials: "Policy & Economics Background (UK)",
      background: "Advisor on workforce integration and governance in health innovation. Focus on ethical AI deployment and institutional readiness",
      quote: "AI only works in healthcare when innovation is paired with governance and accountability.",
      image: drIbnWahabImage,
      linkedin: "https://www.linkedin.com/in/dr-ibn-wahab"
    },
    {
      name: "Dr. Karthik Kumar",
      title: "Consultant Pulmonologist, India",
      credentials: "Clinical Advisor",
      background: "Asthma, COPD, ILD, sleep medicine, bronchoscopy. Mentors doctors on India-specific pathways, referral quality, and safe handovers.",
      quote: "For India's high-volume system, structured guidance is the need of the hour, NextDoc India helps make the steps clearer and more consistent.",
      image: drKarthikImage,
      linkedin: "#"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-accent/15 relative overflow-hidden">
      {/* Graduation cap decorative elements */}
      <div className="absolute top-20 right-20 text-8xl opacity-5 select-none">🎓</div>
      <div className="absolute bottom-20 left-20 text-8xl opacity-5 select-none">🎓</div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Led by Doctors. <span className="text-medical-blue">Backed by Real Experience.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              NextDoc Global brings together frontline clinicians, academic mentors, and policy advisors to build practical AI for medical careers, grounded in governance and outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-background rounded-2xl shadow-lg hover:shadow-elevated transition-all duration-300 overflow-hidden group flex flex-col relative hover:scale-105"
              >
                {/* Graduation cap motif */}
                <div className="absolute top-4 right-4 text-3xl opacity-10 group-hover:opacity-20 transition-opacity">🎓</div>
                
                <div className="p-8 space-y-6 flex-1 flex flex-col relative">
                  {/* Profile Photo */}
                  <div className="flex justify-center">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gradient-to-br from-medical-blue/10 to-medical-teal/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 ring-4 ring-medical-blue/20 group-hover:ring-medical-blue/40">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={`${member.name}, ${member.title}`}
                          className="w-full h-full object-cover object-[center_20%]"
                          loading="lazy"
                        />
                      ) : (
                        <User className="w-20 h-20 text-medical-blue" />
                      )}
                    </div>
                  </div>
                  
                  {/* Name & Title */}
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-medical-blue">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-foreground">
                      {member.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.credentials}
                    </p>
                  </div>
                  
                  {/* Background */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.background}
                  </p>
                  
                  {/* Quote */}
                  <blockquote className="border-l-4 border-medical-blue pl-4 italic text-sm text-muted-foreground">
                    "{member.quote}"
                  </blockquote>
                  
                  {/* LinkedIn Button */}
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-medical-blue hover:text-medical-teal transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-medical-blue focus-visible:ring-offset-2 rounded-md px-3 py-2"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Advisor Disclaimer */}
          <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto pt-12 leading-relaxed">
            Career support only; not clinical decision-support. Advisors act in a personal capacity; no institution is represented or endorsing NextDoc Global.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
