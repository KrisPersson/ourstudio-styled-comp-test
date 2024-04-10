import {
  ImgWrapper,
  ImgInner,
  JobDepartment,
  EmployeeName,
  StyledImg,
} from "./wrapper";

interface EmployeeProps {
  firstName: string;
  lastName: string;
  department: string;
  imgSrc: string;
}

export default function GalleryImg({ employee }: { employee: EmployeeProps }) {
  return (
    <ImgWrapper>
      <StyledImg
        src={`/portraits/${employee.imgSrc}`}
        width={320}
        height={411}
      ></StyledImg>
      <ImgInner>
        <JobDepartment>{employee.department}</JobDepartment>
        <EmployeeName>
          {employee.firstName}
          <br />
          {employee.lastName}
        </EmployeeName>
      </ImgInner>
    </ImgWrapper>
  );
}
