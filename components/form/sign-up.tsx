"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const formSchema = z.object({
    fullname: z.string()
        .min(1, "Full name is required")
        .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),
    username: z.string()
        .min(6, "Username is require minimum 6 characters"),
    email: z.string()
        .min(1, "Email is required")
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
    password: z.string()
        .min(8, "Password is require minimum 8 characters")
        .regex(/[A-Z]/, "Password must include at least one uppercase letter")
        .regex(/[a-z]/, "Password must include at least one lowercase letter")
        .regex(/[0-9]/, "Password must include at least one number")
        .regex(/[@$!%*?&]/, "Password must include at least one special character"),
    confirmPassword: z.string()
        .min(1, "Confirm password is required")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

const SignUpForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            fullname: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
                <Controller 
                    name="fullname"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Full Name</FieldLabel>
                            <Input 
                                {...field}
                                aria-invalid={fieldState.invalid}
                                placeholder="Type your full name..."
                                autoComplete="name"
                            />
                            {fieldState.error && (
                                <FieldError errors={[fieldState.error]}></FieldError>
                            )}
                        </Field>
                    )}
                />
                <Controller 
                    name="username"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Username</FieldLabel>
                            <Input 
                                {...field}
                                aria-invalid={fieldState.invalid}
                                placeholder="Type your username..."
                                autoComplete="username"
                            />
                            {fieldState.error && (
                                <FieldError errors={[fieldState.error]}></FieldError>
                            )}
                        </Field>
                    )}
                />
                <Controller 
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Email</FieldLabel>
                            <Input 
                                {...field}
                                type="email"
                                aria-invalid={fieldState.invalid}
                                placeholder="Type your email..."
                                autoComplete="email"
                            />
                            {fieldState.error && (
                                <FieldError errors={[fieldState.error]}></FieldError>
                            )}
                        </Field>
                    )}
                />
                <Controller 
                    name="password"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Password</FieldLabel>
                            <Input 
                                {...field}
                                type="password"
                                aria-invalid={fieldState.invalid}
                                placeholder="Type your password..."
                                autoComplete="new-password"
                            />
                            {fieldState.error && (
                                <FieldError errors={[fieldState.error]}></FieldError>
                            )}
                        </Field>
                    )}
                />
                <Controller 
                    name="confirmPassword"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel>Confirm Password</FieldLabel>
                            <Input 
                                {...field}
                                type="password"
                                aria-invalid={fieldState.invalid}
                                placeholder="Confirm your password..."
                                autoComplete="new-password"
                            />
                            {fieldState.error && (
                                <FieldError errors={[fieldState.error]}></FieldError>
                            )}
                        </Field>
                    )}
                />
                <Field>
                    <Button type="submit" className="w-full">Sign Up</Button>
                </Field>
            </FieldGroup>
        </form>
    )
}

export default SignUpForm