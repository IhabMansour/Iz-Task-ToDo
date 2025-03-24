import { Button, Flex, GetProp, message, Upload, UploadProps } from 'antd';
import { useState, useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import AvatarImage from '../assets/Avatar.png';
import { useTranslation } from 'react-i18next';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const UploadImage = () => {
  const { t } = useTranslation();

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Retrieve image from localStorage when the component mounts
  useEffect(() => {
    const savedImageUrl = localStorage.getItem('uploadedImage');
    if (savedImageUrl) {
      setImageUrl(savedImageUrl);
    }
  }, []);

  // Convert the image file to a Base64 URL
  const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  // Validate the file before uploading
  const beforeUpload = (file: FileType) => {
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
  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      return;
    }

    // Get the Base64 URL and store it in the local storage
    getBase64(info.file.originFileObj as FileType, (url) => {
      setImageUrl(url);
      localStorage.setItem('uploadedImage', url); // Store image URL in localStorage
    });
  };

  return (
    <Flex>
      <Upload
        name="avatar"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        <Flex gap="middle" align="center">
          <img
            src={imageUrl ? imageUrl : AvatarImage}
            alt="avatar"
            style={{ width: '40px', height: '40px', borderRadius: '50%' }}
          />
          <Button icon={<UploadOutlined />}>{t('UPLOAD')}</Button>
        </Flex>
      </Upload>
    </Flex>
  );
};

export default UploadImage;
