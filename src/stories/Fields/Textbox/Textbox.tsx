import * as React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

// Tiny utility so consumers can pass className without fighting Tailwind precedence.
function cn(...args: Parameters<typeof clsx>) {
  return twMerge(clsx(args));
}

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /** Left adornment content, e.g., an icon */
  start?: React.ReactNode;
  /** Right adornment content, e.g., an icon */
  end?: React.ReactNode;
  /** Size variants for consistent sizing */
  size?: "sm" | "md" | "lg";
  /** Validation state styling */
  invalid?: boolean;
  valid?: boolean;
}

const sizeStyles = {
  sm: "min-h-[72px] text-[13px] px-3 py-2 gap-2",
  md: "min-h-[80px] text-sm px-3.5 py-2.5 gap-2.5", 
  lg: "min-h-[96px] text-base px-4 py-3 gap-3",
};

const stateStyles = {
  base: "rounded-[--bunni-radius] text-[--bunni-fg] placeholder:text-[--bunni-muted] transition-shadow outline-none",
  focus: "focus-within:ring-2 focus-within:ring-[--bunni-focus] focus-within:shadow-[var(--bunni-shadow-focus)]",
  disabled: "opacity-60 pointer-events-none",
  invalid: "!border-[--bunni-danger] focus-within:ring-[--bunni-danger]",
  valid: "",
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    start, 
    end, 
    size = "md",
    invalid,
    valid,
    disabled,
    ...props 
  }, ref) => {
    return (
      <div
        className={cn(
          "group/textarea inline-flex w-full items-start",
          "[&>textarea]:min-w-0",
          sizeStyles[size],
          "bg-[--bunni-bg] border border-[--bunni-border] focus-within:border-[--bunni-focus]",
          stateStyles.base,
          stateStyles.focus,
          disabled && stateStyles.disabled,
          invalid && stateStyles.invalid,
          valid && stateStyles.valid,
          className
        )}
        aria-invalid={invalid ? true : undefined}
      >
        {start ? (
          <span className={cn("shrink-0 inline-flex items-start pt-2.5", {
            "pt-2": size === "sm",
            "pt-3": size === "lg"
          })}>
            {start}
          </span>
        ) : null}

        <textarea
          ref={ref}
          disabled={disabled}
          className={cn(
            "peer block w-full bg-transparent outline-none resize-none",
            // Remove default textarea styling
            "border-0 p-0",
            // Remove iOS shadows
            "[appearance:textfield]",
          )}
          {...props}
        />

        {end ? (
          <span className={cn("shrink-0 inline-flex items-start pt-2.5", {
            "pt-2": size === "sm", 
            "pt-3": size === "lg"
          })}>
            {end}
          </span>
        ) : null}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
