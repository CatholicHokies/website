import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Link from "next/link"

export default function SimpleAccordian(props: any) {
    // title, hrefs, and names

    const title = props.title
    const hrefs = props.hrefs
    const names = props.names

    var render = false;

    if (title != null && hrefs != null && names != null){
        render = true
    }

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{title}</Typography>
            </AccordionSummary>

            {render && names.map((name: string, index : number) => (
                <AccordionDetails key={index}>
                    <Typography
                        component={Link}
                        sx={{ textDecoration: "none" }}
                        href={hrefs[index]}>
                        {name}
                    </Typography>
                </AccordionDetails>
            ))}

        </Accordion>
    )
}
