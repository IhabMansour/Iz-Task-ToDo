import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Flex, message, Upload } from 'antd';
import { useState, useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import AvatarImage from '../assets/Avatar.png';
import { useTranslation } from 'react-i18next';
const UploadImage = () => {
    const { t } = useTranslation();
    const [imageUrl, setImageUrl] = useState(null);
    // Retrieve image from localStorage when the component mounts
    useEffect(() => {
        const savedImageUrl = localStorage.getItem('uploadedImage');
        if (savedImageUrl) {
            setImageUrl(savedImageUrl);
        }
    }, []);
    // Convert the image file to a Base64 URL
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };
    // Validate the file before uploading
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    };
    // Handle file change and store the Base64 image URL in localStorage
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            return;
        }
        // Get the Base64 URL and store it in the local storage
        getBase64(info.file.originFileObj, (url) => {
            setImageUrl(url);
            localStorage.setItem('uploadedImage', url); // Store image URL in localStorage
        });
    };
    return (_jsx(Flex, { children: _jsx(Upload, { name: "avatar", showUploadList: false, beforeUpload: beforeUpload, onChange: handleChange, children: _jsxs(Flex, { gap: "middle", align: "center", children: [_jsx("img", { src: imageUrl ? imageUrl : AvatarImage, alt: "avatar", style: { width: '40px', height: '40px', borderRadius: '50%' } }), _jsx(Button, { icon: _jsx(UploadOutlined, {}), children: t('UPLOAD') })] }) }) }));
};
export default UploadImage;
