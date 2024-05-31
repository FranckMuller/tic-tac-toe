import { createPortal } from "react-dom";
import clsx from "clsx";
import { CrossIcon } from "../game/icons";

type Props = {
  width?: "md" | "full";
  className?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

type HeaderProps = {
  className?: string;
  children: React.ReactNode;
};

type BodyProps = {
  className?: string;
  children: React.ReactNode;
};

type FooterProps = {
  className?: string;
  children: React.ReactNode;
};

export function UiModal({
  width = "md",
  className,
  isOpen = false,
  onClose,
  children
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement) {
      const inModal = e.target.closest("[data-id=modal]");
      if (inModal) return;

      onClose();
    }
  };
  
  const portal = document.getElementById("modal")

  if (!isOpen) return null;

  const modal = (
    <div
      className="fixed inset-0 bg-slate-900/60 backdrop-blur py-4"
      onClick={handleClick}
    >
      <div
        data-id="modal"
        className={clsx(
          "flex flex-col relative bg-white rounded-md min-h-[300px] mx-auto",
          {
            md: "max-w-[640px] w-full",
            full: "full"
          }[width]
        )}
      >
        {children}
        <button
          className="absolute top-0 left-[calc(100%+10px)] flex items-center justify-center rounded-sm w-6 h-6 bg-white/10"
          onClick={onClose}
        >
          <CrossIcon className="text-white w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return portal ? createPortal(modal, portal) : null;
}

UiModal.Header = function UiModalHeader({ className, children }: HeaderProps) {
  return (
    <div className={clsx(className, "px-4 pt-5 pb-4 text-xl")}>{children}</div>
  );
};

UiModal.Body = function ({ className, children }: BodyProps) {
  return <div className={clsx(className, "px-4")}>{children}</div>;
};

UiModal.Footer = function ({ className, children }: FooterProps) {
  return <div className={clsx(className, "px-4 pb-4 mt-auto")}>{children}</div>;
};
