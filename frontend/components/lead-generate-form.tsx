"use client";

import { sendLeadForFreeCustomizedReport } from "@/app/actions";
import { cn } from "@/lib/utils";
import { LeadGenerateType } from "@/types/schema";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { FormItem, FormMessage } from "./form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

const intialState: LeadGenerateType = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

export function LeadGenerateForm({ className = "" }: { className?: string }) {
  const { toast } = useToast();
  const [state, formAction] = useFormState(
    sendLeadForFreeCustomizedReport,
    intialState
  );
  const formRef = useRef<HTMLFormElement | null>(null);
  useEffect(() => {
    if (!state.success) {
      return;
    }
    formRef.current?.reset();
    toast({
      title: "Your report will soon be sent to you.",
      duration: 2000,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <form
      name="freeCustomizedReportForm"
      className={cn("grid gap-4 text-white", className)}
      action={formAction}
      ref={formRef}
    >
      <FormItem>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          className="bg-[#ffffff1a] pt-3 pb-6"
          required
        />
        <FormMessage>{state.errors?.name}</FormMessage>
      </FormItem>
      <FormItem>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-[#ffffff1a] pt-3 pb-6"
          required
        />
        <FormMessage>{state.errors?.email}</FormMessage>
      </FormItem>
      <FormItem>
        <Input
          type="text"
          name="mobile"
          placeholder="Phone no"
          className="bg-[#ffffff1a] pt-3 pb-6"
          required
        />
        <FormMessage>{state.errors?.mobile}</FormMessage>
      </FormItem>
      <FormItem>
        <Textarea
          name="message"
          placeholder="Message"
          className="bg-[#ffffff1a] pt-3 pb-6"
          required
        />
        <FormMessage>{state.errors?.message}</FormMessage>
      </FormItem>
      <FormItem>
        <Button
          className="bg-expertmarketinsight hover:bg-expertmarketinsight/90"
          size="lg"
        >
          Get It Now
        </Button>
      </FormItem>
    </form>
  );
}
