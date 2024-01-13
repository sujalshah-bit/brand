import MobileSidebar from "./MobileSidebar";
const SubNav = () => {
  const items = [
    { item: "All category", link: "#", additionalComponent: <MobileSidebar /> },
    { item: "Hot offers", link: "#" },
    { item: "Gift boxes", link: "#" },
    { item: "Projects", link: "#" },
    { item: "Menu Item", link: "#" },
  ];
  return (
    <section className="flex items-center p-1 justify-between bg-white  cust-break:w-[1150px] mx-auto ">
      <ul className="flex items-center gap-6">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a className="text-sm font-medium" href={`${item.link}`}>
                <span className="flex items-center gap-1">
                  {item.additionalComponent}
                  {item.item}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="text-sm font-medium flex items-center first-letter: gap-6 px-2">
        <a href="#">English Inr</a>
        <a href="#">Ship to 🇮🇳</a>
      </div>
    </section>
  );
};

export default SubNav;
