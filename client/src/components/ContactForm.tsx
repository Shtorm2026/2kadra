import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const sendContactForm = trpc.contact.sendForm.useMutation({
    onSuccess: () => {
      toast.success("Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", phone: "", email: "", message: "" });
      onSuccess?.();
    },
    onError: (error: any) => {
      toast.error(`Ошибка: ${error.message}`);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast.error("Пожалуйста, введите ваше имя");
      return;
    }
    if (!formData.phone.trim()) {
      toast.error("Пожалуйста, введите ваш телефон");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Пожалуйста, введите ваш email");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Пожалуйста, введите корректный email");
      return;
    }

    setIsLoading(true);
    try {
      await sendContactForm.mutateAsync({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "#0099CC" }}>
          Ваше имя *
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Иван Петров"
          value={formData.name}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: "#0099CC" }}>
          Телефон *
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+7 (915) 123-45-67"
          value={formData.phone}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "#0099CC" }}>
          Email *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "#0099CC" }}>
          Сообщение (опционально)
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Расскажите о вашем интересе к нашей студии..."
          value={formData.message}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full"
          rows={4}
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full font-semibold py-3 rounded-lg transition-all duration-300"
        style={{ backgroundColor: "#FF8C42", color: "white" }}
      >
        {isLoading ? "Отправка..." : "Записаться на занятие"}
      </Button>

      <p style={{ color: "#6B7280" }} className="text-sm text-center">
        * Поля обязательны для заполнения
      </p>
    </form>
  );
}
