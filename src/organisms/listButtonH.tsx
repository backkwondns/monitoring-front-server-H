import React from 'react';
import { ListH, ListItemButtonH, ListItemTextH } from 'src/atoms';
import { organismsInterface } from 'src/interfaces';

function ListButtonH(props: organismsInterface.listButtonInterface): JSX.Element {
  const { listItems, divider = true } = props;
  return (
    <ListH>
      {listItems.map((item) => {
        return (
          <ListItemButtonH onClick={item.onClick} sx={{ ...item.sxButton }} divider={divider}>
            {item.icon}
            <ListItemTextH text={item.text} sx={{ p: 1, ...item.sxText }} />
          </ListItemButtonH>
        );
      })}
    </ListH>
  );
}

export default ListButtonH;
