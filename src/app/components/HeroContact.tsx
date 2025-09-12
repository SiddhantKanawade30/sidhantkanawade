import { Badge } from "./ui/Badge"
import { Input } from "./ui/Input"

export const HeroContact = () => {
    return (
        <div className="py-15">
    <div className="py-2  px-4">
        <Badge>Let&apos;s connect</Badge>    
        
        </div>
        <div className="px-4 text-secondary text-base max-w-lg">I am Currently looking for new opportunities. If you have any query or want to work together, just drop your mail !</div>
        <Input label="Email" placeholder="Email" type="email"  />
        </div>
    )
}