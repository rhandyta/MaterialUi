import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
} from "@mui/material";
import React from "react";

function MuiTable() {
    return (
        <>
            <Typography variant="h6">Table</Typography>
            <TableContainer
                component={Paper}
                sx={{
                    maxHeight: "320px",
                }}
            >
                <Table aria-labe="simple table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datas.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    "&:nth:child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default MuiTable;

const datas = [
    {
        id: 1,
        first_name: "Luelle",
        last_name: "Sollars",
        email: "lsollars0@biblegateway.com",
        gender: "Female",
        ip_address: "121.160.208.65",
    },
    {
        id: 2,
        first_name: "Tabbatha",
        last_name: "Cowherd",
        email: "tcowherd1@amazon.co.uk",
        gender: "Female",
        ip_address: "180.246.163.181",
    },
    {
        id: 3,
        first_name: "Franz",
        last_name: "Stranks",
        email: "fstranks2@free.fr",
        gender: "Genderqueer",
        ip_address: "3.237.54.224",
    },
    {
        id: 4,
        first_name: "Crissy",
        last_name: "Hansana",
        email: "chansana3@4shared.com",
        gender: "Female",
        ip_address: "252.29.28.184",
    },
    {
        id: 5,
        first_name: "Hedi",
        last_name: "Freeman",
        email: "hfreeman4@g.co",
        gender: "Female",
        ip_address: "135.147.156.190",
    },
    {
        id: 6,
        first_name: "Matthieu",
        last_name: "Mechan",
        email: "mmechan5@wunderground.com",
        gender: "Male",
        ip_address: "10.32.36.163",
    },
    {
        id: 7,
        first_name: "Olivero",
        last_name: "South",
        email: "osouth6@sohu.com",
        gender: "Male",
        ip_address: "96.8.143.212",
    },
    {
        id: 8,
        first_name: "Darby",
        last_name: "Hattigan",
        email: "dhattigan7@jalbum.net",
        gender: "Male",
        ip_address: "137.105.111.124",
    },
    {
        id: 9,
        first_name: "Odetta",
        last_name: "Kelleher",
        email: "okelleher8@nba.com",
        gender: "Female",
        ip_address: "224.127.230.68",
    },
    {
        id: 10,
        first_name: "Brooks",
        last_name: "Olivi",
        email: "bolivi9@cafepress.com",
        gender: "Male",
        ip_address: "147.213.180.109",
    },
];
