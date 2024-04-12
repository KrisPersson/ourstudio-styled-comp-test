import { Wrapper, ImgInner, JobDepartment, EmployeeName, Img } from "./wrapper";

interface EmployeeProps {
  firstName: string;
  lastName: string;
  department: string;
  imgSrc: string;
}

export default function GalleryImg({ employee }: { employee: EmployeeProps }) {
  return (
    <Wrapper>
      <Img
        src={`/portraits/${employee.imgSrc}`}
        fill={true}
        sizes="25vw"
        alt={`Photo of ${employee.firstName} ${employee.lastName}`}
        quality={100}
      ></Img>
      <ImgInner>
        <JobDepartment>{employee.department}</JobDepartment>
        <EmployeeName>
          {employee.firstName}
          <br />
          {employee.lastName}
        </EmployeeName>
      </ImgInner>
    </Wrapper>
  );
}
