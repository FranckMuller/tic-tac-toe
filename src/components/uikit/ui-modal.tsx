import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
  className?: string;
  size?: "md" | "full";
  isOpen: boolean;
  onClose: () => void;
} & PropsWithChildren;

type UiModalComponents = {
  UiModalHeader: FC<PropsWithChildren & { className?: string }>;
  UiModalBody: FC<PropsWithChildren & { className?: string }>;
  UiModalFooter: FC<PropsWithChildren & { className?: string }>;
};

export const UiModal: FC<Props> & UiModalComponents = ({
  size = "md",
  className,
  onClose,
  children,
  isOpen = false,
}) => {
  if (!isOpen) return null;

  const handleClose = (e: React.MouseEvent) => {
    const inModal = (e.target as HTMLElement).closest("[data-id=modal]");
    if (inModal) return;
    onClose();
  };

  const modal = (
    <div
      onClick={handleClose}
      className={clsx(
        className,
        "bg-slate-900/60 fixed inset-0 backdrop-blur py-10 overflow-y-auto"
      )}
    >
      <div
        data-id="modal"
        className={clsx(
          "bg-white rounded-lg min-h-[320px] mx-auto relative flex flex-col",
          {
            md: "max-w-[640px]",
            full: "mx-5",
          }[size]
        )}
      >
        {children}
        <button
          onClick={onClose}
          className="
            w-8 h-8 rounded flex items-center justify-center
            hover:bg-white/40 bg-white/10 transition-colors
            absolute left-[calc(100%+12px)] top-0"
        >
          <IoCloseOutline className="text-white w-6 h-6" />
        </button>
      </div>
    </div>
  );

  return createPortal(
    modal,
    document && (document.getElementById("modals") as HTMLDivElement)
  );
};

UiModal.UiModalHeader = ({ className, children }) => {
  return (
    <div className={clsx(className, "pt-6 pb-4 px-5 text-xl")}>{children}</div>
  );
};
UiModal.UiModalBody = ({ className, children }) => {
  return <div className={clsx(className, "px-5")}>{children}</div>;
};
UiModal.UiModalFooter = ({ className, children }) => {
  return (
    <div className={clsx(className, "mt-auto ml-auto pb-5 px-5")}>
      {children}
    </div>
  );
};
