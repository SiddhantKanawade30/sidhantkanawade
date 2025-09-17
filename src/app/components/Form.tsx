"use client"
import { Container } from "./Container";
import { Toaster, toast } from 'sonner';

const FORM_URL = process.env.NEXT_PUBLIC_FORM_URL;
if(!FORM_URL){
    throw new Error("NEXT_PUBLIC_FORM_URL is not defined");
}

export const Form = () => {


const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (!form) {
        toast.error("Form not found");
        return;
    }
    
    const formData = new FormData(form);

    try {
        const response = await fetch(FORM_URL, {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
        });
    
        if (response.ok) {
            toast.success("Message sent! ✅");
        } else {
            toast.error("Something went wrong ❌");
        }
    } catch (error) {
        toast.error("Network error occurred ❌");
        console.error("Form submission error:", error);
    } finally {
        // Always reset the form regardless of success or failure
        form.reset();
    }
}


    return (
        <>
        <Toaster />
        <Container className="md:pb-10 px-4 md:px-7 -mt-10 overflow-x-auto">
        <div className="max-w-2xl mx-auto shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg p-4 min-w-0">
          
         <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">

                <label htmlFor="name" className="text-tertiary text-sm md:text-base">Full Name</label>
                <input id="name" name="name" type="text" placeholder="Name" className="border border-neutral-300 rounded-md p-2 text-sm md:text-base" />

                <label htmlFor="email" className="text-tertiary text-sm md:text-base pt-4">Email</label>
                <input id="email" name="email" type="email" placeholder="Email" className="border border-neutral-300 rounded-md p-2 text-sm md:text-base" />

                <label htmlFor="message" className="text-tertiary text-sm md:text-base pt-4">Message</label>
                <textarea id="message" name="message" placeholder="Message" className="border border-neutral-300 rounded-md p-2 h-24 md:h-30 text-sm md:text-base resize-none" />

                <button type="submit" className="bg-primary text-white rounded-md p-2 hover:bg-primary/80 transition-all duration-200 cursor-pointer text-sm md:text-base">Submit</button>
            </div>
         </form>
        </div>
      </Container>  
      </>
    )
}