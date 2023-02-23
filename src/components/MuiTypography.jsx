import { Typography } from "@mui/material";
import React from "react";

export default function MuiTypography() {
    return (
        <div style={{ width: "100%" }}>
            <Typography variant="h1">h1 heading</Typography>
            <Typography variant="h2">h2 heading</Typography>
            <Typography variant="h3">h3 heading</Typography>
            <Typography variant="h4">h4 heading</Typography>
            <Typography variant="h5">h5 heading</Typography>
            <Typography variant="h6">h6 heading</Typography>

            <Typography variant="subtitle1">Headline 1</Typography>
            <Typography variant="subtitle2">Headling 2</Typography>

            <Typography variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officia repudiandae, blanditiis eligendi eaque dignissimos
                quibusdam, placeat obcaecati autem ab suscipit velit nisi
                deleniti totam est.
            </Typography>
            <Typography variant="body2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officia repudiandae, blanditiis eligendi eaque dignissimos
                quibusdam, placeat obcaecati autem ab suscipit velit nisi
                deleniti totam est.
            </Typography>
            <Typography variant="caption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, at. Caption
            </Typography>
            <Typography variant="overline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, at. overline
            </Typography>
            <Typography variant="inherit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, at. inherit
            </Typography>
            <Typography variant="string">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, at. string
            </Typography>

            <Typography variant="h4" component="h1">
                Variant h4 component h1
            </Typography>
            <Typography paragraph={true}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem cum reiciendis cupiditate praesentium earum quos
                repudiandae commodi, ipsam, excepturi voluptate ratione,
                accusamus ullam? Nisi, sunt!
            </Typography>
            <Typography paragraph={true} gutterBottom={true}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem cum reiciendis cupiditate praesentium earum quos
                repudiandae commodi, ipsam, excepturi voluptate ratione,
                accusamus ullam? Nisi.
            </Typography>
            <Typography gutterBottom={true} align="left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem cum reiciendis cupiditate praesentium earum quos
                repudiandae commodi, ipsam, excepturi voluptate ratione,
                accusamus ullam? Nisi.
            </Typography>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem cum reiciendis cupiditate praesentium earum quos
                repudiandae commodi, ipsam, excepturi voluptate ratione,
                accusamus ullam? Nisi.
            </Typography>

            <Typography
                paragraph
                style={{
                    overflowX: "scroll",
                    whiteSpace: "nowrap",
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorem cum reiciendis cupiditate praesentium earum quos
                repudiandae commodi, ipsam, excepturi voluptate ratione,
                accusamus ullam? Nisi. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Animi, non? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Repellat quaerat, ut a itaque
                similique possimus eos velit eius accusamus excepturi sapiente
                porro adipisci repudiandae nisi quis? Magni debitis facere
                magnam velit eius. Reprehenderit iste alias accusamus voluptates
                reiciendis vel. Magni voluptas, qui tenetur nulla libero,
                aliquid quidem tempora ipsum totam ratione voluptates
                dignissimos amet magnam eos impedit inventore, laborum odio
                iure. Natus, quae. Sunt earum tempora totam harum asperiores
                accusantium quos, explicabo quibusdam expedita quae itaque
                dignissimos reprehenderit, deserunt dolorem tempore debitis
                aliquam porro? Odit totam animi quo, rerum quisquam, aut esse
                libero, vel ex repudiandae itaque eos dolorem est!
            </Typography>
        </div>
    );
}
