import React from 'react'
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DoorbellIcon from '@mui/icons-material/Doorbell';
import MessageIcon from '@mui/icons-material/Message';
import { Box } from '@mui/material';
import theme from '../Theme/theme';
export const DashIcons = () => {
  return (
<React.Fragment>
<Box sx={{border:"1px solid black",
padding:"50px 30px",
display:"flex",
gap:"40px",
color:theme.palette.Blog.main,
cursor:"pointer"}}>
<HomeMaxIcon/>
<SettingsInputComponentIcon />
<DoorbellIcon/>
<MessageIcon/>
</Box>
</React.Fragment>
  )
}
