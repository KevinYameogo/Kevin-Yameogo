import { Mail, Phone, Map, Linkedin, Bot, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "./hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubtmitted] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubtmitted(true);

    emailjs
      .sendForm("service_zmv9efl", "template_yvz2hzb", form.current, {
        publicKey: "VvoP5jnFiCCntZf9W",
      })
      .then(
        () => {
          toast({
            title: "✅ Message sent!",
            description:
              "Thank you for reaching out! I’ll get back to you very soon!",
          });
          form.current.reset();
        },
        (error) => {
          console.error("❌ Email send failed:", error.text);
          toast({
            title: "Error",
            description: "Failed to send email. Please try again later.",
            variant: "destructive",
          });
        }
      )
      .finally(() => setIsSubtmitted(false));
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl backdrop-blur-xs">
        <h2 className="text-[#F8F8FF] text-3xl md:text-4xl text-center mb-4 font-bold">
          Get In <span className="text-[#48eda8]">Touch</span>
        </h2>
        <p className="text-center text-[#F8F8FF] mb-12  max-w-2xl mx-auto">
          Got a project idea or want to collaborate? Let’s connect — I’m always
          excited to explore new opportunities.
        </p>
        <div className="bg-[#687982]/20 text-[#F8F8FF] grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-[#48eda8]" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:yameokevin234@gmail.com"
                    className="text-muted-foreground hover:text-[#48eda8] transition-colors"
                  >
                    yameokevin234@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-[#48eda8]" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+19292314873"
                    className="text-muted-foreground hover:text-[#48eda8] transition-colors"
                  >
                    +1 (929)-234-4873
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Map className="h-6 w-6 text-[#48eda8]" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-[#48eda8] transition-colors">
                    New York, US
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/kevin-yameogo/"
                  target="_blank"
                >
                  <Linkedin className="text-[#8AB4F7]/95 transition-colors  hover:text-[#8AB4F7]/20" />
                </a>
                <a href="https://discord.com/channels/@me" target="_blank">
                  <Bot className="text-[#48eda8] hover:text-[#48eda8]/20 transition-colors" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card  p-8 rounded-lg show-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            <form
              ref={form}
              onSubmit={handleSubmit}
              action=""
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="text-[#1E1E1E] px-4 w-full py-3 border border-input  rounded-md bg-bg  focus:outline-hidden focus:ring-2 focus:ring-[#48eda8]/50"
                  placeholder="Kevin Yameogo"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  required
                  className="text-[#1E1E1E]  px-4 w-full py-3 border border-input  rounded-md bg-bg  focus:outline-hidden focus:ring-2 focus:ring-[#48eda8]/50"
                  placeholder="yameokevin234@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="text-[#1E1E1E] px-4 w-full py-3 border border-input  rounded-md bg-bg  focus:outline-hidden focus:ring-2 focus:ring-[#48eda8]/50 resize-none"
                  placeholder="Hello, kev ...."
                />
              </div>
              <button
                disabled={isSubmitted}
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitted ? "Submitting..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
