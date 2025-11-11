import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useTheme } from "next-themes";
import { lightTheme, darkTheme } from "./theme";
import GlobalStyles from "./GlobalStyles";

export function ThemeBridge({ children }) {
    const { theme } = useTheme();

    const currentTheme =
        theme === "dark"
            ? darkTheme
            : lightTheme;

    return (
        <StyledThemeProvider theme={currentTheme}>
            <GlobalStyles />
            {children}
        </StyledThemeProvider>
    );
}
