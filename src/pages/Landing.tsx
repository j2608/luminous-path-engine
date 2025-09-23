import { motion } from "framer-motion";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, AlertTriangle, CheckCircle2, ArrowRight, Lock, Zap, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";

const features = [
  {
    icon: (props: any) => (
      <img src="/logo-kavach.svg" alt="VNC KAVACH" {...props} />
    ),
    title: "Real-time Protection",
    description: "Advanced AI-powered detection system that monitors VNC traffic 24/7 to identify suspicious activities."
  },
  {
    icon: Eye,
    title: "Behavioral Analysis",
    description: "Machine learning algorithms analyze user behavior patterns to detect anomalous VNC session activities."
  },
  {
    icon: AlertTriangle,
    title: "Threat Intelligence",
    description: "Integrated threat intelligence feeds provide up-to-date information on VNC-based attack vectors."
  },
  {
    icon: Lock,
    title: "Secure Tunneling",
    description: "Encrypted VNC connections with multi-factor authentication to prevent unauthorized access."
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Automated incident response system that can block suspicious connections within milliseconds."
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Worldwide network monitoring capabilities to detect VNC attacks from any geographic location."
  }
];

const stats = [
  { number: "99.9%", label: "Attack Detection Rate" },
  { number: "<50ms", label: "Response Time" },
  { number: "24/7", label: "Monitoring" },
  { number: "0", label: "False Positives" }
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
  <BackgroundPaths title="VNC KAVACH" />
        
        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 p-6">
          <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-2">
              <img src="/logo-kavach.svg" alt="VNC KAVACH" className="w-10 h-5 object-contain" />
              <span className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
                VNC KAVACH
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="cyber" onClick={() => navigate('/dashboard')}>
                Launch Dashboard
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Content Override */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto bg-background/80 backdrop-blur-sm p-12 rounded-3xl border border-border/20"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tighter">
                <span className="text-cyber-blue">
                  Advanced VNC
                </span>
                <br />
                <span className="text-foreground">Attack Protection</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Identify and neutralize Virtual Network Computing (VNC) based data exfiltration attacks 
                with our cutting-edge AI-powered security platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/dashboard')}
                  className="bg-gradient-cyber hover:opacity-90 text-white font-semibold px-8 py-4"
                >
                  View Dashboard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/demo')}
                  className="border-primary/20 backdrop-blur-sm"
                >
                  See Demo Attack
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-cyber-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced <span className="text-cyber-blue">Security Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive VNC protection system combines multiple layers of security 
              to provide unmatched protection against data exfiltration attacks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-cyber flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-cyber">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Network?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the power of advanced VNC attack detection and protection. 
              See our system in action with a live demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                onClick={() => navigate('/dashboard')}
                className="bg-white text-cyber-blue hover:bg-white/90 font-semibold px-8 py-4"
              >
                Open Dashboard
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => navigate('/demo')}
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Try Demo Attack
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}