import ShoppingCard from "./ShoppingCard";

const ShoppingCardList = () => {
  const shoppingItems = [
    {
      title: "Shoes",
      description: "Nice shoes...",
      onClick: () => {
        console.log("Buy now");
      },
    },
    {
      title: "Sunglasses",
      description: "Cool sunglasses...",
      onClick: () => {
        console.log("Buy now");
      },
    },
    {
      title: "Shirt",
      description: "Nice shirt...",
      onClick: () => {
        console.log("Buy now");
      },
    },
    {
      title: "Hat",
      description: "Nice hat...",
      onClick: () => {
        console.log("Buy now");
      },
    },
    {
      title: "Socks",
      description: "Nice socks...",
      onClick: () => {
        console.log("Buy now");
      },
    },
    {
      title: "Pants",
      description: "Nice pants...",
      onClick: () => {
        console.log("Buy now");
      },
    },
    {
      title: "Jacket",
      description: "Nice jacket...",
      onClick: () => {
        console.log("Buy now");
      },
    },
    {
      title: "Gloves",
      description: "Nice gloves...",
      onClick: () => {
        console.log("Buy now");
      },
    },
  ];

  return (
    <div>
      {shoppingItems.map((item) => {
        <ShoppingCard
          title={item.title}
          description={item.description}
          onClick={item.onClick}
        />;
      })}
    </div>
  );
};
export default ShoppingCardList;
