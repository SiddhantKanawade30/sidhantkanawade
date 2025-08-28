import { Container } from "../Container"
import { Twitter ,Linkedin , Github , Mail } from 'lucide-react';
import Link from "next/link";   

export const Footer = () => {

const links = [
    {
        Icon: <Linkedin />,
        href: "https://www.linkedin.com/in/siddhant-kanawade/"
    },
    {
        Icon: <Github />,
        href: "https://github.com/SiddhantKanawade30"
    },
    {
        Icon: <Twitter />,
        href: "https://x.com/SiddKanawade30"
    },
    {
        Icon: <Mail />,
        href: "mailto:kanawadesiddhant30@gmail.com"
    }
];


    return (
        <Container >
            <div className="flex justify-between py-4 border-t border-neutral-200 text-base text-secondary hover:text-primary transition-colors px-4">
                <div className="cursor-pointer">
                    Made with love by Siddhant A Kanawade
                </div>
                <div className="flex gap-4 text-secondary">
                    {links.map((link) => (
                        <Link href={link.href} key={link.href} target="_blank">
                            <div className="hover:text-primary transition-colors">
                                {link.Icon}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Container>
    )
}