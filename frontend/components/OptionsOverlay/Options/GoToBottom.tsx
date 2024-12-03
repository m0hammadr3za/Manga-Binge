import { useContext } from "react";
import { OptionsContext } from "@/context/OptionsContext";
import { OptionContainer } from "../OptionContainer";
import { Title } from "../Title";
import { ActionButtonsContainer } from "../ActionButtonsContainer";
import { ActionButton } from "../ActionButton";
import { ButtonsSeparator } from "../ButtonsSeparator";

export const GoToBottomOption = () => {
  const { goToBottomButton, toggleGoToBottomButton } =
    useContext(OptionsContext);

  return (
    <OptionContainer>
      <Title>{`"Go to the bottom" button`}</Title>

      <ActionButtonsContainer>
        <ActionButton
          active={goToBottomButton === "show"}
          onClick={() => toggleGoToBottomButton("show")}
        >
          Show
        </ActionButton>

        <ButtonsSeparator />

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
