"use client" 

import * as React from "react"

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Slot } from "@radix-ui/react-slot";

interface MagnetizeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    particleCount?: number;
    attractRadius?: number;
    children?: React.ReactNode;
    asChild?: boolean;
}

interface Particle {
    id: number;
    x: number;
    y: number;
}

function MagnetizeButton({
    className,
    particleCount = 8,
    attractRadius = 50,
    children = "Book Consult",
    asChild = false,
    ...props
}: MagnetizeButtonProps) {
    const [isAttracting, setIsAttracting] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const particlesControl = useAnimation();

    useEffect(() => {
        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
        }));
        setParticles(newParticles);
    }, [particleCount]);

    const handleInteractionStart = useCallback(async () => {
        setIsAttracting(true);
        await particlesControl.start({
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
            },
        });
    }, [particlesControl]);

    const handleInteractionEnd = useCallback(async () => {
        setIsAttracting(false);
        await particlesControl.start((i) => ({
            x: particles[i].x,
            y: particles[i].y,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        }));
    }, [particlesControl, particles]);

    const buttonStyles = cn(
        "relative touch-none overflow-hidden inline-flex items-center justify-center",
        "bg-white/10 backdrop-blur-sm border border-white/20",
        "hover:bg-white/20 hover:border-white/30",
        "text-white rounded-xl",
        "h-12 px-6 py-3 text-sm font-medium",
        "transition-all duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
        "disabled:pointer-events-none disabled:opacity-50",
        "shadow-lg hover:shadow-xl",
        className
    );

    if (asChild) {
        return (
            <Slot
                className={buttonStyles}
                onMouseEnter={handleInteractionStart}
                onMouseLeave={handleInteractionEnd}
                onTouchStart={handleInteractionStart}
                onTouchEnd={handleInteractionEnd}
                {...props}
            >
                <div className="relative w-full h-full flex items-center justify-center">
                    {particles.map((_, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial={{ x: particles[index].x, y: particles[index].y }}
                            animate={particlesControl}
                            className={cn(
                                "absolute w-1 h-1 rounded-full",
                                "bg-white/40",
                                "transition-opacity duration-300",
                                isAttracting ? "opacity-100" : "opacity-20"
                            )}
                        />
                    ))}
                    <span className="relative w-full flex items-center justify-center">
                        {children}
                    </span>
                </div>
            </Slot>
        );
    }

    return (
        <button
            className={buttonStyles}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            {...props}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                {particles.map((_, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial={{ x: particles[index].x, y: particles[index].y }}
                        animate={particlesControl}
                        className={cn(
                            "absolute w-1 h-1 rounded-full",
                            "bg-white/40",
                            "transition-opacity duration-300",
                            isAttracting ? "opacity-100" : "opacity-20"
                        )}
                    />
                ))}
                <span className="relative w-full flex items-center justify-center">
                    {children}
                </span>
            </div>
        </button>
    );
}

export { MagnetizeButton }
