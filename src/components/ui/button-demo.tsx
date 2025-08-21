import { ButtonLiquidGlass } from "@/components/ui/button-colorful"

function ButtonDemo() {
    return (
        <div className="flex flex-col gap-4 p-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
            <h3 className="text-2xl font-bold text-white">Liquid Glass Button Demo</h3>
            <div className="flex flex-wrap gap-6">
                <ButtonLiquidGlass />
                <ButtonLiquidGlass label="Explore More" />
                <ButtonLiquidGlass label="Contact Us" />
                <ButtonLiquidGlass label="Learn More" />
            </div>
        </div>
    )
}

export { ButtonDemo }
