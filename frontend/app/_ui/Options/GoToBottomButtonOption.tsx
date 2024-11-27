import { useContext } from "react";
import { OptionsContext } from "@/app/_context/OptionsContext";
import { ActionButton } from "./ActionButton";
import { Separator } from "./Separator";
import { OptionContainer } from "./OptionContainer";
import { OptionTitle } from "./OptionTitle";
import { ActionButtonsContainer } from "./ActionButtonsContainer";

export const GoToBottomButtonOption = () => {
  const { goToBottomButton, toggleGoToBottomButton } =
    useContext(OptionsContext);

  return (
    <OptionContainer>
      <OptionTitle>{`"Go to the bottom" button`}</OptionTitle>

      <ActionButtonsContainer>
        <ActionButton
          active={goToBottomButton === "show"}
          onClick={() => toggleGoToBottomButton("show")}
        >
          Show
        </ActionButton>

        <Separator />

        <ActionButton
          active={goToBottomButton === "hide"}
          onClick={() => toggleGoToBottomButton("hide")}
        >
          Hide
        </ActionButton>
      </ActionButtonsContainer>
    </OptionContainer>
  );
};
