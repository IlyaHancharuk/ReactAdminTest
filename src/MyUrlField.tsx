import { FieldProps, useRecordContext } from "react-admin"
import { Link } from "@mui/material"
import LaunchIcon from "@mui/icons-material/Launch"

const MyUrlField = ({ source }: FieldProps) => {
    const record = useRecordContext();
    return record && source ? (
        <Link href={record[source]} target="_blank" sx={{ textDecoration: "none" }}>
            {record[source]}
            <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
        </Link>
    ) : null
}

export default MyUrlField
