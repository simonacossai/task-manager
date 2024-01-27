import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const tasks = [
  { id: "1", content: "First task" },
  { id: "2", content: "Second task" },
  { id: "3", content: "Third task" },
  { id: "4", content: "Fourth task" },
  { id: "5", content: "Fifth task" },
  { id: "6", content: "Sixth task" },
  { id: "7", content: "Seventh task" },
  { id: "8", content: "Eighth task" },
  { id: "9", content: "Ninth task" },
];

const taskStatus = {
  requested: {
    name: "To do",
    items: tasks,
  },
  toDo: {
    name: "In progress",
    items: [],
  },
  inProgress: {
    name: "Closed",
    items: [],
  },
  done: {
    name: "Frozen",
    items: [],
  },
};

const onDragEnd = (result: any, columns: any, setColumns: any) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function DashboardPage() {
  const [columns, setColumns] = useState(taskStatus);
  return (
    <div className="flex flex-row align-start justify-start w-full  overflow-scroll h-full">
      <div className="flex flex-row align-start overflow-scroll justify-start w-full ">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                className="flex flex-col align-start justify-start w-full overflow-scroll"
                key={columnId}
                style={{
                  maxWidth: 320,
                }}
              >
                <div
                  className="flex flex-row align-center justify-center bg-white m-2 p-4 rounded-lg "
                  style={{
                    maxWidth: 320,
                  }}
                >
                  <h2>{column.name}</h2>
                </div>
                <div
                  className="m-2"
                  style={{
                    maxWidth: 320,
                  }}
                >
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            maxWidth: 320,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}

export default DashboardPage;
