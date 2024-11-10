import { Item } from "./Item";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
  return (
    <ul className="list">
      {emojis.map((emoji) => (
        <Item key={emoji} emoji={emoji} />
      ))}
    </ul>
  );
}
