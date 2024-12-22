import Sidebar from "../../components/SidebarAdmin";
import Header from "../../components/Header";

export default function FacialRecognition() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 px-6 gap-y-4 mt-5"> 
        <Header />
          <h1 className=" text-xl font-bold mb-8">Facial Recognition</h1>
        <div className="flex items-center justify-center h-screen"> 
          <img src="../../../public/FaceId.svg" className=" p-0 w-1/2" /> 
        </div>
      </div>
    </div>
  );
}