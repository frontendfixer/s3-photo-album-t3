import { SignUpForm } from "@/components/forms/SignUpForm";

export default function HomePage() {
  return (
    <main className="grid h-screen place-content-center">
      <h1 className="mb-8 text-center text-4xl font-bold">Photo Album</h1>
      <SignUpForm />
    </main>
  );
}
