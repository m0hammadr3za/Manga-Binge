import { useContext } from "react";
import { OptionsContext } from "@/context/OptionsContext";
import { OptionContainer } from "../OptionContainer";
import { Title } from "../Title";
import { ActionButtonsContainer } from "../ActionButtonsContainer";
import { ActionButton } from "../ActionButton";
import { ButtonsSeparator } from "../ButtonsSeparator";

export const ScrollbarOption = () => {
  const { scrollbar, toggleScrollbar } = useContext(OptionsContext);

  return (
    <OptionContainer>
      <Title>Scrollbar</Title>

      <ActionButtonsContainer>
        <ActionButton
          active={scrollbar === "show"}
          onClick={() => toggleScrollbar("show")}
        >
          Show
        </ActionButton>

        <ButtonsSeparator />

        <ActionButton
          active={scrollbar === "hide"}
          onClick={() => toggleScrollbar("hide")}
        >
          Hide
        </ActionButton>
      </ActionButtonsContainer>
    </OptionContainer>
  );
};
