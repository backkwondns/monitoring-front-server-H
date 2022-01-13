import React from 'react';
import AppHead from 'src/pages/appLayout/appHead/appHead';
import { MobXProviderContext, observer } from 'mobx-react';
import { axiosPost } from 'src/libs/axios';
import { useFormik } from 'formik';
import { loginInterface } from 'src/interfaces';

function AppHeadContainer(): JSX.Element {
  const rootStore = React.useContext(MobXProviderContext);
  const openSide = rootStore.appLayoutStore.getOpen;
  const openFilter = rootStore.appLayoutStore.getFilterOpen;
  const isLogin = rootStore.appLayoutStore.getLogin;
  const onOpenSide = () => {
    rootStore.appLayoutStore.toggleOpen();
  };
  const onFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    rootStore.appLayoutStore.setFilterOpen(event.currentTarget);
  };

  const openDialog = rootStore.appLayoutStore.getOpenDialog;

  const onCloseLogin = () => {
    rootStore.appLayoutStore.toggleOpenDialog();
  };

  const allList = rootStore.settingStore.getAllList;
  const selectedChart = rootStore.settingStore.getSelectedChart;
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    rootStore.settingStore.setSelectedChart(event.target.id);
  };

  const formik = useFormik({
    initialValues: {
      id: '',
      password: '',
    },
    validationSchema: loginInterface.loginSchema,
    onSubmit: async (data: loginInterface.loginInterface) => {
      const result = await axiosPost({
        url: `login/auth`,
        data,
      });
      if (result.status === 200) {
        rootStore.appLayoutStore.toggleLogin();
        rootStore.appLayoutStore.toggleOpenDialog();
        rootStore.appLayoutStore.setId(data.id);
        localStorage.setItem('profile', result.data.token);
        await rootStore.settingStore.setChartFromServer();
      } else {
        alert('Wrong ID or Password!');
      }
    },
  });

  return (
    <AppHead
      onOpenSide={onOpenSide}
      openSide={openSide}
      onFilter={onFilter}
      openFilter={openFilter}
      openDialog={openDialog}
      onCloseLogin={onCloseLogin}
      allList={allList}
      selectedChart={selectedChart}
      onChange={onChange}
      formik={formik}
      isLogin={isLogin}
    />
  );
}

export default observer(AppHeadContainer);
