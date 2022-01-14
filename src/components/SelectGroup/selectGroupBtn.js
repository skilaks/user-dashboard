import React from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from "prop-types";
//*******************Style *******************************
const Group = withStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: 'center',
    fontFamily:'Yekan'
  },
  checked: {},
})((props) => <RadioGroup  {...props} />);
const Form = withStyles({
  root: {
    display: "flex",
    padding: 'inherit'
  }
})((props) => <FormControl  {...props} />);
const Label = withStyles({
  root: {
    fontFamily:'"Yekan", "Helvetica", "Arial", sans-serif !important',
    ' & span' : {
      fontFamily:'"Yekan", "Helvetica", "Arial", sans-serif !important',
    }
  }
})((props) => <FormControlLabel  {...props} />);
//*********************End Style******************************/
export default function SelectGroupBtn(props) {
  const { Radios, Value ,...rest } = props;
  
  const [value, setValue] = React.useState('all');

  const setValueHandler = (value) =>{
    props.Value(value);
  }
  return (
    <Form>
      <Group aria-label="gender" name="gender1" value={value} onChange={e => { Value(e.target.value); setValue(e.target.value) }} {...rest}>
        {Radios.map((value, key) =>

          <Label value={value.value} disabled={value.disabled} control={<Radio />} label={value.label} key={key} />
        )}
      </Group>
    </Form>
  );
}
SelectGroupBtn.propTypes = {
  Radios: PropTypes.array,
  Radio: PropTypes.object,
  Value: PropTypes.func
}