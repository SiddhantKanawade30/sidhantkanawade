

export const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className="text-3xl md:text-3xl font-bold tracking-tight text-primary mb-5">
            {children}
          </h1>
    )
}
