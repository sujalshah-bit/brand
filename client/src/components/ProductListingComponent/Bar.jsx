import Dropdown from './Dropdown';

const Bar = () => {
  return (
    <div className="bg-white rounded-md flex gap-4">
      <span>
        12,911 items in <strong>Mobile accessory</strong>
      </span>
      <div>
        <Dropdown />
        <div>
          <button>
            <img
              src="./src/assets/Button/btn-groups.png"
              width={30}
              height={40}
              alt=""
            />
          </button>
          <button>
            <img
              src="./src/assets/Button/btn-group.png"
              width={30}
              height={40}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bar;
