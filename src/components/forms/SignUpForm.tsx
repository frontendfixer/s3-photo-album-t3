"use client";

import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormMessage,
  FormItem,
  FormControl,
  FormLabel,
  FormField,
} from "../ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password is too short" }),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
};
type Payload = z.infer<typeof formSchema>;

export function SignUpForm() {
  const form = useForm<Payload>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const handleSubmit = (data: Payload) => {
    console.log({ data });
  };

  return (
    <div className="space-y-5 rounded-lg border p-4 shadow-lg">
      <h1 className="text-center text-lg font-bold">Sign Up</h1>
      <Form {...form}>
        <form
          className="grid w-[90vw] max-w-sm gap-5"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter a password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
