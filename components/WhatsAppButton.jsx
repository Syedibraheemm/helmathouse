import { MessageCircle } from "lucide-react";
import { storeInfo } from "@/data/store";

export default function WhatsAppButton() {
  return (
    <a
      href={storeInfo.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[25px] right-[25px] z-50 inline-flex h-[58px] w-[58px] animate-pulseSoft items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_28px_rgba(37,211,102,0.55)] transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle size={26} />
    </a>
  );
}
