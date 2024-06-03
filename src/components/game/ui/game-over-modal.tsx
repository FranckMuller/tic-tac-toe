import { UiModal, UiButton } from "../../uikit";

export function GameOverModal({isOpen}: any) {
  return (
    <UiModal isOpen={isOpen} onClose={() => console.log("close")}>
      <UiModal.Header>Game is over!</UiModal.Header>
      <UiModal.Body>
        <div className="text-xs">
          Winner: <span className="text-teal-600">Dimasta</span>
        </div>
      </UiModal.Body>
      <UiModal.Footer className="flex justify-end gap-2">
        <UiButton size="md" variant="outline">
          Return
        </UiButton>
        <UiButton size="md" variant="primary">
          Play again
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
}
