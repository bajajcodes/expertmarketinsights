import React from 'react';
import { cn } from '@/lib/utils';
import { Label } from './ui/label';

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
});

FormDescription.displayName = 'FormDescription';

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  if (!children) return null;
  return (
    <p
      ref={ref}
      className={cn('text-sm font-medium text-destructive', className)}
      {...props}
    >
      {children}
    </p>
  );
});

FormMessage.displayName = 'FormMessage';

const FormLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label> & {
    error?: string;
    htmlFor: string;
  }
>(({ className, error, htmlFor, ...props }, ref) => {
  return (
    <Label
      ref={ref}
      className={cn(error && 'text-destructive', "uppercase", className)}
      htmlFor={htmlFor}
      {...props}
    />
  );
});

FormLabel.displayName = 'FormLabel';

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col w-full max-w-sm  gap-1.5 space-y-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

FormItem.displayName = 'FormItem';

export { FormDescription, FormMessage, FormLabel, FormItem };
