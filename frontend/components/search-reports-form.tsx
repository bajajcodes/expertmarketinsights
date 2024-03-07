"use client";
import { navigateToReports } from "@/actions/form";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useFormState } from "react-dom";
import { FormItem, FormMessage } from "./form";
import { SubmitButton } from "./submit-button";
import { Input } from "./ui/input";

export function SearchReportsForm({ className }: { className?: string }) {
  const searchParams = useSearchParams();
  const [state, action] = useFormState(navigateToReports, { error: "" });
  const search = searchParams.get("search") || "";

  return (
    <>
      <form
        className={cn("grid md:grid-cols-[3fr_1fr] w-full", className)}
        action={action}
      >
        <FormItem className="transition-all ease-in-out max-w-[unset]">
          <Input
            defaultValue={search}
            name="search"
            type="search"
            placeholder={" Search by Report Title"}
            className="bg-white py-6 px-4 rounded-r-none focus:ring-0 focus-visible:ring-0"
            pattern="^[a-zA-Z0-9\s]+$"
            required
          />
        </FormItem>
        <SubmitButton textContent="Search" className="h-full" />
      </form>
      <FormMessage className="leading-8 font-semibold text-base">
        {state?.error}
      </FormMessage>
    </>
  );
}
