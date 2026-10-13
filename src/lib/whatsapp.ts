const rawNumber = import.meta.env.VITE_WHATSAPP_NUMBER ?? '';
const number = String(rawNumber).replace(/\D/g, '');

export function whatsappUrl(message: string): string {
  const text = encodeURIComponent(message);
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}

export const whatsappConfigured = number.length > 0;
