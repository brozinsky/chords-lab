import MenuTop from "@/modules/navigation/MenuTop";

export default function Root() {
  return (
    <>
      <MenuTop />
      <div className="container flex items-center justify-center h-screen">
        <h1 className="text-3xl text-center text-primary-500">Page3</h1>
      </div>
    </>
  );
}
