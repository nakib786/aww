import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonLiquidGlassProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string | React.ReactNode;
    asChild?: boolean;
}

export function ButtonLiquidGlass({
    className,
    label = "Get Started",
    asChild = false,
    children,
    ...props
}: ButtonLiquidGlassProps) {
    if (asChild) {
        // When asChild is true, we need to apply the styling to the child component
        return (
            <div
                className={cn(
                    "relative h-12 px-6 overflow-hidden inline-flex items-center justify-center",
                    "bg-slate-800/50 backdrop-blur-sm border border-slate-600/30",
                    "text-white shadow-lg rounded-xl",
                    "transition-all duration-300 ease-out",
                    "hover:bg-slate-700/60 hover:border-slate-500/50 hover:shadow-xl",
                    "hover:scale-105 active:scale-95",
                    "group cursor-pointer",
                    className
                )}
            >
                {/* Subtle inner glow */}
                <div
                    className={cn(
                        "absolute inset-0 rounded-xl",
                        "bg-gradient-to-br from-white/5 to-transparent",
                        "opacity-0 group-hover:opacity-100",
                        "transition-opacity duration-300 ease-out"
                    )}
                />
                
                {/* Animated border highlight */}
                <div
                    className={cn(
                        "absolute inset-0 rounded-xl",
                        "border border-white/10",
                        "opacity-0 group-hover:opacity-100",
                        "transition-all duration-500 ease-out",
                        "group-hover:border-white/20"
                    )}
                />

                {/* Content */}
                <div className="relative flex items-center justify-center gap-2">
                    {children}
                </div>
            </div>
        );
    }

    // Regular button with default content
    return (
        <Button
            className={cn(
                "relative h-12 px-6 overflow-hidden",
                "bg-slate-800/50 backdrop-blur-sm border border-slate-600/30",
                "text-white shadow-lg rounded-xl",
                "transition-all duration-300 ease-out",
                "hover:bg-slate-700/60 hover:border-slate-500/50 hover:shadow-xl",
                "hover:scale-105 active:scale-95",
                "group",
                className
            )}
            {...props}
        >
            {/* Subtle inner glow */}
            <div
                className={cn(
                    "absolute inset-0 rounded-xl",
                    "bg-gradient-to-br from-white/5 to-transparent",
                    "opacity-0 group-hover:opacity-100",
                    "transition-opacity duration-300 ease-out"
                )}
            />
            
            {/* Animated border highlight */}
            <div
                className={cn(
                    "absolute inset-0 rounded-xl",
                    "border border-white/10",
                    "opacity-0 group-hover:opacity-100",
                    "transition-all duration-500 ease-out",
                    "group-hover:border-white/20"
                )}
            />

            {/* Content */}
            <div className="relative flex items-center justify-center gap-2">
                <span className="font-medium tracking-wide">{label}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
        </Button>
    );
}


