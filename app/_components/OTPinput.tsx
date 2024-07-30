// InputOTPForm.tsx

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "@/components/ui/use-toast";

// Define a type for the props that includes the onOtpSubmit callback
interface OTPFormProps {
  otpDescription: string;
  otpLabel: string;
  buttonlabel: string;
  onOtpSubmit: (otpValue: string) => void; // Callback function to return the OTP
}

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Phải nhập đủ 6 số.",
  }),
});

export function InputOTPForm({ otpDescription, otpLabel, buttonlabel, onOtpSubmit }: OTPFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  // Handle form submission
  function onSubmit(data: z.infer<typeof FormSchema>) {
    onOtpSubmit(data.pin);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-8 justify-center items-center sm:mt-20 mt-0'>
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{otpLabel}</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                {otpDescription}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className='bg-green-600' type="submit">{buttonlabel}</Button>
      </form>
    </Form>
  );
}

export default InputOTPForm;
