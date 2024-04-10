import { styled } from "styled-components";
import { size } from "../../layout/helpers";
import Image from "next/image";

export const ImgWrapper = styled.li`
  grid-row: auto;
  grid-column: auto / span 3;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const StyledImg = styled(Image)`
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
  flex: 1 1 100%;

  ${(props) => props.theme.breakpoint.LtLg} {
    max-height: 291px;
  }
`;

export const ImgInner = styled.div`
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

export const JobDepartment = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.secondaryDefault};
  font-size: 17px;

  ${(props) => props.theme.breakpoint.Lg} {
    font-size: 19px;
  }
`;

export const EmployeeName = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.primaryLight};
  font-size: 1.5rem;

  ${(props) => props.theme.breakpoint.Lg} {
    font-size: 1.75rem;
  }
`;
