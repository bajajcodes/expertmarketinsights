"use client";

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/IrLeVxQE7wI
 */
import { checkoutReport } from "@/actions/form";
import { ReportBuyingUser, ReportMetaDataAttributes } from "@/app/types";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { FormItem, FormMessage } from "./form";
import { SubmitButton } from "./submit-button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

export enum FormFieldName {
  FullName = "fullName",
  Email = "email",
  Country = "country",
  Number = "number",
  CompanyName = "companyName",
  Designation = "designation",
  Address = "address",
  State = "state",
  City = "city",
  ZipCode = "zipCode",
}

interface Props
  extends Pick<ReportMetaDataAttributes, "reportTitle" | "reportCode"> {
  id: string;
  price: string;
  user: ReportBuyingUser;
}

interface FormField {
  name: FormFieldName;
  placeholder: string;
  type: string;
}

const formFields: FormField[] = [
  {
    name: FormFieldName.FullName,
    placeholder: "Enter Full Name",
    type: "text",
  },
  { name: FormFieldName.Email, placeholder: "Enter Your Email", type: "email" },
  {
    name: FormFieldName.Country,
    placeholder: "Enter Your Country",
    type: "text",
  },
  {
    name: FormFieldName.Number,
    placeholder: "Enter Your Number",
    type: "text",
  },
  {
    name: FormFieldName.CompanyName,
    placeholder: "Enter Company Name",
    type: "text",
  },
  {
    name: FormFieldName.Designation,
    placeholder: "Your Designation",
    type: "text",
  },
  { name: FormFieldName.Address, placeholder: "Enter Address", type: "text" },
  { name: FormFieldName.State, placeholder: "State", type: "text" },
  { name: FormFieldName.City, placeholder: "Enter City", type: "text" },
  { name: FormFieldName.ZipCode, placeholder: "Zip code", type: "text" },
];

export function OrderSummaryForm(props: Props) {
  const { toast } = useToast();
  const [state, action] = useFormState(checkoutReport, {
    data: {},
    success: false,
  });
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
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      action={action}
      ref={formRef}
    >
      <Input type="hidden" name="reportId" value={props.id} />
      <Input type="hidden" name="reportTitle" value={props.reportTitle} />
      <Input type="hidden" name="reportCode" value={props.reportCode} />
      <Input type="hidden" name="user" value={props.user} />
      <Input type="hidden" name="price" value={props.price} />
      {formFields.map((field) => (
        <FormItem key={field.name} className="max-w-full">
          <Input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            className="bg-[#ffffff1a] pt-3 pb-6"
            required
          />
          <FormMessage>{state.errors?.[field.name]}</FormMessage>
        </FormItem>
      ))}
      <SubmitButton
        textContent="Buy Now"
        className="bg-[#3a3774] text-white col-span-1 md:col-span-2"
      />
    </form>
  );
}
