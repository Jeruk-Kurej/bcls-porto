import { 
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
  Store,
  Video,
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
  Store,
  Video,
};

export const getFeatureIcon = (name?: string): LucideIcon => {
  if (!name || !featureIconMap[name]) return Sparkles;
  return featureIconMap[name];
};
