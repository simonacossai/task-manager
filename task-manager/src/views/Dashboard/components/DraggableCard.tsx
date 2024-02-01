import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";

interface DraggableCardProps {
  //   icon: string;
  //   label: string;
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
}

const DraggableCard = (props: DraggableCardProps) => {
  return (
    <div
      className="flex flex-row justify-start items-center w-full py-4 hover:transition-all duration-300"
      ref={props.provided.innerRef}
      style={{
        userSelect: "none",
        padding: 16,
        margin: "0 0 8px 0",
        minHeight: "50px",
        backgroundColor: props.snapshot.isDragging ? "#263B4A" : "#456C86",
        color: "white",
        ...props.provided.draggableProps.style,
      }}
    >
      ciaoo
    </div>
  );
};
export default DraggableCard;
