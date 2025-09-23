import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle2, 
  Activity, 
  Eye,
  Zap,
  ArrowLeft,
  RefreshCw,
  Globe,
  Users,
  Monitor,
  Lock
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const threatLevels = [
  { id: 1, level: "Critical", count: 2, color: "text-red-500", bg: "bg-red-500/10" },
  { id: 2, level: "High", count: 7, color: "text-orange-500", bg: "bg-orange-500/10" },
  { id: 3, level: "Medium", count: 23, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { id: 4, level: "Low", count: 156, color: "text-blue-500", bg: "bg-blue-500/10" }
];

const recentAttacks = [
  {
    id: 1,
    timestamp: "2024-01-15 14:32:21",
    source: "192.168.1.105",
    target: "10.0.2.50",
    severity: "Critical",
    type: "Data Exfiltration",
    status: "Blocked",
    details: "Suspicious file transfer detected via VNC session"
  },
  {
    id: 2,
    timestamp: "2024-01-15 14:28:15",
    source: "203.45.67.89",
    target: "10.0.2.48",
    severity: "High",
    type: "Credential Theft",
    status: "Investigating",
    details: "Multiple failed login attempts detected"
  },
  {
    id: 3,
    timestamp: "2024-01-15 14:25:03",
    source: "172.16.10.23",
    target: "10.0.2.51",
    severity: "Medium",
    type: "Screen Recording",
    status: "Monitoring",
    details: "Unusual screen capture activity patterns"
  }
];

const systemMetrics = [
  { label: "Active Connections", value: "1,247", icon: Users, trend: "+12%" },
  { label: "Monitored Endpoints", value: "3,842", icon: Monitor, trend: "+3%" },
  { label: "Protected Networks", value: "156", icon: Globe, trend: "+8%" },
  { label: "Security Score", value: "98.7%", icon: Lock, trend: "+0.2%" }
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "text-red-500 bg-red-500/10";
      case "High": return "text-orange-500 bg-orange-500/10";
      case "Medium": return "text-yellow-500 bg-yellow-500/10";
      case "Low": return "text-blue-500 bg-blue-500/10";
      default: return "text-gray-500 bg-gray-500/10";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Blocked": return "text-red-500 bg-red-500/10";
      case "Investigating": return "text-orange-500 bg-orange-500/10";
      case "Monitoring": return "text-blue-500 bg-blue-500/10";
      default: return "text-gray-500 bg-gray-500/10";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <div className="flex items-center space-x-2">
                <img src="/logo-kavach.svg" alt="VNC KAVACH" className="w-10 h-5 object-contain" />
                <h1 className="text-2xl font-bold">VNC KAVACH Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                {currentTime.toLocaleString()}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing}
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button onClick={() => navigate('/demo')}>
                View Demo Attack
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Card className="border-primary/20 bg-gradient-cyber">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white text-2xl">System Status</CardTitle>
                  <CardDescription className="text-white/80">
                    Real-time VNC attack protection monitoring
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span className="text-white font-semibold">All Systems Operational</span>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {systemMetrics.map((metric, index) => (
            <Card key={metric.label} className="border-primary/10 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <metric.icon className="w-6 h-6 text-cyber-blue" />
                  <Badge variant="outline" className="text-xs text-success">
                    {metric.trend}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Threat Levels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-cyber-blue" />
                  Threat Analysis
                </CardTitle>
                <CardDescription>Current threat level distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {threatLevels.map((threat) => (
                    <div key={threat.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${threat.bg} ${threat.color}`}></div>
                        <span className="font-medium">{threat.level}</span>
                      </div>
                      <Badge variant="outline" className={threat.color}>
                        {threat.count}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Overall Security Level</span>
                    <span className="font-semibold">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Attacks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-cyber-blue" />
                  Recent Attack Attempts
                </CardTitle>
                <CardDescription>Latest VNC-based security incidents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAttacks.map((attack) => (
                    <div key={attack.id} className="border border-border/40 rounded-lg p-4 bg-card/30">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <Badge className={getSeverityColor(attack.severity)}>
                            {attack.severity}
                          </Badge>
                          <Badge variant="outline" className={getStatusColor(attack.status)}>
                            {attack.status}
                          </Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">{attack.timestamp}</span>
                      </div>
                      <div className="text-sm font-medium mb-1">{attack.type}</div>
                      <div className="text-sm text-muted-foreground mb-2">{attack.details}</div>
                      <div className="text-xs text-muted-foreground">
                        {attack.source} → {attack.target}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-cyber-blue" />
                Quick Actions
              </CardTitle>
              <CardDescription>Manage your VNC security settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" onClick={() => navigate('/demo')}>
                  <Activity className="w-4 h-4 mr-2" />
                  Run Demo Attack
                </Button>
                <Button variant="outline">
                  <Shield className="w-4 h-4 mr-2" />
                  Configure Rules
                </Button>
                <Button variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  View Logs
                </Button>
                <Button variant="outline">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}