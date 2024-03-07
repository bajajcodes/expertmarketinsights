"use client";

import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export function SubmitButton({
  textContent,
  className,
}: {
  textContent: string;
  className?: string;
}) {
  const { pending } = useFormStatus();
  return (
    <Button
      className={cn(
        "bg-expertmarketinsight hover:bg-expertmarketinsight/90 text-white w-full",
        className
      )}
      type="submit"
      aria-disabled={pending}
      disabled={pending}
    >
      {textContent}
    </Button>
  );
}
