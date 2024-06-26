import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
  title = "SIX12 | Design Ideas & Culture",
  description = "SIX12 Creaive Inc. is a full service creative marketing and design agency",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
} = {}) {
  return {
    title,
    description,
    icons,
    openGraph: {
      title,
      description,
      images: [{ url: image }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@hairunhuang",
    },
    metadataBase: new URL('https://six12rep-3855.vercel.app/')
  };
}