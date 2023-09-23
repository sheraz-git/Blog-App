import React from "react";
import ButtonComp from "./ButtonComp";
import { Box } from "@mui/material";
import Input from "./Input";
import Image from "./Image";
import theme from "../Theme/theme";
import CollectionsIcon from "@mui/icons-material/Collections";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import EventNoteIcon from "@mui/icons-material/EventNote";
const DashHeader = ({ values }) => {
  return (
    <React.Fragment>
      <Box sx={{ padding: "20px" }}>
        <Box
          sx={{
            border: "3px solid white",
            borderRadius: "15px",
            background: theme.palette.Blog.black,
            display: "flex",
          }}
        >
          <Box sx={{ padding: "20px 10px" }}>
            <Image src={values.image} />
          </Box>
          <Box>
            <Box sx={{ borderLeft: "2px solid white", padding: "20px 25px" }}>
              <Input padding="20px 175px" placeholder={"search something"} />
              <Box sx={{ marginTop: "20px", display: "flex", gap: "14px" }}>
                <ButtonComp
                  label={values.photo}
                  icon={<CollectionsIcon />}
                  gap="4px"
                />
                <ButtonComp
                  label={values.video}
                  icon={<MusicVideoIcon />}
                  gap="4px"
                />
                <ButtonComp
                  label={values.location}
                  icon={<AddLocationIcon />}
                  gap="4px"
                />
                <ButtonComp
                  label={values.schedule}
                  icon={<EventNoteIcon />}
                  gap="4px"
                />
                <ButtonComp label={values.share} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default DashHeader;
