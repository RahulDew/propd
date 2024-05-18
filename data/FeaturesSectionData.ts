import FeaturesMockup from "@/public/assets/appfeatures/FeaturesMockup.png";

import AutoDialAutoSave from "@/public/assets/appfeatures/auto-dial-auto-save.svg";
import AutomationForReptitiveTask from "@/public/assets/appfeatures/automation-for-reptitive-task.svg";
import LeadManagement from "@/public/assets/appfeatures/lead-management.svg";
import PropertyManagement from "@/public/assets/appfeatures/property-management.svg";
import ReminderAndPushNotification from "@/public/assets/appfeatures/reminder-and-push-notification.svg";
import SalesAnalysis from "@/public/assets/appfeatures/sales-analysis.svg";

export const FeaturesSectionData = {
  heading: {
    title: "App features",
    desc: "The most simplified android crm app designed for real estate professionals. Now you can track leads, follow-ups and increase your conversions.",
  },
  featuresMockup: FeaturesMockup,
  featuresList1: [
    {
      icon: LeadManagement,
      title: "Lead Management",
      desc: "Take charge of your leads with our all-in-one platform. From assigning leads and setting priorities to viewing lead history, you can track and manage everything easily.",
    },
    {
      icon: PropertyManagement,
      title: "Property Management",
      desc: "Our feature-packed CRM is designed to simplify property tracking, maintenance, and client interactions, allowing you to focus on what you do best – real estate transactions.",
    },
    {
      icon: SalesAnalysis,
      title: "Sales Analysis",
      desc: "Get powerful insights from your data. Make smart decisions and boost your success in the competitive real estate market.",
    },
  ],
  featuresList2: [
    {
      icon: AutomationForReptitiveTask,
      title: "Automation for Repetitive Tasks",
      desc: "Let your team focus on important work while we handle the repetitive tasks: Welcome Message, Lead Assignment, Scheduling, WhatsApp Automation",
    },
    {
      icon: AutoDialAutoSave,
      title: "Auto Dialer and Auto Save",
      desc: "Make more calls with our automated calling process, increasing call attempts by up to 200%. Choose from status-based calling, click-to-dial. Auto-save client info from your business SIM card.",
    },
    {
      icon: ReminderAndPushNotification,
      title: "Reminders and Push Notifications",
      desc: "Set reminders to follow up with your clients, ensuring you never miss an opportunity.",
    },
  ],
};
