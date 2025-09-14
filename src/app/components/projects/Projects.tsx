import { Container } from "../Container"
import Image from "next/image"
import Link from "next/link"
import Blogito from "/public/Blogito.png"
import SecureVault from "/public/securevault.jpg"
import Phantom from "/public/phantom.svg"


export const Projects = () => {
    return (

        <Container>
            <div className="pt-5 -mx-4 px-4 border-2 border-neutral-100 pb-10 overflow-x-auto">
                <div className="space-y-8 md:space-y-20 min-w-0">
                    <div className="grid grid-cols-1 md:grid-cols-[2.5fr_4fr] gap-4 md:gap-8 pt-10">
                        <div className="rounded-lg overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:pt-5 order-2 md:order-1">
                            <Image src={Phantom} alt="Project Image"
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover opacity-75" />
                        </div>

                        <div className="order-1 md:order-2 min-w-0">
                            <h2 className="text-lg md:text-xl font-bold leading-tight">Phantom Chat(In Progress)</h2>
                            <p className="text-sm md:text-md text-secondary py-1 leading-relaxed">- A Phantom chat app using Double Ratchet Algorithm and X3DH key exchange, ensuring perfect forward secrecy</p>
                            <p className="text-sm md:text-md text-secondary leading-relaxed">- The system uses Socket.IO for real-time communication while encrypting both message content and metadata to prevent traffic analysis</p>
                            <p className="text-sm md:text-md text-secondary py-1 leading-relaxed">- The messages are encrypted by senders private key, receivers public key and a random string of characters which different in every message.</p>
                        </div>


                    </div>

                    {/* Divider line */}
                    <div className="border-t border-neutral-200 my-6 md:my-12"></div>

                    <div className="grid grid-cols-1 md:grid-cols-[4fr_2.5fr] gap-4 md:gap-5" >


                        <div className="order-2 md:order-1 min-w-0">
                            <h2 className="text-lg md:text-xl font-bold leading-tight">Blogito</h2>
                            <p className="text-sm md:text-md text-secondary py-1 leading-relaxed">- Blogito is a blog website built to share experiences and learnings with the world. </p>
                            <p className="text-sm md:text-md text-secondary leading-relaxed">- Built with React, Tailwind CSS and javascript. For email verification Blogito uses node mailer. </p>
                                <p className="text-sm md:text-md text-secondary py-1 leading-relaxed">- Users can seamlessly create their blog posts of any domain and share it globally.</p>
                                <br />
                            </div>

                        <div className="rounded-lg overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pt-3 order-1 md:order-2">
                            <Link href="https://blogito.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <Image src={Blogito} alt="Project Image"
                                    width={400}
                                    height={500}
                                    className="w-full h-auto object-cover hover:scale-[1.02] transition duration-200 cursor-pointer" />
                            </Link>
                        </div>


                    </div>

                    {/* Divider line */}
                    <div className="border-t border-neutral-200 my-6 md:my-12"></div>

                    <div className="grid grid-cols-1 md:grid-cols-[2.5fr_4fr] gap-4 md:gap-8 pt-10">
                        {/* Image container */}
                        <div className="w-full h-48 md:w-[350px] md:h-[210px] rounded-lg overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] relative order-2 md:order-1">
                            <Link href="https://secure-vault-delta.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={SecureVault}
                                    alt="Project Image"
                                    fill
                                    className="object-cover hover:scale-[1.02] transition duration-200 cursor-pointer"
                                />
                            </Link>
                        </div>

                        {/* Text section */}
                        <div className="order-1 md:order-2 min-w-0">
                            <h2 className="text-lg md:text-xl font-bold leading-tight">Secure Vault</h2>
                            <p className="text-sm md:text-md text-secondary py-1 leading-relaxed">
                                - A secure password manager using cryptography, helping users store and manage their passwords securely.
                            </p>
                            <p className="text-sm md:text-md text-secondary leading-relaxed">
                                - Built using Mern stack , for encryption of passwords, secure vault uses cryptojs library.
                            </p>
                            <p className="text-sm md:text-md text-secondary py-1 leading-relaxed">
                                - This is my first MERN stack stack project, got indepth of how does encryption works .
                            </p>
                        </div>
                    </div>



                </div>
            </div>
        </Container>

    )
}