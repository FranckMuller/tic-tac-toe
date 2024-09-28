import { UiButton } from "@/components/uikit/ui-button";
import { UiModal } from "@/components/uikit/ui-modal";
export const GameOverModal = () => {
  return (
    <UiModal size="md" isOpen={false} onClose={() => console.log("close")}>
      <UiModal.UiModalHeader>Игра завершена</UiModal.UiModalHeader>
      <UiModal.UiModalBody>
        <div>
          Победитель: <span>Dima</span>
        </div>
      </UiModal.UiModalBody>
      <UiModal.UiModalFooter>
        <UiButton className="mr-3" variant="outline">
          Вернуться
        </UiButton>
        <UiButton>Играть снова</UiButton>
      </UiModal.UiModalFooter>
    </UiModal>
  );
};
