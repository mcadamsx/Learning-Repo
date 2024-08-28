import Fruit from "./Fruit";

export default function FruitsArray() {
  const fruits = [
    { name: "Apple", price: 5, emoji: "🍎" },
    { name: "Mango", price: 5, emoji: "🥭" },
    { name: "Banana", price: 5, emoji: "🍌" },
    { name: "Oange", price: 5, emoji: "🍊" },
    { name: "Pineapple", price: 8, emoji: "🍍" },
  ];
  return (
    <>
      <ol>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            emoji={fruit.emoji}
            price={fruit.price}
          ></Fruit>
        ))}
      </ol>
    </>
  );
}
