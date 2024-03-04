"use client";

import { subscribeToNewsLetter } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { NewsLetterType } from "@/types/schema";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { FormItem, FormMessage } from "./form";
import { useToast } from "./ui/use-toast";

const intialState: NewsLetterType = {
  email: "",
};

export function NewsLetterForm({
  title,
  direction = "column",
  className = "",
}: {
  title: string;
  className?: string;
  direction?: "row" | "column";
}) {
  const { toast } = useToast();
  const [state, formAction] = useFormState(subscribeToNewsLetter, intialState);
  const formRef = useRef<HTMLFormElement | null>(null);
  useEffect(() => {
    if (!state.success) {
      return;
    }
    formRef.current?.reset();
    toast({
      title: "You have subscribed to NewsLetter.",
      duration: 2000,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.success]);

  return (
    <>
      <form
        action={formAction}
        ref={formRef}
        className={cn(
          "flex flex-col gap-4 lg:flex-row w-full max-w-xl lg:items-center lg:gap-0",
          { "flex-row": direction === "row" },
          className
        )}
      >
        <FormItem className="transition-all ease-in-out">
          <Input
            name="email"
            type="email"
            placeholder={
              title !== "Search"
                ? "Subscribe to recieved reports"
                : "Search by Report Title"
            }
            className="bg-white py-6 px-4 rounded-r-none focus:ring-0 focus-visible:ring-0"
          />
        </FormItem>
        <Button
          type="submit"
          className="rounded-l-none bg-expertmarketinsight hover:bg-expertmarketinsight/90 py-6 px-4 round max-w-sm"
        >
          {title}
        </Button>
      </form>
      <FormMessage className="leading-8 font-semibold text-base">
        {state?.errors?.email}
      </FormMessage>
    </>
  );
}
