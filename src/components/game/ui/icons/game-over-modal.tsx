import type { FC } from "react";
import { UiButton } from "@/components/uikit/ui-button";
import { UiModal } from "@/components/uikit/ui-modal";

type Props = {
  winnerName?: string;
  players: React.ReactElement[];
};

export const GameOverModal: FC<Props> = ({ winnerName, players }) => {
  return (
    <UiModal
      size="md"
      isOpen={!!winnerName}
      onClose={() => console.log("close")}
    >
      <UiModal.UiModalHeader>Игра завершена</UiModal.UiModalHeader>
      <UiModal.UiModalBody>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-3 justify-between">
          {players}
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
