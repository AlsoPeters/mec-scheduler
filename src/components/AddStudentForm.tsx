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
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,

} from '@/components/ui/select'

export const levelOptions = ['K-1', 'E-1', 'E-2', 'E-3', 'Junior', 'Adult'] as const

const formSchema = z.object({
   firstName: z.string().min(2).max(50),
   lastName: z.string().min(2).max(50),
   age: z.coerce.number().min(1).max(100),
   level: z.enum(levelOptions)

})

export type FormValues = z.infer<typeof formSchema>

const AddStudentForm = () => {
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
   console.log('Form Errors:', form.formState.errors)

   const addMember = async (values: z.infer<typeof formSchema>) => {
      console.log('CLICKED - Success')
      console.log('Values:', values)
      const { data, error } = await supabase.from('students').insert(values)
      if (error) console.error('Error:', error)
      else console.log('Member added!')
   }


   // Add 'select' for Student or Teacher


   return (
      <>
         <Form {...form}>
            <form onSubmit={form.handleSubmit(addMember, (errors) => console.log('Validation Errors:', errors))} className="space-y-8">
               <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                           <Input className="w-48" placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                           <Input className="w-48" placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                           <Input className="w-48" type="number" placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="level"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Level</FormLabel>
                        <FormControl>
                           <Select onValueChange={field.onChange} value={field.value}>

                              <SelectTrigger className="w-48">
                                 <SelectValue placeholder="Level" />
                              </SelectTrigger>
                              <SelectContent>
                                 {levelOptions.map((level) => <SelectItem key={level} value={level}>{level}</SelectItem>)}
                              </SelectContent>
                           </Select>
                        </FormControl>
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

export default AddStudentForm