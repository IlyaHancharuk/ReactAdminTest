import { useMediaQuery } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, EmailField, UrlField } from "react-admin";
import MyUrlField from "./MyUrlField";

export const UserList = () => {
    // const theme = useTheme();
    // const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
    // const isMiddle = useMediaQuery(theme.breakpoints.down("md"));
    const isSmall = useMediaQuery('(max-width:900px)');
    const isMiddle = useMediaQuery('(max-width:1200px)');
    return (
        <List>
            { isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                isMiddle ? (
                    <Datagrid rowClick="edit">
                        <TextField source="id" />
                        <TextField source="name" />
                        <EmailField source="email" />
                        <TextField source="phone" />
                        <UrlField source="website" />
                        <TextField source="company.name" />
                    </Datagrid>
                ) : (
                    <Datagrid rowClick="edit">
                        <TextField source="id" />
                        <TextField source="name" />
                        <TextField source="username" />
                        <EmailField source="email" />
                        <TextField source="address.street" />
                        <TextField source="phone" />
                        <MyUrlField source="website" />
                        <TextField source="company.name" />
                    </Datagrid>
                )
            )}
        </List>
    )
}
