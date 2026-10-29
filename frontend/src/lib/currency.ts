import { useSyncExternalStore } from "react";

// Global currency state — a tiny store (no provider needed) so the navbar
// switcher and every price on the site stay in sync. Persisted to localStorage.
export type CurrencyCode = "GBP" | "EUR" | "USD" | "INR" | "NPR";

const RATES: Record<CurrencyCode, { rate: number; symbol: string }> = {
  GBP: { rate: 1, symbol: "£" },
  EUR: { rate: 1.16, symbol: "€" },
  USD: { rate: 1.27, symbol: "$" },
  INR: { rate: 114, symbol: "₹" },
  NPR: { rate: 182, symbol: "रू " },
};

export const currencyCodes: CurrencyCode[] = ["GBP", "EUR", "USD", "INR", "NPR"];

const KEY = "ashcombe_currency";

let current: CurrencyCode = (() => {
  try {
    const saved = localStorage.getItem(KEY);
    return currencyCodes.includes(saved as CurrencyCode) ? (saved as CurrencyCode) : "GBP";
  } catch {
    return "GBP";
  }
})();

const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
};

export function setCurrency(code: CurrencyCode) {
  if (code === current) return;
  current = code;
  try {
    localStorage.setItem(KEY, code);
  } catch {
    /* private mode */
  }
  listeners.forEach((l) => l());
}

// Advance to the next currency in the given (config-driven) list.
export function cycleCurrency(codes: readonly string[] = currencyCodes) {
  const next = codes[(codes.indexOf(current) + 1) % codes.length];
  if (currencyCodes.includes(next as CurrencyCode)) setCurrency(next as CurrencyCode);
}

export const useCurrency = () => useSyncExternalStore(subscribe, () => current);

const convert = (gbp: number, code: CurrencyCode) => Math.round(gbp * RATES[code].rate);

// £890 → $1,130 / €1,032
export function formatMoney(gbp: number, code: CurrencyCode): string {
  const locale = code === "INR" || code === "NPR" ? "en-IN" : "en-US";
  return `${RATES[code].symbol}${convert(gbp, code).toLocaleString(locale)}`;
}

// "From £1,650 for two" → "From $2,096 for two"
export function convertPriceText(text: string, code: CurrencyCode): string {
  if (code === "GBP") return text;
  return text.replace(/£\s?([\d,]+(?:\.\d+)?)/g, (_m, num: string) =>
    formatMoney(Number(num.replace(/,/g, "")), code)
  );
}

// Bare menu prices: "28" → "$36", "12—24" → "$15—30"
export function formatMenuPrice(price: string, code: CurrencyCode): string {
  return `${RATES[code].symbol}${price.replace(/\d+/g, (n) => String(convert(Number(n), code)))}`;
}
