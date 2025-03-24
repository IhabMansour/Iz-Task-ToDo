var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Flex, Form, Input, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { MAIN_LINKS } from '../Constants/Links';
import { useAuth } from '../Contexts/AuthContext';
import AuthPagesLayout from '../Layout/AuthPagesLayout';
const { Title, Text } = Typography;
const SignIn = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const onFinish = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, password, }) {
        try {
            yield login(email, password);
            navigate(MAIN_LINKS.TODO);
        }
        catch (err) {
            console.error(err);
        }
    });
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (_jsx(AuthPagesLayout, { children: _jsxs(Flex, { vertical: true, justify: "center", align: "center", gap: "middle", style: { padding: '16px', width: '100%' }, children: [_jsx(Title, { children: t('SIGN_IN') }), _jsx(Text, { style: { textAlign: 'center' }, children: t('SIGN_IN_DESCRIPTION') }), _jsxs(Form, { name: "SignIn", style: { maxWidth: 'clamp(320px, 40vw, 512px)', width: '100%' }, onFinish: onFinish, onFinishFailed: onFinishFailed, autoComplete: "off", layout: "vertical", children: [_jsx(Form.Item, { label: t('EMAIL'), name: "email", layout: "vertical", rules: [
                                {
                                    required: true,
                                    type: 'email',
                                    message: t('EMAIL_ERROR_MESSAGE'),
                                },
                            ], children: _jsx(Input, {}) }), _jsx(Form.Item, { label: t('PASSWORD'), name: "password", layout: "vertical", rules: [
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
                            ], children: _jsx(Input.Password, {}) }), _jsx(Form.Item, { label: null, children: _jsx(Button, { type: "primary", htmlType: "submit", style: { width: '100%' }, children: t('SIGN_IN') }) })] }), _jsxs(Text, { children: [t('SIGN_UP_DONT_HAVE_AN_ACCOUNT'), ' ', _jsx(Link, { to: MAIN_LINKS.SIGN_UP, children: t('SIGN_UP') })] })] }) }));
};
export default SignIn;
