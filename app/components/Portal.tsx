import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  containerId?: string;
}

export default function Portal({ children, containerId = 'portal-root' }: PortalProps) {
  useEffect(() => {
    let portalRoot = document.getElementById(containerId);
    if (!portalRoot) {
      portalRoot = document.createElement('div');
      portalRoot.id = containerId;
      portalRoot.style.position = 'relative';
      portalRoot.style.zIndex = '9999';
      document.body.appendChild(portalRoot);
    }
  }, [containerId]);

  const portalRoot = document.getElementById(containerId);
  return portalRoot ? createPortal(children, portalRoot) : null;
}
