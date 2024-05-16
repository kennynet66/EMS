import { Link } from "react-router-dom";

export default function Update() {
  return (
    <>
    <form>
      <h3>Update your profile photo</h3>
      <div className="input-div">
        <input type="file" name="" id="" />
      </div>
      <div className="input-div picU">
        <input type="submit" className="update-btn" value="Update pic" />
        <Link to="../" className="close-link">Close</Link>
      </div>
    </form>
    </>
  );
}
