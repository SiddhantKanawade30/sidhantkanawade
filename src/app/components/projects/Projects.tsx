
import { Container } from "../Container"
import Image from "next/image"


export const Projects = () => {
    return (
        
        <Container>
            <div className="pt-5 -mx-4 px-4  border-2 border-neutral-100 pb-10 ">
            <div className="grid grid-rows gap-20">
                <div className="grid grid-cols-[2.5fr_4fr] gap-8 pt-10" >
                    <div className="rounded-lg overflow-hidden"><Image src="https://assets.lummi.ai/assets/QmemEDf3LKdViBqcZ1tpeLNrMZUqkTwPHwwgUaShJDKzwf?auto=format&w=1500" alt="Project Image"
                        width={400}
                        height={400} /></div>

                        <div>
                            <h2 className="text-xl font-bold">Phantom Chat</h2>
                            <p className="text-md text-secondary py-1">- A Phantom chat app using Double Ratchet Algorithm and X3DH key exchange, ensuring perfect forward secrecy</p>
                            <p className="text-md text-secondary">- The system uses Socket.IO for real-time communication while encrypting both message content and metadata to prevent traffic analysis</p>
                            <p className="text-md text-secondary py-1">- The messages are encrypted by senders private key, receivers public key and a random string of characters which different in every message.</p>
                        </div>


                </div>

                <div className="grid grid-cols-[4fr_2.5fr] gap-5" >
                    

                        <div>
                            <h2 className="text-xl font-bold">Phantom Chat</h2>
                            <p className="text-md text-secondary py-1">- A secure chat app using Double Ratchet Algorithm and X3DH key exchange, ensuring perfect forward secrecy</p>
                            <p className="text-md text-secondary">- The system uses Socket.IO for real-time communication while encrypting both message content and metadata to prevent traffic analysis</p>
                            <p className="text-md text-secondary py-1">- With this, we aim to build a secure and resilient messaging infrastructure tailored for agencies, journalists, and organizations requiring high-confidentiality communications.</p>
                        </div>

                        <div className="rounded-lg overflow-hidden"><Image src="https://assets.lummi.ai/assets/QmemEDf3LKdViBqcZ1tpeLNrMZUqkTwPHwwgUaShJDKzwf?auto=format&w=1500" alt="Project Image"
                        width={400}
                        height={400} /></div>


                </div>


            </div>
            </div>
        </Container>
        
    )
}