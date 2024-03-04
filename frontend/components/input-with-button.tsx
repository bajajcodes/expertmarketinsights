import { cn } from "@/lib/utils";
import React from "react";
import { NewsLetterForm } from "./newsletter-form";

export function InputWithButton({
  className,
  title = "Subscribe",
  direction = "column",
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  title?: string;
  direction?: "row" | "column";
}) {
  return (
    <div className={cn("w-full max-w-xl items-center", className)} {...rest}>
      <NewsLetterForm title={title} direction={direction} className="gap-0" />
    </div>
  );
}
