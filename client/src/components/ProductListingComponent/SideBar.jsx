const SideBar = () => {
  return (
    <aside className="bg--600 w-60 bg-blue-400 ">
      <div className="text-sm text-gray-600">
        <div className="mb-4">
          <h1 className="font-semibold text-base text-black">Category</h1>
        </div>
        <div className="flex gap-3 flex-col">
          <p>Mobile accessory</p>
          <p>Electronics</p>
          <p>Mordern tech</p>
          <p>Smartphones</p>
        </div>
        <span className="to-blue-500 font-medium">See all</span>
      </div>

      <hr />
      <hr />
      <div className="text-sm text-gray-600">
        <div className="mb-4">
          <h1 className="font-semibold text-base text-black">Category</h1>
        </div>
        <div className="flex gap-3 flex-col">
          <div>
            <input type="checkbox" name="metallic-body" id="metallic-body" />
            <label>metallic body</label>
          </div>
          <div>
            <input type="checkbox" name="metallic-body" id="metallic-body" />
            <label>metallic body</label>
          </div>
          <div>
            <input type="checkbox" name="metallic-body" id="metallic-body" />
            <label>metallic body</label>
          </div>
        </div>
        <span className="to-blue-500 font-medium">See all</span>
      </div>

      <hr />
      <hr />
      <div className="text-sm text-gray-600">
        <div className="mb-4">
          <h1 className="font-semibold text-base text-black">Category</h1>
        </div>
        <div className="flex gap-3 flex-col">
          <div>
            <input type="checkbox" name="metallic-body" id="metallic-body" />
            <label>metallic body</label>
          </div>
          <div>
            <input type="checkbox" name="metallic-body" id="metallic-body" />
            <label>metallic body</label>
          </div>
          <div>
            <input type="checkbox" name="metallic-body" id="metallic-body" />
            <label>metallic body</label>
          </div>
        </div>
        <span className="to-blue-500 font-medium">See all</span>
      </div>
    </aside>
  );
};

export default SideBar;
//gray-600
