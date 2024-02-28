import { newsLetterSchema, sendLeadSchema } from '@/utils/schema';
import { z } from 'zod';

export type LeadGenerateType = z.infer<typeof sendLeadSchema>;
export type NewsLetterType = z.infer<typeof newsLetterSchema>;
