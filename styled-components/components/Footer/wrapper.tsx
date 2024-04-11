import { styled } from "styled-components";
import { size } from "../../layout/helpers";

export const Wrapper = styled.footer`
  background: ${(props) => props.theme.colors.secondaryDefault};
  padding-block: ${size(10)};
  z-index: 10;
  ${(props) => props.theme.breakpoint.Md} {
    padding-block: ${size(19)};
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${size(3)};
  ${(props) => props.theme.breakpoint.Md} {
  }
`;

export const Headline = styled.h2`
  font-size: 2.5rem;
  line-height: 140%;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primaryDefault};

  ${(props) => props.theme.breakpoint.Lg} {
    font-size: 4rem;
    max-width: 50%;
  }
`;

export const MailToLink = styled.a`
  font-size: 1.5rem;
  max-width: fit-content;
  text-deccoration: underline;
  color: ${(props) => props.theme.colors.primaryDefault};
  ${(props) => props.theme.breakpoint.Md} {
    font-size: 1.75rem;
  }
`;

export const AddressBox = styled.p`
  margin: 0;
  max-width: fit-content;
  font-size: 1.5rem;
  line-height: ${size(4)};
  margin-top: ${size(3)};

  color: ${(props) => props.theme.colors.primaryDefault};

  ${(props) => props.theme.breakpoint.Lg} {
    font-size: 1.75rem;
    position: absolute;
    right: 0;
  }
`;

// ${(props) => props.theme.breakpoint.Md} {
//     //position: sticky;
//     //top: ${size(-6)};
//     padding-top: ${size(12)};
//   }
