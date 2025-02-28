import { useState } from "react";
import { useSupabase } from "../context/supabaseContext";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const levelOptions = ['K-1', 'E-1', 'E-2', 'E-3', 'Junior', 'Adult'] as const

const formSchema = z.object({
   firstName: z.string().min(2).max(50),
   lastName: z.string().min(2).max(50),
   age: z.number().min(1).max(100),
   level: z.enum(levelOptions)

})

export type FormValues = z.infer<typeof formSchema>

const AddMemberForm = () => {
   const supabase = useSupabase()

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         firstName: "",
         lastName: "",
         age: 1,
         level: "K-1",

      },
   })

   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log('CLICKED')
      console.log(values)
   }

   const addMember = async () => {
      const { data, error } = await supabase.from('students').insert(userInputs)
      if (error) console.error('Error:', error)
      else console.log('Member added!')
   }


   // Add 'select' for Student or Teacher
   // Add Dropdown for Level

   return (
      <>
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
               <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                           <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormDescription>
                           This is your public display name.
                        </FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <Button type="submit">Submit</Button>
            </form>
         </Form>
      </>

   )
}

export default AddMemberForm