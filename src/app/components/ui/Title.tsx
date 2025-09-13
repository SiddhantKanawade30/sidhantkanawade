

export const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-primary mb-4 md:mb-5 leading-tight">
            {children}
          </h1>
    )
}
