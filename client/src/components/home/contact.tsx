import { FadeIn } from "../ui/fade-in";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactSubmission } from "@shared/schema";
import { useContactSubmission } from "@/hooks/use-content";
import { Loader2 } from "lucide-react";

export function Contact() {
  const { mutate, isPending } = useContactSubmission();
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContactSubmission) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 bg-[#F5F4F0]">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div className="space-y-8">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif">Get in Touch</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted text-lg font-light leading-relaxed">
                Have questions about our menu or catering services? We'd love to hear from you.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="space-y-4 pt-4">
              <div>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</span>
                <a href="tel:+917405467136" className="text-xl font-serif hover:text-accent transition-colors">
                  +91 74054 67136
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-1">WhatsApp</span>
                <a href="https://wa.me/917405467136" target="_blank" rel="noopener noreferrer" className="text-xl font-serif hover:text-accent transition-colors">
                  Chat with us
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <input
                  {...form.register("name")}
                  className="w-full bg-transparent border-b border-muted/30 py-3 text-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your full name"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input
                  {...form.register("email")}
                  className="w-full bg-transparent border-b border-muted/30 py-3 text-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  {...form.register("message")}
                  rows={4}
                  className="w-full bg-transparent border-b border-muted/30 py-3 text-lg focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="How can we help you?"
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-xs">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="mt-8 px-8 py-4 bg-foreground text-background font-medium w-full md:w-auto hover:bg-accent transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
