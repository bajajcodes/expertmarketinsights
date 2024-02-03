import { cn } from '@/lib/utils';
import React from 'react';
import { NewsLetterForm } from './newsletter-form';

export function InputWithButton({
  className,
  title = 'Subscribe',
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & { title?: string }) {
  return (
    <div
      className={cn('flex w-full max-w-xl items-center', className)}
      {...rest}
    >
      <NewsLetterForm title={title} />
    </div>
  );
}
