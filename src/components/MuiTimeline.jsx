import React from "react";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineSeparator,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from "@mui/lab";

function MuiTimeline() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent color="brown">
                    09.30
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="success" variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>City A</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="brown">
                    10.30
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="success" variant="outlined" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>City B</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="brown">
                    11.30
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="success" variant="outlined" />
                </TimelineSeparator>
                <TimelineContent>City C</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

export default MuiTimeline;
