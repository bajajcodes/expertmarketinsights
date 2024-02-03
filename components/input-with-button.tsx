import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React from 'react';

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
      <Input
        type="email"
        placeholder="Email"
        className="bg-white py-6 px-4 rounded-r-none focus:ring-0 focus-visible:ring-0"
      />
      <Button
        type="submit"
        className="rounded-l-none bg-expertmarketinsight hover:bg-expertmarketinsight/90 py-6 px-4 round"
      >
        {title}
      </Button>
    </div>
  );
}
