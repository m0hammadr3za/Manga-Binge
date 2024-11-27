import { useContext } from "react";
import { OptionsContext } from "@/app/_context/OptionsContext";
import { ActionButton } from "./ActionButton";
import { Separator } from "./Separator";
import { OptionContainer } from "./OptionContainer";
import { OptionTitle } from "./OptionTitle";
import { ActionButtonsContainer } from "./ActionButtonsContainer";

export const GoToTopButtonOption = () => {
  const { goToTopButton, toggleGoToTopButton } = useContext(OptionsContext);

  return (
    <OptionContainer>
      <OptionTitle>{`"Go to the top" button`}</OptionTitle>

      <ActionButtonsContainer>
        <ActionButton
          active={goToTopButton === "show"}
          onClick={() => toggleGoToTopButton("show")}
        >
          Show
        </ActionButton>

        <Separator />

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
