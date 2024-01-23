import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React from 'react';

export function InputWithButton({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('flex w-full max-w-sm items-center', className)}
      {...rest}
    >
      <Input
        type="email"
        placeholder="Email"
        className="bg-white rounded-none"
      />
      <Button type="submit" className="rounded-none">
        Subscribe
      </Button>
    </div>
  );
}
