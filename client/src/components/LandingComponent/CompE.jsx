const CompE = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className="px-2 mt-5 cust-break:w-[1150px] mx-auto bg-[#F7FAFC]">
      <h2 className="font-bold mb-5">Recommended Items</h2>
      <div className="grid  grid-cols-2 bg--500 place-items-center sm:grid-cols-3 tab-break:grid-cols-5  gap-3 ">
        {items.map((item, index) => {
          return (
            <div className="w-40 flex flex-col gap-3 px-2 bg-white  b-shadow rounded " key={index}>
              <a href="#">
                <img
                  src="./src/assets/test1.png"
                  width={142}
                  className="bg-cover bg-center"
                  height={142}
                  alt=""
                />
              </a>

              <a href="#">
                <h2 className="font-semibold text-sm">$10.30</h2>
                <p className="text-gray-300 text-xs">
                  T-shirts with multiple colors for men.
                </p>
              </a>
            </div>
          );
        })}
       
      </div>
    </section>
  );
};

export default CompE;
