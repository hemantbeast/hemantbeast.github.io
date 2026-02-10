import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { LuMail, LuPhone, LuMapPin, LuSend, LuArrowRight } from "react-icons/lu";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TiltCard } from "@/components/TiltCard";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const mailtoLink = `mailto:hemantdesharma@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client will open with the message pre-filled.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <LuMail className="w-6 h-6" />,
      title: "Email",
      value: "hemantdesharma@gmail.com",
      link: "mailto:hemantdesharma@gmail.com",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <LuPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9662643675",
      link: "tel:+919662643675",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <LuMapPin className="w-6 h-6" />,
      title: "Location",
      value: "Ahmedabad, Gujarat, India",
      link: "#",
      color: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Let's Connect</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Ready to bring your mobile app ideas to life? Let's discuss how we can work together on your next project.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ScrollReveal direction="left" delay={100}>
            <div className="space-y-8">
              <TiltCard maxRotation={5}>
                <Card className="card-hover bg-slate-950 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">
                      Get In Touch
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-slate-300 leading-relaxed">
                      Open to opportunities in Mobile Development, Technical Lead, Mobile Architect, 
                      or Flutter/Android roles. Whether you need a mobile app developed from scratch 
                      or want to enhance an existing application with AI/ML capabilities, let's talk!
                    </p>
                    
                    <div className="space-y-4">
                      {contactInfo.map((info, index) => (
                        <a
                          key={info.title}
                          href={info.link}
                          className="flex items-center gap-4 group p-3 rounded-lg hover:bg-slate-900/50 transition-all duration-300"
                        >
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {info.icon}
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-semibold text-white">
                              {info.title}
                            </h4>
                             <p className="text-slate-300 group-hover:text-indigo-400 transition-colors duration-300">
                               {info.value}
                             </p>
                          </div>
                          <LuArrowRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Response Time", value: "< 24h" },
                  { label: "Experience", value: "8+ yrs" },
                  { label: "Projects", value: "35+" },
                ].map((stat, index) => (
                  <ScrollReveal key={stat.label} delay={200 + index * 100}>
                    <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-800">
                      <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
                      <div className="text-xs text-slate-400">{stat.label}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={200}>
            <TiltCard maxRotation={3}>
              <Card className="card-hover bg-slate-950 border-slate-800 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-300">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-indigo-500/20 transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-300">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-indigo-500/20 transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-300">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project inquiry"
                        required
                        className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-indigo-500/20 transition-all duration-300"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-300">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={5}
                        required
                        className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-indigo-500/20 resize-none transition-all duration-300"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/25"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <>
                          <LuSend className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
