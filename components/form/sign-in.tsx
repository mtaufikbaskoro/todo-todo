"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const formSchema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
})

const SignInForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            username: "",
            password: "",
        }
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    }

    return (
        <form id="sign-in-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
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
                                autoComplete="one-time-code"
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
                <Field>
                    <Button type="submit" className="w-full" variant={"outline"}>Sign In</Button>
                </Field>
            </FieldGroup>
        </form>
    )
}

export default SignInForm
