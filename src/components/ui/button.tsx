import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "nhs-primary": "bg-nhs-blue text-white hover:bg-nhs-blue-hover focus:ring-2 focus:ring-nhs-blue focus:ring-offset-2 font-medium shadow-sm transition-all duration-300",
        "nhs-secondary": "border-2 border-nhs-blue text-nhs-blue bg-white hover:bg-nhs-blue hover:text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300",
        "nextdoc-uk": "bg-brand-nextdoc-uk text-white hover:bg-brand-nextdoc-uk-hover focus:ring-2 focus:ring-brand-nextdoc-uk focus:ring-offset-2 font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]",
        "nextdoc-india": "bg-brand-nextdoc-india text-white hover:bg-brand-nextdoc-india-hover focus:ring-2 focus:ring-brand-nextdoc-india focus:ring-offset-2 font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]",
        "nextdoc-pg": "bg-brand-nextdoc-pg text-white hover:bg-brand-nextdoc-pg-hover focus:ring-2 focus:ring-brand-nextdoc-pg focus:ring-offset-2 font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]",
        "nextdoc-med": "bg-brand-nextdoc-med text-white hover:bg-brand-nextdoc-med-hover focus:ring-2 focus:ring-brand-nextdoc-med focus:ring-offset-2 font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]",
        "nextdoc-care": "bg-brand-nextdoc-care text-white hover:bg-brand-nextdoc-care-hover focus:ring-2 focus:ring-brand-nextdoc-care focus:ring-offset-2 font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]",
        "nextdoc-labs": "bg-brand-nextdoc-labs text-gray-900 hover:bg-brand-nextdoc-labs-hover focus:ring-2 focus:ring-brand-nextdoc-labs focus:ring-offset-2 font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]",
        "ndg-academy": "bg-brand-ndg-academy text-white hover:bg-brand-ndg-academy-hover focus:ring-2 focus:ring-brand-ndg-academy focus:ring-offset-2 font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-xl px-6 py-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
