import { styled } from "styled-components"
import { Tagline } from "../Tagline/index"
import { H1, H2, H3, H4, H5, H6 } from "../Heading/index"
import { Subheading } from "../Subheading/index"
import { size } from "../../layout/helpers"
import { Grid } from "../CssGrid/index"

export const Wrapper = styled(Grid)`
    grid-template-rows: repeat(3, auto);
    
    ${Tagline} {
        grid-row: 1 / 2;
        grid-column: 1 / -1;
        margin-bottom: ${size(5)};
        ${(props) => props.theme.breakpoint.Md} {
            grid-row: 1 / 2;
            grid-column: 3 / -1;
            margin-bottom: ${size(11)};
        };
    };

    ${H1},
    ${H2},
    ${H3},
    ${H4},
    ${H5},
    ${H6} {
        grid-row: 2 / 3;
        grid-column: 2 / -2;

        ${(props) => props.theme.breakpoint.Md} {
            grid-row: 2 / 3;
            grid-column: 4 / -2;
        }
    };

    ${Subheading} {
        grid-row: 3 / 4;
        grid-column: 2 / -2;
        margin-top: ${size(2.5)};
        ${(props) => props.theme.breakpoint.Md} {
            margin-top: ${size(3)};
            grid-row: 3 / 4;
            grid-column: 4 / -6;
        };
    };
    
`