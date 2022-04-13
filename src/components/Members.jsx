import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Menu from "./Menu"

export default function AlignItemsList({members}) {  
    console.log(members);
  return (
    <List sx={{ width: '100%', maxWidth: 330, bgcolor: 'background.paper' }}>
    <Divider variant="inset" component="li" />
      {members.map((member) => 
      <div key={member.id}><ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={member.name + "   "+ member.rol.toUpperCase()}
          secondary={
            <React.Fragment>
              <div className=''>
              <Typography
                sx={{ display: 'inline'}}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {member.email}
              </Typography>
              </div>
            </React.Fragment>
          }
        />
        <div className='flex items-center'>
        <Menu/>
        </div>
      </ListItem>
      
      <Divider variant="inset" component="li" /></div>
      )}
    </List>
  );
}