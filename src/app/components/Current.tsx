import { Container } from "./Container"



export const Current = () => {
    return (
        <Container>

            <div className="grid md:grid-cols-2 md:grid-cols-[1.5fr_1fr] h-60 mt-10 ">
                <div className="border rounded-2xl shadow-md border-neutral-200">
                    <div className="p-3 flex">
                        <div className="bg-quaternary rounded-md">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
                        </svg>
                        </div>
                        <span className="ml-2 text-tertiary text-base">Frontend Developer @Codence Studio</span></div>
                </div>
                <div className="border rounded-2xl shadow-md border-neutral-200 h-40 z-10 "></div>
            </div>
        </Container>
    )
}