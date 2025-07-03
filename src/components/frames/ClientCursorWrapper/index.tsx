'use client';

import { useState } from "react";

export function ClientCursorWrapper({ children }: { children: React.ReactNode }) {
  const [isGrabbing, setIsGrabbing] = useState(false);

  return (
    <div
      onMouseDown={() => setIsGrabbing(true)}
      onMouseUp={() => setIsGrabbing(false)}
      className={isGrabbing ? "cursor-grabbing" : "cursor-grab"}
    >
      {children}
    </div>
  );
}
