

export const Subtitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-sm md:text-md lg:text-lg text-secondary max-w-3xl leading-relaxed mb-6 md:mb-8">    
            {children}
          </p>
    )
}
