import { styled } from "styled-components";
import { size } from "../../layout/helpers";
import Image from "next/image";

export const CardContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${size(3)};
  background: linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0) 100%);

  ${(props) => props.theme.breakpoint.Lg} {
    padding: ${size(4)};
  }
`;

export const ContentTop = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.secondaryDefault};
  font-size: 17px;

  ${(props) => props.theme.breakpoint.Lg} {
    font-size: 19px;
  }
`;

export const ContentBottom = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.primaryLight};
  font-size: 1.5rem;

  ${(props) => props.theme.breakpoint.Lg} {
    font-size: 1.75rem;
  }
`;

export const ImgWrapper = styled.li`
  position: relative;
`;

export const StyledImg = styled(Image)`
  object-fit: cover;
  margin: 0 auto;
`;
