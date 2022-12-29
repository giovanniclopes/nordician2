import VikingImg from "../assets/viking.jpg";

export function PageNotFound() {
  return (
    <div className="grid grid-cols-2 bg-white h-screen">
      <div></div>
      <div className="flex items-center justify-center">
        <img className="w-10/12" src={VikingImg} alt="" draggable="false" />
      </div>
    </div>
  );
}

export default PageNotFound;
