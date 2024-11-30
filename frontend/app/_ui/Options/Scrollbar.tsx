import { useContext } from "react";
import { OptionsContext } from "@/app/_context/OptionsContext";
import { ActionButton } from "./ActionButton";
import { Separator } from "./Separator";
import { OptionContainer } from "./OptionContainer";
import { OptionTitle } from "./OptionTitle";
import { ActionButtonsContainer } from "./ActionButtonsContainer";

export const Scrollbar = () => {
  const { scrollbar, toggleScrollbar } = useContext(OptionsContext);

  return (
    <OptionContainer>
      <OptionTitle>Scrollbar</OptionTitle>

      <ActionButtonsContainer>
        <ActionButton
          active={scrollbar === "standard"}
          onClick={() => toggleScrollbar("standard")}
        >
          Standard
        </ActionButton>

        <Separator />

        <ActionButton
          active={scrollbar === "hidden"}
          onClick={() => toggleScrollbar("hidden")}
        >
          Hidden
        </ActionButton>

        <Separator />

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
