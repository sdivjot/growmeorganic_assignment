import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

// const data=[
// 	{
//   	"department": "customer_service",
//   	"sub_departments": [
//     	"support",
//     	"customer_success"
//   	]
// 	},
// 	{
//   	"department": "design",
//   	"sub_departments": [
//     	"graphic_design",
//     	"product_design",
//     	"web_design"
//   	]
// 	}
//   ]


export default function Component2Checkbox() {
    const [checked11, setChecked11] = React.useState(true);
    const [checked12, setChecked12] = React.useState(false);

    const handleChange11 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked11(event.target.checked);
    };

    const handleChange12 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked12(event.target.checked);
    };

    const [checked21, setChecked21] = React.useState(true);
    const [checked22, setChecked22] = React.useState(false);
    const [checked23, setChecked23] = React.useState(false);

    const handleChange21 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked21(event.target.checked);
    };

    const handleChange22 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked22(event.target.checked);
    };

    const handleChange23 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked23(event.target.checked);
    };

    const [checked31, setChecked31] = React.useState(false);
    const [checked32, setChecked32] = React.useState(false);

    const handleChange31 = () => {
        setChecked11(!checked31);
        setChecked12(!checked31);
        setChecked31(!checked31);
    };

    const handleChange32 = () => {
        setChecked21(!checked32);
        setChecked22(!checked32);
        setChecked23(!checked32);
        setChecked32(!checked32);
    }

    const children1 = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label="Child 1"
                control={<Checkbox checked={checked11} onChange={handleChange11} />}
            />
            <FormControlLabel
                label="Child 2"
                control={<Checkbox checked={checked12} onChange={handleChange12} />}
            />
        </Box>
    );

    const children2 = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label="Child 1"
                control={<Checkbox checked={checked21} onChange={handleChange21} />}
            />
            <FormControlLabel
                label="Child 2"
                control={<Checkbox checked={checked22} onChange={handleChange22} />}
            />
            <FormControlLabel
                label="Child 3"
                control={<Checkbox checked={checked23} onChange={handleChange23} />}
            />
        </Box>
    );

    return (
        <div>
            <FormControlLabel
                label="Customer Service"
                control={
                    <Checkbox
                        checked={checked11 && checked12}
                        onChange={handleChange31}
                    />
                }
            />
            {children1}
            <FormControlLabel
                label="Design"
                control={
                    <Checkbox
                        checked={checked21 && checked22 && checked23}
                        onChange={handleChange32}
                    />
                }
            />
            {children2}
        </div>
    );
}