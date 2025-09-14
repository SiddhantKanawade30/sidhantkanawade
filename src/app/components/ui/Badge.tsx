


export const Badge = ({ children }: { children: string }) => {
    return (
        <div className="px-2 pb-5">
        <h2 className="relative mt-4 w-fit max-w-lg text-xs md:text-sm font-normal text-neutral-800 md:text-base">
  {/* Background layer */}
  <div className="absolute inset-0 h-full w-full scale-[1.04] bg-neutral-100 z-0"></div>

  {/* Animated glowing dots */}
  <div className="absolute -top-px -left-1 h-1 w-1 animate-pulse rounded-full bg-neutral-200 z-10"></div>
  <div className="absolute -top-px -right-1 h-1 w-1 animate-pulse rounded-full bg-neutral-200 z-10"></div>
  <div className="absolute -bottom-px -left-1 h-1 w-1 animate-pulse rounded-full bg-neutral-200 z-10"></div>
  <div className="absolute -right-1 -bottom-px h-1 w-1 animate-pulse rounded-full bg-neutral-200 z-10"></div>

  {/* Text */}
  <span className="inline-block relative z-20 px-2 md:px-3 py-1 text-primary font-semibold">{children}</span>
</h2>
</div>
    )
}