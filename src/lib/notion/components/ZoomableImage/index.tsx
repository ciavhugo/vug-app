"use client"

import { useState } from "react"

export function ZoomableImage({ src, alt }: { src: string; alt?: string }) {
  const [open, setOpen] = useState(false)

  if (!src) return null

  return (
    <>
      {/* Imagem normal */}
      <img
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
        className="w-full cursor-zoom-in relative z-10"
        style={{ pointerEvents: "auto" }}
      />

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90">
          
          {/* Overlay (clique fora) */}
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
          />

          {/* Botão fechar */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl z-20 cursor-pointer hover:opacity-70 transition"
          >
            ×
          </button>

          {/* Imagem */}
          <img
            src={src}
            alt={alt}
            className="relative z-10 max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </>
  )
}