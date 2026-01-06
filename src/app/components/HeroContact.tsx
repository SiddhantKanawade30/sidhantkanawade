import { Badge } from "./ui/Badge"
import { Input } from "./ui/Input"

export const HeroContact = () => {
    return (
        <div className="py-15 overflow-x-auto">
    <div className="py-2 px-4">
        <Badge>Let&apos;s connect</Badge>    
        
        </div>
        <div className="px-6 text-secondary text-sm md:text-base max-w-lg leading-relaxed">I am Currently looking for new opportunities. If you have any query or want to work together, just drop your mail !</div>
        <div className="px-4 mt-4">
        <Input label="Email" placeholder="Email" type="email"  />
        </div>
        </div>
    )
}