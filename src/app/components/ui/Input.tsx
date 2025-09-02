import { Toaster, toast } from 'sonner';
import { useState } from 'react';

export const Input = ({label, placeholder, type, value, onChange, onSend}: {label: string, placeholder: string, type: string, value?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void, onSend?: () => void}) => {
    const [inputValue, setInputValue] = useState(value || "");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        onChange?.(e);
    };

    const handleSend = () => {
        const currentValue = value !== undefined ? value : inputValue;
        if(!currentValue || currentValue.trim() === ""){
            toast.error('Please enter your email', {
                description: 'Email is required',
            });
            return;
        }
        toast.success('Email sent successfully', {
            description: 'I will get back to you as soon as possible',
        });
        onSend?.();
    }



    return (
        
        <>
        <Toaster />
        <div className="flex px-4 pt-5 flex-col max-w-lg w-full gap-2">
            <div className="relative">
                <input 
                    id={label} 
                    name={label} 
                    type={type} 
                    placeholder={placeholder} 
                    value={value !== undefined ? value : inputValue} 
                    onChange={handleInputChange} 
                    className="border border-neutral-300 rounded-md p-2 pr-12 w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] focus:ring-1 focus:ring-secondary focus:outline-none" 
                />
                <button 
                    onClick={handleSend}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 shadow-[inset_1px_1px_23px_0px_#00000024] text-primary px-6 py-1 rounded text-sm hover:bg-neutral-300 cursor-pointer transition-colors duration-200"
                >
                    Send
                </button>
            </div>
        </div>
        </>
    )
}
