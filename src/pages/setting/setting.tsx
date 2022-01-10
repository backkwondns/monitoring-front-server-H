import React from 'react';
import { settingInterface } from 'src/interfaces';
import Box from '@mui/material/Box';
import FormCheckBox from 'src/organisms/formCheckBox';

function Setting(props: settingInterface.settingInterface): JSX.Element {
  const { allList, selectedChart, onChange } = props;
  const typeList = ['CPU', 'MEM', 'FAN', 'TEMP'];
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 1 }}>
      {typeList.map((type) => {
        return (
          <Box key={type}>
            <FormCheckBox
              text={type}
              checked={allList[type].every((sensor: string) => selectedChart[sensor])}
              onChange={onChange}
            />
            {Object.keys(selectedChart).map((key) =>
              key.split('_')[0] === type ? (
                <Box key={key}>
                  <FormCheckBox sxForm={{ pl: 3 }} text={key} checked={selectedChart[key]} onChange={onChange} />
                </Box>
              ) : null,
            )}
          </Box>
        );
      })}
    </Box>
  );
}

export default Setting;
