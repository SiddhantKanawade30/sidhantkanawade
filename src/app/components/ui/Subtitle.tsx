

export const Subtitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-md md:text-lg text-secondary max-w-3xl leading-relaxed mb-8">    
            {children}
          </p>
    )
}
