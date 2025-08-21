import { CreativePricing } from "@/components/ui/creative-pricing"
import type { PricingTier } from "@/components/ui/creative-pricing"
import { Calculator, FileText, Globe, Shield, Users, Zap } from "lucide-react";

const taxationTiers: PricingTier[] = [
    {
        name: "Personal Tax",
        icon: <FileText className="w-6 h-6" />,
        price: 150,
        description: "Complete personal tax filing for individuals",
        color: "blue",
        features: [
            "T1 personal tax return",
            "BC-specific tax credits",
            "CRA correspondence support",
            "Tax planning consultation",
        ],
    },
    {
        name: "Small Business",
        icon: <Calculator className="w-6 h-6" />,
        price: 500,
        description: "Comprehensive tax services for small businesses",
        color: "green",
        features: [
            "T2 corporate tax return",
            "GST/PST filing",
            "Payroll setup & management",
            "Business expense optimization",
        ],
        popular: true,
    },
    {
        name: "Premium Package",
        icon: <Shield className="w-6 h-6" />,
        price: 1200,
        description: "Complete tax management for growing businesses",
        color: "purple",
        features: [
            "All Small Business features",
            "Monthly bookkeeping",
            "Quarterly tax planning",
            "CRA representation",
        ],
    },
];

const webDesignTiers: PricingTier[] = [
    {
        name: "Basic Website",
        icon: <Globe className="w-6 h-6" />,
        price: 2500,
        description: "Professional website for small businesses",
        color: "blue",
        features: [
            "5-page responsive website",
            "Contact form",
            "Basic SEO setup",
            "Google Analytics",
        ],
    },
    {
        name: "Professional",
        icon: <Zap className="w-6 h-6" />,
        price: 5000,
        description: "Feature-rich website with advanced functionality",
        color: "green",
        features: [
            "10-page responsive website",
            "Custom design system",
            "Advanced SEO optimization",
            "Content management system",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        icon: <Users className="w-6 h-6" />,
        price: 10000,
        description: "Full-service digital transformation",
        color: "purple",
        features: [
            "Unlimited pages",
            "E-commerce integration",
            "Custom functionality",
            "Ongoing support",
        ],
    },
];

function CreativePricingDemo() {
    return (
        <div className="space-y-20">
            {/* Taxation Services */}
            <CreativePricing 
                tag="Taxation Services"
                title="Professional Tax Solutions"
                description="Expert tax services for individuals and businesses across Canada"
                tiers={taxationTiers}
            />
            
            {/* Web Design Services */}
            <CreativePricing 
                tag="Web Design Services"
                title="Modern Web Solutions"
                description="Cutting-edge websites that drive results for your business"
                tiers={webDesignTiers}
            />
        </div>
    )
}

export { CreativePricingDemo }
