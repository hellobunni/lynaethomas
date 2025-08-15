import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

// Utility function for merging Tailwind classes with proper typing
function cn(...args: (string | undefined | null | false)[]): string {
  return twMerge(clsx(args));
}

// Base props interface for select components
interface SelectComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  SelectComponentProps & SelectPrimitive.SelectTriggerProps
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-[--bunni-radius] border border-[--bunni-border] bg-[--bunni-bg] px-3 py-2 text-sm text-[--bunni-fg] placeholder:text-[--bunni-muted] focus:outline-none focus:ring-2 focus:ring-[--bunni-focus] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export const SelectContent = React.forwardRef<
  HTMLDivElement,
  SelectComponentProps & SelectPrimitive.SelectContentProps
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Content
    ref={ref}
    className={cn(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-[--bunni-radius] border border-[--bunni-border] bg-[--bunni-bg] text-[--bunni-fg] shadow-md animate-in fade-in-80",
      className
    )}
    {...props}
  >
    <SelectPrimitive.Viewport className="p-1">
      {children}
    </SelectPrimitive.Viewport>
  </SelectPrimitive.Content>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  SelectComponentProps & SelectPrimitive.SelectItemProps
>(({ className, children, value, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    value={value}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-[--bunni-focus]/10 focus:text-[--bunni-focus] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
