interface team {
  pic: string;
  name: string;
  description: string;
  position: string;
}

const Card = (t: team) => {
  return (
    <div className="flex flex-col mr-5 mb-5 gap-2 bg-gray-200 p-10">
      <img
        src={t.pic}
        className="h-[10rem] w-[10rem] rounded-full aspect-1"
        loading="lazy"
      />
      <h1 className="font-bold text-4xl">{t.name}</h1>
      <p className="text-2xl">{t.position}</p>
      <p>{t.description}</p>
    </div>
  );
};

export default Card;
