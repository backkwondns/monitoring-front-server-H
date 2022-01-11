import React from 'react';
import { Box } from '@mui/material';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { settingInterface } from 'src/interfaces';

function ListSetting(props: settingInterface.listSettingInterface): JSX.Element {
  const { listChart, onDragEnd } = props;
  return (
    <Box sx={{ p: 1, width: '50%' }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{ p: 1, border: '1.5px solid #e8e4f7', borderRadius: '10px' }}
            >
              {listChart.map((item: string, index: number) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided) => (
                    <Box
                      sx={{ border: '1px solid gray', m: 1, p: 1, borderRadius: '10px', textAlign: 'center' }}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.split('_').join(' ')}
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
}

export default ListSetting;
