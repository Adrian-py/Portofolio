interface componentProps {
  name: string;
}

export default function Tag({ name }: componentProps) {
  return (
    <div className="rounded-lg px-[1rem] py-[0.25rem] text-[0.75rem] bg-[#717184] text-textHighlight cursor-pointer">
      <p className="">{name}</p>
    </div>
  );
}
