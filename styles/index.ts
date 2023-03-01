import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const colors = {};

const mainTheme = extendTheme({ config });

export default mainTheme;
