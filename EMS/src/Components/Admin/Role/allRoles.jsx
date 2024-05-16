import { Link } from "react-router-dom";
export default function AllRoles() {
  return (
    <>
      <h4>All roles</h4>
      <div>
        <Link to="../" className="close-roles">
          Hide
        </Link>
      </div>
    </>
  );
}
