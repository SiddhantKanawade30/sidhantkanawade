import { ContactHero } from "../components/Contact";
import { Form } from "../components/Form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Siddhant Kanawade",
  description: "Thoughts, experiences, and insights on technology and development",
}; 


export default function Contact() {
  return (
    <div className="overflow-x-auto">
            <ContactHero />
            <Form />
           
    </div>
  );
}