import { z } from 'zod';

const indianMobileRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

const emailSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
});

const leadSchemaWithoutEmail = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(3, 'Name should be at least 3 characters'),
  mobile: z
    .string({
      required_error: 'Mobile is required',
    })
    .refine((value) => indianMobileRegex.test(value), {
      message: 'Invalid Indian mobile number',
    }),
  message: z
    .string({
      required_error: 'Message is required',
    })
    .min(3, 'Message should be at least 3 characters'),
});
const sendLeadSchema = leadSchemaWithoutEmail.merge(emailSchema);

const newsLetterSchema = emailSchema;

export { sendLeadSchema, newsLetterSchema };
