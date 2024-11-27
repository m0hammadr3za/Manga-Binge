import { useContext } from "react";
import { OptionsContext } from "@/app/_context/OptionsContext";
import { ActionButton } from "./ActionButton";
import { Separator } from "./Separator";
import { OptionContainer } from "./OptionContainer";
import { OptionTitle } from "./OptionTitle";
import { ActionButtonsContainer } from "./ActionButtonsContainer";

export const ThemeOption = () => {
  const { theme, toggleTheme } = useContext(OptionsContext);

  return (
    <OptionContainer>
      <OptionTitle>Theme</OptionTitle>

      <ActionButtonsContainer>
        <ActionButton
          active={theme === "light"}
          onClick={() => toggleTheme("light")}
        >
          Light
        </ActionButton>

        <Separator />

        <ActionButton
          active={theme === "dark"}
          onClick={() => toggleTheme("dark")}
        >
          Dark
        </ActionButton>
      </ActionButtonsContainer>
    </OptionContainer>
  );
};
