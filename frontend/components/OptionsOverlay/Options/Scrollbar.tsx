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
          active={scrollbar === "standard"}
          onClick={() => toggleScrollbar("standard")}
        >
          Standard
        </ActionButton>

        <ButtonsSeparator />

        <ActionButton
          active={scrollbar === "hidden"}
          onClick={() => toggleScrollbar("hidden")}
        >
          Hidden
        </ActionButton>

        <ButtonsSeparator />

        <ActionButton
          active={scrollbar === "custom"}
          onClick={() => toggleScrollbar("custom")}
        >
          Custom
        </ActionButton>
      </ActionButtonsContainer>
    </OptionContainer>
  );
};
