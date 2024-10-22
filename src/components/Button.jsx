// Start coding here

export default function Button({ type }) {
  if (type === "primary") {
    return (
      <button className="bg-blue-700 font-normal text-base text-white w-[171px] h-[50px] px-4 rounded-md">
        Button
      </button>
    );
  } else {
    return (
      <button className="bg-blue-400 font-normal text-base text-white w-[171px] h-[50px] px-4 rounded-md">
        Button
      </button>
    );
  }
}
