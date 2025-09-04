"use client"
import { Container } from "./Container";
import { Toaster, toast } from 'sonner';


export const Form = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const name = (formData.get('name') as string | null)?.trim() || "";
        const email = (formData.get('email') as string | null)?.trim() || "";
        const message = (formData.get('message') as string | null)?.trim() || "";

        if(name === "" || email === "" || message === ""){
            toast.error("Please fill all the fields", {
                description: "All fields are required",
            });
            return;
        }
        toast.success("Message sent successfully", {
            description: "I will get back to you as soon as possible",
        });
        form.reset();
    }


    return (
        <>
        <Toaster />
        <Container className="md:pb-10 px-7 -mt-10 ">
        <div className="max-w-2xl mx-auto shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]   rounded-lg p-4">
          
         <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">

                <label htmlFor="name" className="text-tertiary text-base">Full Name</label>
                <input id="name" name="name" type="text" placeholder="Name" className="border border-neutral-300 rounded-md p-2" />

                <label htmlFor="email" className="text-tertiary text-base pt-4">Email</label>
                <input id="email" name="email" type="email" placeholder="Email" className="border border-neutral-300 rounded-md p-2" />

                <label htmlFor="message" className="text-tertiary text-base pt-4">Message</label>
                <textarea id="message" name="message" placeholder="Message" className="border border-neutral-300 rounded-md p-2 h-30" />

                <button type="submit" className="bg-primary text-white rounded-md p-2 hover:bg-primary/80 transition-all duration-200 cursor-pointer">Submit</button>
            </div>
         </form>
        </div>
      </Container>  
      </>
    )
}