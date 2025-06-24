import { RESTRO_IMG } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 flex justify-between "
        >
          <div key={item.card.info.id} className="w-[80%]">
            <span className="font-semibold mb-2 block">
              {item.card.info.name}
            </span>
            <span className="font-semibold mb-2">
              &#8377;
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs w-[90%]">{item.card.info.description}</p>
          </div>
          <div className="flex justify-center items-center w-[20%] ">
            <img
              className="w-24 h-auto"
              src={RESTRO_IMG + item.card.info.imageId}
            />
            <button className="px-2 bg-black text-white  shadow-lg self-center  text-s rounded-sm absolute mt-12 cursor-pointer">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
