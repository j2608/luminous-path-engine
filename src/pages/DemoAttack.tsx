import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  ArrowLeft, 
  Play, 
  Square, 
  AlertTriangle, 
  Shield, 
  Activity,
  Eye,
  Zap,
  CheckCircle2,
  XCircle,
  Clock,
  Monitor,
  Users
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

interface AttackStep {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'active' | 'detected' | 'blocked';
  timestamp?: string;
  details?: string;
}

const attackSteps: AttackStep[] = [
  {
    id: 1,
    title: "Initial Connection",
    description: "Attacker attempts to establish VNC connection",
    status: 'pending'
  },
  {
    id: 2,
    title: "Authentication Bypass",
    description: "Attempting to bypass VNC authentication",
    status: 'pending'
  },
  {
    id: 3,
    title: "Screen Access",
    description: "Gaining unauthorized screen access",
    status: 'pending'
  },
  {
    id: 4,
    title: "Data Reconnaissance",
    description: "Scanning for sensitive data on screen",
    status: 'pending'
  },
  {
    id: 5,
    title: "File Transfer Attempt",
    description: "Attempting to exfiltrate sensitive files",
    status: 'pending'
  },
  {
    id: 6,
    title: "Detection & Response",
  description: "VNC KAVACH detects and blocks the attack",
    status: 'pending'
  }
];

export default function DemoAttack() {
  const navigate = useNavigate();
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [steps, setSteps] = useState<AttackStep[]>(attackSteps);
  const [progress, setProgress] = useState(0);
  const [blocked, setBlocked] = useState(false);

  const startDemo = () => {
    setIsRunning(true);
    setCurrentStep(0);
    setProgress(0);
    setBlocked(false);
    setSteps(attackSteps.map(step => ({ ...step, status: 'pending', timestamp: undefined })));
  };

  const stopDemo = () => {
    setIsRunning(false);
    setCurrentStep(-1);
    setProgress(0);
    setBlocked(false);
    setSteps(attackSteps.map(step => ({ ...step, status: 'pending', timestamp: undefined })));
  };

  useEffect(() => {
    if (!isRunning || currentStep >= steps.length) return;

    const timer = setTimeout(() => {
      const now = new Date().toLocaleTimeString();
      
      setSteps(prev => prev.map((step, index) => {
        if (index === currentStep) {
          // Special handling for the last step (detection)
          if (index === steps.length - 1) {
            setBlocked(true);
            return {
              ...step,
              status: 'blocked',
              timestamp: now,
              details: 'Attack successfully blocked by VNC KAVACH'
            };
          }
          // Steps 0-2 are successful for the attacker
          else if (index < 3) {
            return {
              ...step,
              status: 'active',
              timestamp: now,
              details: 'Attack step completed successfully'
            };
          }
          // Steps 3-4 get detected
          else {
            return {
              ...step,
              status: 'detected',
              timestamp: now,
              details: 'Suspicious activity detected by AI monitoring'
            };
          }
        }
        return step;
      }));

      setProgress(((currentStep + 1) / steps.length) * 100);
      
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        setIsRunning(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isRunning, currentStep, steps.length]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Activity className="w-4 h-4 text-yellow-500" />;
      case 'detected': return <Eye className="w-4 h-4 text-orange-500" />;
  case 'blocked': return <Shield className="w-4 h-4 text-green-500" aria-label="VNC KAVACH status" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-yellow-500 bg-yellow-500/10';
      case 'detected': return 'text-orange-500 bg-orange-500/10';
      case 'blocked': return 'text-green-500 bg-green-500/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-2xl font-bold">VNC Attack Simulation</h1>
            </div>
            <div className="flex items-center space-x-4">
              {!isRunning ? (
                <Button onClick={startDemo} className="bg-gradient-cyber hover:opacity-90">
                  <Play className="w-4 h-4 mr-2" />
                  Start Demo Attack
                </Button>
              ) : (
                <Button variant="destructive" onClick={stopDemo}>
                  <Square className="w-4 h-4 mr-2" />
                  Stop Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Demo Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {blocked ? (
            <Alert className="border-green-500/20 bg-green-500/10">
              <Shield className="h-4 w-4 text-green-500" />
              <AlertDescription className="text-green-700 dark:text-green-300">
                <strong>Attack Successfully Blocked!</strong> VNC KAVACH detected and neutralized the threat in real-time.
              </AlertDescription>
            </Alert>
          ) : isRunning ? (
            <Alert className="border-orange-500/20 bg-orange-500/10">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              <AlertDescription className="text-orange-700 dark:text-orange-300">
                <strong>Simulated Attack in Progress</strong> - Monitoring VNC connection for suspicious activity.
              </AlertDescription>
            </Alert>
          ) : (
            <Alert className="border-blue-500/20 bg-blue-500/10">
              <Monitor className="h-4 w-4 text-blue-500" />
              <AlertDescription className="text-blue-700 dark:text-blue-300">
                <strong>Ready to Simulate</strong> - Click "Start Demo Attack" to see VNC KAVACH in action.
              </AlertDescription>
            </Alert>
          )}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Attack Progress</span>
                <Badge variant="outline">{Math.round(progress)}% Complete</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={progress} className="h-3" />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>Attack Initiated</span>
                <span>Threat Neutralized</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Attack Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-cyber-blue" />
                  Attack Timeline
                </CardTitle>
                <CardDescription>Real-time simulation of VNC-based data exfiltration attack</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <AnimatePresence>
                    {steps.map((step, index) => (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`border rounded-lg p-4 transition-all duration-300 ${
                          step.status === 'pending' 
                            ? 'border-border/40 bg-card/30' 
                            : 'border-primary/20 bg-card/50 shadow-glow'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            {getStatusIcon(step.status)}
                            <div>
                              <div className="font-medium">{step.title}</div>
                              <div className="text-sm text-muted-foreground">{step.description}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={getStatusColor(step.status)}>
                              {step.status}
                            </Badge>
                            {step.timestamp && (
                              <div className="text-xs text-muted-foreground mt-1">
                                {step.timestamp}
                              </div>
                            )}
                          </div>
                        </div>
                        {step.details && (
                          <div className="text-sm text-muted-foreground bg-muted/30 rounded p-2 mt-2">
                            {step.details}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Real-time Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-cyber-blue" />
                  Detection Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Threat Level</span>
                  <Badge className={blocked ? 'text-green-500 bg-green-500/10' : isRunning ? 'text-red-500 bg-red-500/10' : 'text-gray-500 bg-gray-500/10'}>
                    {blocked ? 'Neutralized' : isRunning ? 'Critical' : 'Safe'}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Response Time</span>
                  <span className="font-mono text-sm">
                    {blocked ? '47ms' : isRunning ? 'Processing...' : '--'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">AI Confidence</span>
                  <span className="font-mono text-sm">
                    {blocked ? '99.8%' : isRunning && currentStep > 2 ? '94.3%' : '--'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Actions Taken</span>
                  <span className="text-sm">
                    {blocked ? 'Connection blocked' : isRunning && currentStep > 3 ? 'Monitoring' : 'None'}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-cyber-blue" />
                  Network Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Active Connections</span>
                  <span className="font-mono text-sm">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Blocked Attempts</span>
                  <span className="font-mono text-sm text-red-500">
                    {blocked ? '1' : '0'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">System Health</span>
                  <div className="flex items-center space-x-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-500">Optimal</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Demo Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>About This Demo</CardTitle>
              <CardDescription>
                This simulation demonstrates how VNC KAVACH protects against real-world attack scenarios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">What This Demo Shows:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Real-time VNC connection monitoring</li>
                    <li>• AI-powered behavioral analysis</li>
                    <li>• Automated threat detection and response</li>
                    <li>• Instant connection blocking capabilities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Protection Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sub-50ms response time</li>
                    <li>• Machine learning anomaly detection</li>
                    <li>• Zero false positive rate</li>
                    <li>• Comprehensive logging and reporting</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}