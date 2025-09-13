import { cn } from "@/lib/utils";

export const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("max-w-4xl mx-auto bg-white p-4", className)}>
      {children}
    </div>
  );
};

