import { useContext } from "react";
import { OptionsContext } from "@/context/OptionsContext";
import { OptionContainer } from "../OptionContainer";
import { Title } from "../Title";
import { ActionButtonsContainer } from "../ActionButtonsContainer";
import { ActionButton } from "../ActionButton";
import { ButtonsSeparator } from "../ButtonsSeparator";

export const ThemeOption = () => {
  const { theme, toggleTheme } = useContext(OptionsContext);

  return (
    <OptionContainer>
      <Title>Theme</Title>

      <ActionButtonsContainer>
        <ActionButton
          active={theme === "light"}
          onClick={() => toggleTheme("light")}
        >
          Light
        </ActionButton>

        <ButtonsSeparator />

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
