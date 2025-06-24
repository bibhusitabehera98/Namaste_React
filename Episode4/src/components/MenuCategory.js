import ItemList from "./ItemList";

const MenuCategory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);

  const handleClick = () => {
    setShowIndex(!showItems);
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      {/* Header */}
      <div
        className="text-center flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ? "🔼" : "🔽"}</span>
      </div>

      {/* Body */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default MenuCategory;
