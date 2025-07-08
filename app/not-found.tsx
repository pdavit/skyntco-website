"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main style={{ textAlign: "center", padding: "4rem" }}>
      <h1>404 - Page Not Found</h1>
      <img
         src="/images/404-image.png"
         alt="404 illustration"
         style={{ maxWidth: "300px", margin: "2rem auto", display: "block" }}
/>
      <p>Oops! The page you’re looking for does not exist.</p>
      <button
        onClick={() => router.push("/")}
        style={{
          backgroundColor: "#2563eb",
          color: "#ffffff",
          border: "none",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.375rem",
          fontWeight: "bold",
          fontSize: "1rem",
          cursor: "pointer",
          marginTop: "1rem",
        }}
      >
        Go Back Home
      </button>
    </main>
  );
}
