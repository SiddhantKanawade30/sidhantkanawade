

export const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className="text-4xl md:text-4xl font-bold tracking-tight text-primary mb-5">
            {children}
          </h1>
    )
}
