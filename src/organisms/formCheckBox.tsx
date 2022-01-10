import React from 'react';
import { CheckBoxH, FormControlH } from 'src/atoms';
import { organismsInterface } from 'src/interfaces';

function FormCheckBox(props: organismsInterface.formCheckBoxInterface): JSX.Element {
  const { text, checked, onChange, sxForm } = props;
  return (
    <FormControlH
      sx={sxForm}
      label={`${text.split('_').join(' ')}`}
      control={<CheckBoxH id={text} checked={checked} onChange={onChange} />}
    />
  );
}

export default FormCheckBox;
