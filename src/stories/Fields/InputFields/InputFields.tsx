import * as React from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * Bunni UI — Base Input + Field wrapper
 * Tailwind v4.1, accessible, token-driven, Radix-friendly.
 *
 * Design tokens assumed in CSS:
 * --bunni-fg, --bunni-bg, --bunni-border, --bunni-muted, --bunni-danger, --bunni-focus
 * --bunni-radius, --bunni-radius-lg
 * --bunni-shadow-focus
 */


/**
 * Usage examples:
 *
 * <Field label="Email" htmlFor="email" hint="We never share your email.">
 *   <Input id="email" placeholder="you@domain.com" start={<AtSign className="h-4 w-4" />} />
 * </Field>
 *
 * <Field label="Password" htmlFor="pwd" error={form.errors.password} requiredMark>
 *   <Input id="pwd" type="password" revealable allowClear />
 * </Field>
 *
 * <Input placeholder="Search" size="lg" start={<Search className="h-5 w-5" />} end={<kbd className="text-[11px]">⌘K</kbd>} />
 */


// Tiny utility so consumers can pass className without fighting Tailwind precedence.
function cn(...args: Parameters<typeof clsx>) {
  return twMerge(clsx(args));
}

export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "outline" | "subtle" | "filled";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
  variant?: InputVariant;
  /** Left adornment content, e.g., an icon */
  start?: React.ReactNode;
  /** Right adornment content, e.g., unit, icon */
  end?: React.ReactNode;
  /** Show a clear button when there is a value */
  allowClear?: boolean;
  /** For password fields, allow toggling visibility */
  revealable?: boolean;
  /** Validation state styling */
  invalid?: boolean;
  valid?: boolean;
}

const sizeStyles: Record<InputSize, string> = {
  sm: "h-9 text-[13px] px-3 gap-2",
  md: "h-10 text-sm px-3.5 gap-2.5",
  lg: "h-12 text-base px-4 gap-3",
};

const variantStyles: Record<InputVariant, string> = {
  outline:
    "bg-[--bunni-bg] border border-[--bunni-border] focus-within:border-[--bunni-focus]",
  subtle:
    "bg-[color-mix(in_oklab,var(--bunni-bg),#0000_85%)] border border-transparent focus-within:border-[--bunni-focus]",
  filled:
    "bg-[color-mix(in_oklab,var(--bunni-bg),#0000_70%)] border border-transparent focus-within:border-[--bunni-focus]",
};

const stateStyles = {
  base:
    "rounded-[--bunni-radius] text-[--bunni-fg] placeholder:text-[--bunni-muted] transition-shadow outline-none",
  focus:
    "focus-within:ring-2 focus-within:ring-[--bunni-focus] focus-within:shadow-[var(--bunni-shadow-focus)]",
  disabled: "opacity-60 pointer-events-none",
  invalid:
    "!border-[--bunni-danger] focus-within:ring-[--bunni-danger] aria-[invalid=true]:!border-[--bunni-danger]",
  valid: "",
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size = "md",
      variant = "outline",
      start,
      end,
      type = "text",
      allowClear,
      revealable,
      invalid,
      valid,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const [revealed, setRevealed] = React.useState(false);
    const isPassword = type === "password" && revealable;

    return (
      <div
        className={cn(
          "group/input inline-flex w-full items-center",
          "[&>input]:min-w-0",
          sizeStyles[size],
          variantStyles[variant],
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
          <span className={cn("shrink-0 inline-flex items-center" )}>{start}</span>
        ) : null}

        <input
          ref={ref}
          id={id}
          type={isPassword && revealed ? "text" : type}
          disabled={disabled}
          className={cn(
            "peer block w-full bg-transparent outline-none",
            // vertical padding is handled by the container height; let input breathe with y-px
            "py-0.5",
            // Remove iOS shadows
            "[appearance:textfield] [::-webkit-outer-spin-button]:appearance-none [::-webkit-inner-spin-button]:appearance-none",
          )}
          {...props}
        />

        {/* Clear button */}
        {allowClear && props.value && String(props.value).length > 0 ? (
          <button
            type="button"
            aria-label="Clear"
            onClick={() => {
              // Trigger onChange with empty value when controlled
              if (props.onChange) {
                const event = {
                  target: { value: "" },
                } as unknown as React.ChangeEvent<HTMLInputElement>;
                props.onChange(event);
              }
              // If uncontrolled, try to clear via ref if available
              const el = (ref as React.RefObject<HTMLInputElement>)?.current;
              if (el) el.value = "";
            }}
            className={cn(
              "ml-1 inline-flex h-6 w-6 items-center justify-center rounded-full",
              "hover:bg-black/5 active:scale-95 transition"
            )}
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}

        {/* Password reveal toggle */}
        {isPassword ? (
          <button
            type="button"
            aria-label={revealed ? "Hide password" : "Show password"}
            onClick={() => setRevealed((v) => !v)}
            className={cn(
              "ml-1 inline-flex h-6 w-6 items-center justify-center rounded-full",
              "hover:bg-black/5 active:scale-95 transition"
            )}
          >
            {revealed ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        ) : null}

        {end ? (
          <span className="ml-1 shrink-0 inline-flex items-center">{end}</span>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

/**
 * Field: label + input + hint/error aggregator
 * Keeps proper aria-describedby wiring for a11y.
 */
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  htmlFor?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  requiredMark?: boolean;
  children: React.ReactNode;
}

export function Field({
  label,
  htmlFor,
  hint,
  error,
  requiredMark,
  className,
  children,
  ...rest
}: FieldProps) {
  const describedById = React.useId();
  const hasHelp = Boolean(hint || error);

  // Safely get the single child and check if it's input-like
  let child: React.ReactElement | null = null;
  let isInputLike = false;

  try {
    child = React.Children.only(children) as React.ReactElement;
    // Check if it's a native input or our custom Input component
    isInputLike = child && (
      child.type === "input" || 
      (typeof child.type === "function" && 
       'displayName' in child.type && 
       child.type.displayName === "Input")
    );
  } catch (error) {
    // If there are multiple children or no children, just render as-is
    console.warn("Field component expects exactly one child element");
    return (
      <div className={cn("w-full space-y-1.5", className)} {...rest}>
       <div className="flex items-center justify-between">
       {label ? (
          <label
            htmlFor={htmlFor}
            className={cn(
              "inline-flex items-center gap-1 text-sm font-medium text-[--bunni-fg]"
            )}
          >
            <span>{label}</span>
            {requiredMark ? (
              <span className="text-[--bunni-danger]" aria-hidden>
                *
              </span>
            ) : null}
          </label>
        ) : null}
         {hasHelp ? (
          <div id={describedById} className="text-xs italic">
            {error
              ? <p className="text-[--bunni-danger]">{String(error)}</p>
              : hint
                ? <p className="text-[--bunni-muted]">{String(hint)}</p>
                : null}
          </div>
        ) : null}
      </div>
      {children}
      </div>
    );
  }

  const inputEl = isInputLike && child
    ? React.cloneElement(child, {
        "aria-describedby": hasHelp ? describedById : undefined,
        "aria-invalid": error ? true : (child.props as any)["aria-invalid"],
        id: htmlFor || (child.props as any).id,
      } as any)
    : child;

  return (
    <div className={cn("w-full space-y-1.5", className)} {...rest}>
<div className="flex items-center gap-2">
{label ? (
        <label
          htmlFor={htmlFor}
          className={cn(
            "inline-flex items-center gap-1 text-sm font-medium text-[--bunni-fg]"
          )}
        >
          <span>{label}</span>
          {requiredMark ? (
            <span className="text-[--bunni-danger]" aria-hidden>
              *
            </span>
          ) : null}
        </label>
      ) : null}
       {hasHelp ? (
        <div id={describedById} className="text-xs italic">
          {error ? (
            <p className="text-[--bunni-danger]">{error}</p>
          ) : hint ? (
            <p className="text-[--bunni-muted]">{hint}</p>
          ) : null}
        </div>
      ) : null}</div>

      {inputEl}

     
    </div>
  );
}
