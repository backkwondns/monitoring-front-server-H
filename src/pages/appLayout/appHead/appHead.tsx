import React from 'react';
import { Box, Dialog, DialogActions, DialogContent, FormControl, Popper } from '@mui/material';
import { ButtonH, InputTextH, PrintH } from 'src/atoms';
import { FilterAlt, Dehaze } from '@mui/icons-material';
import { appLayoutInterface } from 'src/interfaces';
import FormCheckBox from 'src/organisms/formCheckBox';
import { Form } from 'formik';

function AppHead(props: appLayoutInterface.appHeadInterface): JSX.Element {
  const {
    onOpenSide,
    openSide,
    onFilter,
    openFilter,
    openDialog,
    onCloseLogin,
    allList,
    selectedChart,
    onChange,
    formik,
    isLogin,
  } = props;
  const openPopper = Boolean(openFilter);
  const id = openPopper ? 'simple-popper' : undefined;
  const typeList = ['CPU', 'MEM', 'FAN', 'TEMP'];
  const onPressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      formik.handleSubmit();
    }
  };
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
      <Box sx={{ display: 'flex', alignItems: 'center', pr: 1 }}>
        <ButtonH content={<FilterAlt color="secondary" />} onClick={onFilter} />
        <Popper id={id} open={openPopper} anchorEl={openFilter}>
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
        {isLogin ? (
          <PrintH text="완료" />
        ) : (
          <>
            <ButtonH content={<PrintH text="Login" color="secondary" />} onClick={onCloseLogin} />
            <Dialog open={openDialog} onClose={onCloseLogin}>
              <DialogContent>
                <InputTextH
                  label="ID"
                  color="warning"
                  fullWidth
                  variant="standard"
                  id="id"
                  name="id"
                  value={formik.values.id}
                  onChange={formik.handleChange}
                  error={formik.touched.id && Boolean(formik.errors.id)}
                  helperText={formik.touched.id && formik.errors.id}
                />
                <InputTextH
                  label="Password"
                  type="password"
                  fullWidth
                  variant="standard"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  onKeyPress={onPressEnter}
                />
              </DialogContent>
              <DialogActions>
                <ButtonH content="cancel" onClick={onCloseLogin} />
                <ButtonH content="login" type="submit" onClick={formik.handleSubmit} />
              </DialogActions>
            </Dialog>
          </>
        )}
      </Box>
    </Box>
  );
}
export default AppHead;
