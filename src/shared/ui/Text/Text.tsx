import { colors, fontSizes } from "@/app/token";
import { Box } from "../Box";

type ValidElements = "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TextProps {
    as?: ValidElements;
    children?: React.ReactNode;
    fontSize: keyof typeof fontSizes;
    color: keyof typeof colors;
    className?: string;
    style? : unknown;
}

export const Text = ({as = "span", children, fontSize, color, className, style}: TextProps) => {
    return (
        <Box as={as} fontSize={fontSize} color={color} className={`${className} ${style}`}>
            {children}
        </Box>
    );
}