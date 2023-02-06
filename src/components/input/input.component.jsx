import { TextField } from "@mui/material";
const Input = ({ text, value, onChange }) => {
  return (
    <TextField
      id="filled-basic"
      label={text}
      variant="filled"
      value={value}
      onChange={onChange}
    />
  );
};
export default Input;
