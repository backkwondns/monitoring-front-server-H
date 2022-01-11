import React from 'react';
import { Box, Popper } from '@mui/material';
import { ButtonH } from 'src/atoms';
import { FilterAlt, Dehaze } from '@mui/icons-material';
import { appLayoutInterface } from 'src/interfaces';
import FormCheckBox from 'src/organisms/formCheckBox';

function AppHead(props: appLayoutInterface.appHeadInterface): JSX.Element {
  const { onOpenSide, openSide, onFilter, openFilter, allList, selectedChart, onChange } = props;
  const open = Boolean(openFilter);
  const id = open ? 'simple-popper' : undefined;
  const typeList = ['CPU', 'MEM', 'FAN', 'TEMP'];
  return (
    <Box
      sx={{
        position: 'sticky',
        top: '0px',
        display: 'flex',
        flexDirection: `${openSide ? 'row-reverse' : 'column'}`,
        flexWrap: 'wrap',
        alignContent: 'space-between',
        height: '36px',
        borderBottom: '1px solid gray',
        background: '#e8e4f7',
        zIndex: 10000,
      }}
    >
      {openSide ? null : <ButtonH content={<Dehaze color="error" />} onClick={onOpenSide} />}
      <ButtonH content={<FilterAlt color="secondary" />} onClick={onFilter} />
      <Popper id={id} open={open} anchorEl={openFilter}>
        <Box sx={{ border: 1, p: 1, backgroundColor: 'background.paper' }}>
          {typeList.map((type) => {
            return (
              <FormCheckBox
                key={type}
                text={type}
                checked={allList[type].every((sensor: string) => selectedChart[sensor])}
                indeterminate={allList[type].some(
                  (sensor: string) => selectedChart[sensor] !== selectedChart[allList[type][0]],
                )}
                onChange={onChange}
              />
            );
          })}
        </Box>
      </Popper>
    </Box>
  );
}
export default AppHead;
