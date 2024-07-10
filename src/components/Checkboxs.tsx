import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Checkboxes() {
  const [checked, setChecked] = React.useState([false, false, false, false, false]);
  const [checked2, setChecked2] = React.useState([false, false, false, false, false, false, false]);

  const handleParentChange = (setChecked: React.Dispatch<React.SetStateAction<boolean[]>>, checked: boolean[]) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = Array(checked.length).fill(event.target.checked);
    setChecked(newChecked);
  };

  const handleChildChange = (index: number, setChecked: React.Dispatch<React.SetStateAction<boolean[]>>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(prev => {
      const newChecked = [...prev];
      newChecked[index] = event.target.checked;
      return newChecked;
    });
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Agricultural"
        control={<Checkbox checked={checked[0]} onChange={handleChildChange(0, setChecked)} />}
      />
      <FormControlLabel
        label="Crops"
        control={<Checkbox checked={checked[1]} onChange={handleChildChange(1, setChecked)} />}
      />
      <FormControlLabel
        label="Farming, animals & Livestock"
        control={<Checkbox checked={checked[2]} onChange={handleChildChange(2, setChecked)} />}
      />
      <FormControlLabel
        label="Fisheries & Aquaculture"
        control={<Checkbox checked={checked[3]} onChange={handleChildChange(3, setChecked)} />}
      />
      <FormControlLabel
        label="Ranching"
        control={<Checkbox checked={checked[4]} onChange={handleChildChange(4, setChecked)} />}
      />
    </Box>
  );

  const children2 = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Accounting & Accounting Services"
        control={<Checkbox checked={checked2[0]} onChange={handleChildChange(0, setChecked2)} />}
      />
      <FormControlLabel
        label="Auctions"
        control={<Checkbox checked={checked2[1]} onChange={handleChildChange(1, setChecked2)} />}
      />
      <FormControlLabel
        label="Business Services General"
        control={<Checkbox checked={checked2[2]} onChange={handleChildChange(2, setChecked2)} />}
      />
      <FormControlLabel
        label="Call Centers & Business Centers"
        control={<Checkbox checked={checked2[3]} onChange={handleChildChange(3, setChecked2)} />}
      />
      <FormControlLabel
        label="Creative Planning"
        control={<Checkbox checked={checked2[4]} onChange={handleChildChange(4, setChecked2)} />}
      />
      <FormControlLabel
        label="Commercial Painting"
        control={<Checkbox checked={checked2[5]} onChange={handleChildChange(5, setChecked2)} />}
      />
      <FormControlLabel
        label="Debt Collection"
        control={<Checkbox checked={checked2[6]} onChange={handleChildChange(6, setChecked2)} />}
      />
    </Box>
  );

  return (
    <>
      <div>
        <FormControlLabel
          label="Agricultural and Fishing"
          control={
            <Checkbox
              checked={checked.every(Boolean)}
              indeterminate={checked.some(Boolean) && !checked.every(Boolean)}
              onChange={handleParentChange(setChecked, checked)}
            />
          }
        />
        {children}
      </div>
      <div>
        <FormControlLabel
          label="Business Services"
          control={
            <Checkbox
              checked={checked2.every(Boolean)}
              indeterminate={checked2.some(Boolean) && !checked2.every(Boolean)}
              onChange={handleParentChange(setChecked2, checked2)}
            />
          }
        />
        {children2}
      </div>
    </>
  );
}
