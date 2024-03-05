"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export function SubmitButton({ textContent }: { textContent: string }) {
  const { pending } = useFormStatus();
  return (
    <Button
      className="bg-expertmarketinsight hover:bg-expertmarketinsight/90 text-white w-full"
      type="submit"
      aria-disabled={pending}
      disabled={pending}
    >
      {textContent}
    </Button>
  );
}
