"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

type WaitlistFormProps = {
  variant?: "light" | "dark";
  buttonLabel?: string;
  successMessage?: string;
  helperText?: string;
};

export function WaitlistForm({
  variant = "light",
  buttonLabel = "Get Early Access",
  successMessage = "You're on the list. We'll be in touch soon.",
  helperText,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const isDark = variant === "dark";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(
          typeof data.error === "string"
            ? data.error
            : "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  if (status === "success") {
    return (
      <div
        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 ${
          isDark
            ? "bg-secondary/30 text-primary-foreground"
            : "bg-secondary/20 text-primary"
        }`}
      >
        <CheckCircle
          className={`h-5 w-5 ${isDark ? "" : "text-secondary"}`}
        />
        <span className="font-medium">{successMessage}</span>
      </div>
    );
  }

  const inputClass = isDark
    ? "flex-1 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20"
    : "flex-1 rounded-full border border-primary/20 bg-background px-5 py-3 text-primary placeholder:text-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className={inputClass}
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-3 font-medium text-cta-foreground transition-all hover:bg-cta/90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : (
            <>
              {buttonLabel}
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p
          className={`mt-2 text-sm ${isDark ? "text-primary-foreground/80" : "text-red-600"}`}
        >
          {errorMessage}
        </p>
      )}
      {helperText && (
        <p
          className={`mt-3 text-sm ${isDark ? "text-primary-foreground/60" : "text-primary/60"}`}
        >
          {helperText}
        </p>
      )}
    </form>
  );
}
