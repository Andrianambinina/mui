import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={350}>
        <Typography variant="h6" fontWeight={100}>
          Online friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.generated.photos/RhO_H5yuJJzt9mzU5Wbw5WkjRHYQu3TWSS2zNOmYwjY/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzk4NTU4LmpwZw.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.generated.photos/LE8mrWpFE3h8a23WC2cg3avXTlfemp-q7aqCctj0dlI/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDcyNzc0LmpwZw.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.generated.photos/z08ZE1WBNdK4vkQtDqBVwbDG4wah-QJrINcnWi-Kya8/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTg0MDkxLmpwZw.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://randomuser.me/api/portraits/women/8.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.generated.photos/GWf4GDbILuhMVZL1IE_5obg2A2oRy3zVPOt-wLXoEqQ/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTMwOTg1LmpwZw.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest photo
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1242764/pexels-photo-1242764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/2356071/pexels-photo-2356071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/4050284/pexels-photo-4050284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://images.pexels.com/photos/460237/pexels-photo-460237.jpeg?h=350&auto=compress&cs=tinysrgb"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://images.unsplash.com/photo-1496081081095-d32308dd6206?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=dd302358c7e18c27c4086e97caf85781"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
