

export const Subtitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-lg md:text-xl text-secondary max-w-3xl leading-relaxed mb-8">    
            {children}
          </p>
    )
}
