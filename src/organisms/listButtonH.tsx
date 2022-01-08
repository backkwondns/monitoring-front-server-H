import React from 'react';
import { ListH, ListItemButtonH, ListItemTextH } from 'src/atoms';
import { organismsInterface } from 'src/interfaces';

function ListButtonH(props: organismsInterface.listButtonInterface): JSX.Element {
  const { sxList, listItems, divider = true } = props;
  return (
    <ListH sx={{ ...sxList }}>
      {listItems.map((item) => {
        const { onClick, sxButton, icon, text, sxText } = item;
        if (icon) {
          return (
            <ListItemButtonH key={text} onClick={onClick} sx={{ ...sxButton }} divider={divider}>
              {icon}
              <ListItemTextH text={text} sx={{ p: 1, ...sxText }} />
            </ListItemButtonH>
          );
        }
        return (
          <ListItemButtonH key={text} onClick={onClick} sx={{ ...sxButton }} divider={divider}>
            <ListItemTextH text={text} sx={{ p: 1, ...sxText }} />
          </ListItemButtonH>
        );
      })}
    </ListH>
  );
}

export default ListButtonH;
