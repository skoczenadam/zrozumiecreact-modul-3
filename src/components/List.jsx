import { Item } from "./Item";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
  return (
    <ul className="flex flex-col gap-[30px]">
      {emojis.map((emoji) => (
        <Item key={emoji} emoji={emoji} />
      ))}
    </ul>
  );
}
