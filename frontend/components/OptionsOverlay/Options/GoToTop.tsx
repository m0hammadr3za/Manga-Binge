import { useContext } from "react";
import { OptionsContext } from "@/context/OptionsContext";
import { OptionContainer } from "../OptionContainer";
import { Title } from "../Title";
import { ActionButtonsContainer } from "../ActionButtonsContainer";
import { ActionButton } from "../ActionButton";
import { ButtonsSeparator } from "../ButtonsSeparator";

export const GoToTopOption = () => {
  const { goToTopButton, toggleGoToTopButton } = useContext(OptionsContext);

  return (
    <OptionContainer>
      <Title>{`"Go to the top" button`}</Title>

      <ActionButtonsContainer>
        <ActionButton
          active={goToTopButton === "show"}
          onClick={() => toggleGoToTopButton("show")}
        >
          Show
        </ActionButton>

        <ButtonsSeparator />

        <ActionButton
          active={goToTopButton === "hide"}
          onClick={() => toggleGoToTopButton("hide")}
        >
          Hide
        </ActionButton>
      </ActionButtonsContainer>
    </OptionContainer>
  );
};
