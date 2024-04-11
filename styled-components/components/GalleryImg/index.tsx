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
        width={320}
        height={411}
        alt={`Photo of ${employee.firstName} ${employee.lastName}`}
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
