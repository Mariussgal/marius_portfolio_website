import { Box } from "@chakra-ui/react";
import React from "react";

export default function Security() {
    return (
        <Box
            as="svg"
            role="img"
            width="24px"  // Adjusted width
            height="26.4px" // Adjusted height, maintaining aspect ratio
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 111.811 122.88" // Adjusted viewBox to match new SVG
            fill="#1f2127"
            _hover={{
                fill: "brand.accent",
            }}
        >
            <title>Security</title>
            <path fillRule="evenodd" clipRule="evenodd" d="M55.713,0c20.848,13.215,39.682,19.467,55.846,17.989 c2.823,57.098-18.263,90.818-55.63,104.891C19.844,109.708-1.5,77.439,0.083,17.123C19.058,18.116,37.674,14.014,55.713,0L55.713,0 z M33.784,66.775c-1.18-1.01-1.318-2.786-0.309-3.967c1.011-1.181,2.787-1.318,3.967-0.309l11.494,9.875l25.18-27.684 c1.047-1.15,2.828-1.234,3.979-0.188c1.149,1.046,1.233,2.827,0.187,3.978L51.262,78.188l-0.002-0.002 c-1.02,1.121-2.751,1.236-3.91,0.244L33.784,66.775L33.784,66.775z M55.735,7.055c18.454,11.697,35.126,17.232,49.434,15.923 c2.498,50.541-16.166,80.39-49.241,92.846C23.986,104.165,5.091,75.603,6.493,22.211C23.29,23.091,39.768,19.46,55.735,7.055 L55.735,7.055z" />
        </Box>
    );
}