const Menu = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-white max-w-[100px] min-h-screen rounded-3xl py-3 px-0">
      <div>
        <img className="w-[73px]" src="/assets/logo.png" alt="site logo" />
      </div>
      <div className="flex flex-col gap-7 py-24">
        <img className="w-[38px]" src="/assets/Home.png" alt="site logo" />
        <img className="w-[38px]" src="/assets/All Duas.png" alt="site logo" />
        <img className="w-[38px]" src="/assets/Memorize.png" alt="site logo" />
        <img className="w-[38px]" src="/assets/Bookmark.png" alt="site logo" />
        <img className="w-[38px]" src="/assets/Ruqyah.png" alt="site logo" />
        <img className="w-[38px]" src="/assets/Dua Q&A.png" alt="site logo" />
        <img className="w-[38px]" src="/assets/Book.png" alt="site logo" />
      </div>
      <div>
        <img className="w-[57px]" src="/assets/dontate.png" alt="site logo" />
      </div>
    </div>
  );
};

export default Menu;
