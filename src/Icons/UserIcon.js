import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
const UserIcon = ({ color = '#474747' }) => {
    return (_jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M12.6668 14V12.6667C12.6668 11.9594 12.3859 11.2811 11.8858 10.781C11.3857 10.281 10.7074 10 10.0002 10H6.00016C5.29292 10 4.61464 10.281 4.11454 10.781C3.61445 11.2811 3.3335 11.9594 3.3335 12.6667V14M10.6668 4.66667C10.6668 6.13943 9.47292 7.33333 8.00016 7.33333C6.5274 7.33333 5.3335 6.13943 5.3335 4.66667C5.3335 3.19391 6.5274 2 8.00016 2C9.47292 2 10.6668 3.19391 10.6668 4.66667Z", stroke: color, strokeWidth: "1.33", strokeLinecap: "round", strokeLinejoin: "round" }) }));
};
export default memo(UserIcon);
