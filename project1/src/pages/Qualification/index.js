import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="RGR Siddhanthi" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPcHLQr7yXRS3xTzz-fDmcbo_3WbimLnvW5-w8r5IJQ&s" />
        </ListItemAvatar>
        <ListItemText
          primary=" Sree Chaitanya Institute of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                72% CGPA
              </Typography>
              {" — Computer Science & Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri Aadarsh" src="https://www.w3schools.com/howto/img_avatar.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Trinity Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                81% CGPA
              </Typography>
              {" — Board of Intermediate Education"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sai SI" src="https://55knots.com.au/wp-content/uploads/2021/01/Zanj-Avatar-scaled.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sri Krishnaveni Talent High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                92% CGPA
              </Typography>
              {' — Secondary School Education '}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}