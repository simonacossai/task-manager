import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";

interface DraggableCardProps {
  //   icon: string;
  //   label: string;
}

const DraggableCard = (props: DraggableCardProps) => {
  return (
    <div className="flex flex-col justify-start items-start w-full hover:transition-all duration-300">
      <span className="inline-flex items-center rounded-md bg-accent-color px-2 py-1 text-xs font-medium text-white ring-1 ring-inset">
        Design
      </span>
      <img
        src={
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="dashboard"
        className="w-full rounded-lg my-4 h-24"
      />

      <span className="text-deep-accent-color text-md line-clamp-1 mb-1">
        Create styleguide foundation
      </span>
      <span className="text-grey text-sm line-clamp-1">
        Create content for peceland App
      </span>
      <span className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-deep-accent-color ring-1 ring-inset ring-light-grey mt-2">
        Aug 19, 2024
      </span>

      <div className="flex-space-x-1 overflow-hidden mt-4">
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />

        {/* <span className="text-grey font-normal text-lg mx-4">+6</span> */}
      </div>
    </div>
  );
};
export default DraggableCard;
