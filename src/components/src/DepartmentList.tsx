import React, { useState } from 'react';
import { Collapse, List, ListItem, ListItemText, ListItemIcon, IconButton } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const departments = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"]
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"]
  }
];

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const handleClick = (department: string) => {
    setOpen(prevState => ({ ...prevState, [department]: !prevState[department] }));
  };

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      {departments.map(dept => (
        <div key={dept.department}>
          <ListItem button onClick={() => handleClick(dept.department)}>
            <ListItemText primary={dept.department} />
            <ListItemIcon>
              <IconButton edge="end" size="small">
                {open[dept.department] ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItemIcon>
          </ListItem>
          <Collapse in={open[dept.department]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dept.sub_departments.map(sub => (
                <ListItem key={sub} sx={{ pl: 4 }}>
                  <ListItemText primary={sub} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default DepartmentList;
