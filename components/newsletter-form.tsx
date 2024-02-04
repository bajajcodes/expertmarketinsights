'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useEffect, useRef } from 'react';
import { FormItem, FormMessage } from './form';
import { useToast } from './ui/use-toast';
import { useFormState } from 'react-dom';
import { subscribeToNewsLetter } from '@/app/actions';
import { NewsLetterType } from '@/types/schema';
import { cn } from '@/lib/utils';

const intialState: NewsLetterType = {
  email: '',
};

export function NewsLetterForm({
  title,
  direction = 'column',
}: {
  title: string;
  direction?: 'row' | 'column';
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
      title: 'You have subscribed to NewsLetter.',
      duration: 2000,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.success]);

  return (
    <form
      action={formAction}
      ref={formRef}
      className={cn(
        'flex flex-col gap-4 lg:flex-row w-full max-w-xl lg:items-center lg:gap-0',
        { 'flex-row': direction === 'row' }
      )}
    >
      <FormItem className="transition-all ease-in-out">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          className="bg-white py-6 px-4 rounded-r-none focus:ring-0 focus-visible:ring-0"
        />
        <FormMessage>{state?.errors?.email}</FormMessage>
      </FormItem>
      <Button
        type="submit"
        className="rounded-l-none bg-expertmarketinsight hover:bg-expertmarketinsight/90 py-6 px-4 round"
      >
        {title}
      </Button>
    </form>
  );
}
