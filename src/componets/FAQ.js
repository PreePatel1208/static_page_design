import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ({title, detail}) {
    return (
        <Accordion
            style={{
                width: '60rem',
                color: '#000000',
                fontSize: 25,
                border:0,
                boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
                margin:"2rem"

            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography
                    style={{
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'left'
                    }}
                >
                    <svg width="20" height="20" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10.5" cy="14.5" r="7.5" fill="#FABF35" />
                        <path d="M6.34503 32.0129C5.26577 32.0129 4.25729 31.6412 3.53189 30.9512C2.61186 30.0842 2.16955 28.775 2.32878 27.3595L2.98341 21.6271C3.10726 20.5478 3.76189 19.1147 4.52268 18.3363L19.0484 2.96137C22.6754 -0.877949 26.4617 -0.984105 30.301 2.6429C34.1403 6.26991 34.2465 10.0562 30.6195 13.8955L16.0937 29.2703C15.3506 30.0665 13.9706 30.8096 12.8913 30.9867L7.19428 31.9596C6.8935 31.9773 6.62811 32.0129 6.34503 32.0129ZM24.7278 2.62521C23.3654 2.62521 22.18 3.47446 20.9769 4.74834L6.45118 20.1411C6.09733 20.5126 5.6904 21.3973 5.61963 21.9104L4.965 27.6426C4.89423 28.2265 5.03577 28.7042 5.35424 29.005C5.6727 29.3057 6.15041 29.4119 6.73427 29.3234L12.4313 28.3505C12.9444 28.262 13.7937 27.8019 14.1475 27.4303L28.6733 12.0554C30.8671 9.71999 31.6633 7.56148 28.4609 4.55372C27.0455 3.19138 25.8247 2.62521 24.7278 2.62521Z" fill="#292D32" />
                        <path d="M27.2062 16.8501C27.1708 16.8501 27.1178 16.8501 27.0824 16.8501C21.5622 16.3016 17.1214 12.1085 16.2721 6.62378C16.166 5.89838 16.6614 5.22606 17.3868 5.10221C18.1122 4.99605 18.7845 5.49145 18.9083 6.21685C19.5807 10.4985 23.0484 13.7893 27.3655 14.214C28.0909 14.2847 28.6216 14.9394 28.5509 15.6647C28.4624 16.337 27.8786 16.8501 27.2062 16.8501Z" fill="#292D32" />
                        <path d="M33.6895 37.7281H1.84258C1.11718 37.7281 0.515625 37.1266 0.515625 36.4012C0.515625 35.6758 1.11718 35.0742 1.84258 35.0742H33.6895C34.4149 35.0742 35.0164 35.6758 35.0164 36.4012C35.0164 37.1266 34.4149 37.7281 33.6895 37.7281Z" fill="#292D32" />
                    </svg>
                    <Typography
                        style={{
                            fontFamily: 'Ubuntu', fontWeight: '600', marginLeft: "1rem"
                        }}
                    >
                        {title}
                    </Typography>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography style={{ fontFamily: 'Ubuntu', fontWeight: '600', }}>
                  {detail}
                  </Typography>
            </AccordionDetails>
        </Accordion>
    );
}