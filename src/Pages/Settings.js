import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Card, Flex, Form, Input, Spin, Typography, } from 'antd';
import { useTranslation } from 'react-i18next';
import UploadImage from '../Components/UploadImage';
import { useAuth } from '../Contexts/AuthContext';
import useIsMobile from '../Hooks/UseIsMobile';
const { Title, Text } = Typography;
const Settings = () => {
    const { user, updateUser } = useAuth();
    const { t } = useTranslation();
    const isMobileScreen = useIsMobile();
    const onFinish = ({ name, newPassword, }) => {
        if ((user === null || user === void 0 ? void 0 : user.name) !== name || newPassword) {
            updateUser(name, newPassword);
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    if (!user) {
        return (_jsx(Flex, { justify: "center", align: "center", gap: "middle", style: { height: '80vh' }, children: _jsx(Spin, { size: "large" }) }));
    }
    return (_jsxs(Flex, { vertical: true, gap: "24px", style: {
            padding: 'clamp(16px, 3vw, 50px)',
            margin: '0 auto',
        }, children: [_jsx(Title, { level: 2, children: t('SETTINGS') }), _jsxs(Card, { actions: [
                    _jsx(Button, { type: "primary", htmlType: "submit", form: "settings-form-name", style: {
                            width: isMobileScreen ? '100%' : 'fit-content',
                            margin: '12px 0',
                            textAlign: 'right',
                        }, children: t('SAVE') }),
                ], styles: { actions: { padding: '0 24px' } }, children: [_jsx(Text, { children: t('PERSONAL_INFORMATION') }), _jsx(Flex, { style: { margin: '24px 0' }, children: _jsx(UploadImage, {}) }), _jsx(Form, { id: "settings-form-name", name: "Settings-name", style: { maxWidth: 'clamp(320px, 40vw, 512px)', width: '100%' }, onFinish: onFinish, onFinishFailed: onFinishFailed, layout: "vertical", initialValues: { name: user === null || user === void 0 ? void 0 : user.name }, children: _jsx(Form.Item, { label: t('FULL_NAME'), name: "name", layout: "vertical", rules: [
                                {
                                    required: true,
                                    message: t('NAME_ERROR_MESSAGE'),
                                },
                            ], children: _jsx(Input, {}) }) })] }), _jsxs(Card, { actions: [
                    _jsx(Button, { type: "primary", htmlType: "submit", form: "settings-form-password", style: {
                            width: isMobileScreen ? '100%' : 'fit-content',
                            margin: '12px 0',
                            textAlign: 'right',
                        }, children: t('SAVE') }),
                ], styles: { actions: { padding: '0 24px' } }, children: [_jsx(Text, { children: t('PASSWORD') }), _jsx(Form, { id: "settings-form-password", name: "Settings-password", style: { maxWidth: 'clamp(320px, 40vw, 512px)', width: '100%' }, onFinish: onFinish, onFinishFailed: onFinishFailed, layout: "vertical", initialValues: { name: user === null || user === void 0 ? void 0 : user.name }, children: _jsx(Form.Item, { label: t('NEW_PASSWORD'), name: "newPassword", layout: "vertical", rules: [
                                {
                                    required: true,
                                    message: t('PASSWORD_ERROR_MESSAGE'),
                                },
                                {
                                    min: 8,
                                    max: 50,
                                    message: t('PASSWORD_LENGTH_ERROR_MESSAGE'),
                                },
                                {
                                    pattern: /^(?=.*[a-zA-Z])(?=.*[^\w\s]).{8,50}$/,
                                    message: t('PASSWORD_FORMAT_ERROR_MESSAGE'),
                                },
                            ], style: {
                                maxWidth: 'clamp(320px, 40vw, 512px)',
                                width: '100%',
                                marginTop: '24px',
                            }, children: _jsx(Input.Password, {}) }) })] })] }));
};
export default Settings;
