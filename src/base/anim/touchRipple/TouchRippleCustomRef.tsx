import TouchRipple from "@mui/material/ButtonBase/TouchRipple";


const TouchRippleCustomRef: React.FC<{ customRef: any }> = ({
    customRef
}) => (
    <TouchRipple ref={customRef} style={{ opacity: '.35' }} />
);
export default TouchRippleCustomRef;