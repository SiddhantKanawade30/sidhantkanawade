import { Container } from "./components/Container";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      
      <Container className="min-h-[200vh] p-4 md:pt-25 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">Hello World</h1>
        <p className="text-sm text-secondary md:text-base pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </Container>
    </div>
  );
}