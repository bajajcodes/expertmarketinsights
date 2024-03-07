"use client";

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Bbizd6p6mUB
 */
import { RequestInfoValue } from "@/app/types";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { FormItem, FormMessage } from "./form";
import { FormFieldName } from "./order-summary";
import { SubmitButton } from "./submit-button";

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
];

const records = [
  { label: "I want to Request Sample", key: "sample" },
  { label: "I want to Request Discount", key: "discount" },
  { label: "I want to Pre Order Enquiry", key: "enquiry" },
  { label: "I want to Request Bulk Report", key: "bulk_report" },
];

export function RequestForm({
  defaultRequest,
}: {
  defaultRequest: RequestInfoValue;
}) {
  return (
    <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 ">
      {formFields.map((field) => (
        <FormItem key={field.name} className="max-w-full">
          <Input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            className="bg-white pt-3 pb-6"
            required
          />
          <FormMessage></FormMessage>
        </FormItem>
      ))}

      <div className="sm:col-span-2">
        <fieldset>
          <legend className="block text-sm font-medium text-white">
            I wish to see a sample of this report because:
          </legend>
          <div className="mt-4 space-y-4">
            {records.map((record) => (
              <div className="flex items-center" key={record.key}>
                <Checkbox
                  id={record.key}
                  className="bg-white"
                  name={record.key}
                  defaultChecked={record.key === defaultRequest}
                />
                <label
                  className="ml-3 block text-sm font-medium text-white"
                  htmlFor={record.key}
                >
                  {record.label}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
      <SubmitButton
        textContent="Submit"
        className="bg-white hover:bg-white/90 text-black col-span-1 md:col-span-2"
      />
    </form>
  );
}