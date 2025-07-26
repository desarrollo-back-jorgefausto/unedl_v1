"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface QuiquebotWidgetProps {
  avatarSrc?: string;
  rightOffset?: string;   // distancia al borde derecho (ej: "1.5rem")
  bottomOffset?: string;  // distancia al borde inferior (ej: "1.5rem")
}

export default function QuiquebotWidget({
  avatarSrc = "assets/img/quique.png",
  rightOffset = "1.5rem",
  bottomOffset = "1.5rem",
}: QuiquebotWidgetProps) {
  const LAUNCHER_SIZE = 56; 
  const GAP           = 8;  
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<{ from: "user" | "bot"; text: string }[]>(
    []
  );

  // Para que el portal sólo se pinte en cliente
  useEffect(() => setMounted(true), []);

  const send = () => {
    if (!input.trim()) return;
    setMsgs((m) => [...m, { from: "user", text: input }]);
    setInput("");
    // Aquí podrías invocar tu backend y después push de la respuesta:
    // setMsgs(m => [...m, {from:'bot', text: respuesta}])
  };

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Lanzador fijo */}
      <div
        className="quiquebot-launcher text-center"
        style={{
          position: "fixed",   
          bottom: bottomOffset,
          right: rightOffset,
          cursor: "pointer",
          zIndex: 2000,
          textAlign: "center",
        }}
        role="button"
        onClick={() => setOpen(!open)}
      >
        <img
          src={avatarSrc}
          alt="Qiqebot"
          className="rounded-circle"
          width={110}
          height={90}
        />
        <div className="small fw-semibold pt-1" style={{color: "orange"}}>Qiqebot</div>
      </div>

      {/* Panel flotante */}
      {open && (
        <div
          className="card shadow quiquebot-panel"
          style={{
            position: "fixed",
            bottom: `calc(${bottomOffset} + ${LAUNCHER_SIZE + GAP + 35}px)`, 
            right: rightOffset,           
            top: "auto",
            left: "auto",
            width: "320px",
            height: "400px",
            zIndex: 500,           
          }}
        >
          <div className="card-header py-2 d-flex justify-content-between">
            <strong>¿Qué hago hoy por tí?...</strong>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="card-body overflow-auto py-2">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`d-flex ${
                  m.from === "user" ? "justify-content-end" : "justify-content-start"
                } mb-2`}
              >
                <span
                  className={`px-2 py-1 rounded ${
                    m.from === "user" ? "bg-primary text-white" : "bg-light"
                  }`}
                  style={{ maxWidth: "80%" }}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>

          <div className="card-footer p-2">
            <div className="input-group">
              <input
                className="form-control"
                placeholder="Escribe un mensaje…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
              />
              <button className="btn btn-primary" onClick={send}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}
