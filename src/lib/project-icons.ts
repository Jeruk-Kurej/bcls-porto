import { 
  Laptop, 
  Smartphone, 
  Layers, 
  Layout, 
  Shield, 
  Cloud, 
  BrainCircuit,
  Database,
  Lock,
  Calendar,
  BookOpen,
  Key,
  UsersRound,
  Bot,
  Swords,
  FileText,
  Trophy,
  ShieldCheck,
  Users,
  BarChart,
  ShoppingCart,
  Package,
  ClipboardList,
  MessageSquare,
  BellRing,
  LayoutDashboard,
  Sparkles,
  type LucideIcon
} from "lucide-react";


export const featureIconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Database,
  Cloud,
  Lock,
  Calendar,
  BookOpen,
  Key,
  UsersRound,
  Bot,
  Swords,
  FileText,
  Trophy,
  ShieldCheck,
  Users,
  BarChart,
  ShoppingCart,
  Package,
  Shield,
  ClipboardList,
  MessageSquare,
  BellRing,
  LayoutDashboard,
};

export const getFeatureIcon = (name?: string): LucideIcon => {
  if (!name || !featureIconMap[name]) return Sparkles;
  return featureIconMap[name];
};

export const getProjectFallbackIcon = (index: number): LucideIcon => {
  const icons: LucideIcon[] = [Laptop, Layers, Layout, Smartphone, Smartphone, Shield];
  return icons[index % icons.length];
};
