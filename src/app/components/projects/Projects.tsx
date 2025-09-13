
import { Container } from "../Container"
import Image from "next/image"
import Blogito from "/public/Blogito.png"
import SecureVault from "/public/securevault.png"
import Phantom from "/public/phantom.svg"


export const Projects = () => {
    return (

        <Container>
            <div className="pt-5 -mx-4 px-4  border-2 border-neutral-100 pb-10 ">
                <div className="grid grid-rows gap-20">
                    <div className="grid grid-cols-[2.5fr_4fr] gap-8 pt-10" >
                        <div className="rounded-lg overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:pt-5 "><Image src={Phantom} alt="Project Image"
                            width={500}
                            height={500} /></div>

                        <div>
                            <h2 className="text-xl font-bold">Phantom Chat(In Progress)</h2>
                            <p className="text-md text-secondary py-1">- A Phantom chat app using Double Ratchet Algorithm and X3DH key exchange, ensuring perfect forward secrecy</p>
                            <p className="text-md text-secondary">- The system uses Socket.IO for real-time communication while encrypting both message content and metadata to prevent traffic analysis</p>
                            <p className="text-md text-secondary py-1">- The messages are encrypted by senders private key, receivers public key and a random string of characters which different in every message.</p>
                        </div>


                    </div>

                    <div className="grid grid-cols-[4fr_2.5fr] gap-5" >


                        <div>
                            <h2 className="text-xl font-bold">Blogito</h2>
                            <p className="text-md text-secondary py-1">- Blogito is a blog website built to share experiences and learnings with the world. </p>
                            <p className="text-md text-secondary">- Built with React, Tailwind CSS and javascript. For email verification Blogito uses node mailer. </p>
                                <p className="text-md text-secondary py-1">- Users can seamlessly create their blog posts of any domain and share it globally.</p>
                                <br />
                            </div>

                        <div className="rounded-lg overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pt-3"><Image src={Blogito} alt="Project Image"
                            width={400}
                            height={500} /></div>


                    </div>

                    <div className="grid grid-cols-[2.5fr_4fr] gap-8 pt-10">
                        {/* Image container */}
                        <div className="w-[350px] h-[250px] rounded-lg overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] relative">
                            <Image
                                src={SecureVault}
                                alt="Project Image"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Text section */}
                        <div>
                            <h2 className="text-xl font-bold">Secure Vault</h2>
                            <p className="text-md text-secondary py-1">
                                - A secure password manager using cryptography, helping users store and manage their passwords securely.
                            </p>
                            <p className="text-md text-secondary">
                                - The system uses Socket.IO for real-time communication while encrypting both message content and metadata to prevent traffic analysis.
                            </p>
                            <p className="text-md text-secondary py-1">
                                - The messages are encrypted by sender’s private key, receiver’s public key, and a random string of characters which is different in every message.
                            </p>
                        </div>
                    </div>



                </div>
            </div>
        </Container>

    )
}