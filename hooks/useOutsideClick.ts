import { useCallback, useEffect, useRef } from "react";

const useOutsideClick = (onClose: () => void, isOpen?: boolean) => {
  const ref = useRef<HTMLDivElement>(null);
  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (isOpen !== undefined && !isOpen) {
        return;
      }
      if (ref.current === null) return;
      if (!(ref.current! as any).contains(e.target)) {
        onClose?.();
      }
    },
    [onClose]
  );
  useEffect(() => {
    document.addEventListener("click", clickListener);
    return () => {
      document.removeEventListener("click", clickListener);
    };
  });
  return ref;
};
export default useOutsideClick;
