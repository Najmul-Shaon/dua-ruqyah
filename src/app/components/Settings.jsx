const Settings = () => {
  // const setting = [{}]
  return (
    <div className="mt-9 rounded-4xl bg-white p-5 min-h-screen border border-[#E2E2E2]">
      <h3 className="text-center p-4 font-bold text-xl rounded-t-xl">
        Settings
      </h3>
      <div className="flex flex-col justify-center gap-3.5">
        <div className="flex gap-3 bg-[#F7F8FA] py-2 px-3.5 rounded">
          <img
            className="p-1.5 bg-[#E8F0F5] rounded-full"
            src="/assets/Frame.png"
            alt=""
          />
          <h4 className="text-[#868686] text-base">Language Settings</h4>
        </div>
        <div className="flex gap-3 bg-[#F7F8FA] py-2 px-3.5 rounded">
          <img
            className="p-1.5 bg-[#E8F0F5] rounded-full"
            src="/assets/Vector.png"
            alt=""
          />
          <h4 className="text-[#868686] text-base">General Settings</h4>
        </div>
        <div className="flex gap-3 bg-[#F7F8FA] py-2 px-3.5 rounded">
          <img
            className="p-1.5 bg-[#E8F0F5] rounded-full"
            src="/assets/54-menu-2.png"
            alt=""
          />
          <h4 className="text-[#868686] text-base">Font Settings</h4>
        </div>
        <div className="relative">
          <div className="flex gap-3 bg-[#F7F8FA] py-2 px-3.5 rounded border-s-5 border-[#1FA45B] z-20 relative">
            <img
              className="p-1.5 bg-[#E8F0F5] rounded-full"
              src="/assets/54-menu-2.png"
              alt=""
            />
            <h4 className="text-base text-[#1FA45B]">Appearance Settings</h4>
          </div>
          <div className="flex items-center justify-between gap-1 border border-t-0 border-[#E2E2E2] rounded-sm rounded-t-0 px-4 py-8 absolute top-10 w-full z-10">
            <p>Night Mode</p>
            <input type="checkbox" defaultChecked className="toggle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
