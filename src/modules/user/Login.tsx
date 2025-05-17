import { AlertCircleIcon, Mail } from 'lucide-react-native';
import { View } from "react-native";
import { Button, ButtonText } from "@/components/ui/button"
import {
    FormControl,
    FormControlError,
    FormControlErrorText,
    FormControlErrorIcon,
    FormControlLabel,
    FormControlLabelText,
    FormControlHelper,
    FormControlHelperText,
} from "@/components/ui/form-control"
import { Input, InputField } from "@/components/ui/input"
import { VStack } from "@/components/ui/vstack"
import React from "react"
import { authContext } from '@/context/AuthContext';
export default function Login() {
    const { login } = React.useContext(authContext);
    const [errorMessage, setErrorMessage] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [email, setEmail] = React.useState("")
    const handleSubmit = async () => {
        if (!validateForm()) return;
        try {
            await login(email, password);
        } catch (e) {
            setErrorMessage('Error en login');
        }
    }
    const validateForm = () => {
        if (email.length === 0) {
            setErrorMessage("Email es obligatorio.");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage("Email no es válido.");
            return false;
        }
        if (password.length < 6) {
            setErrorMessage("La contraseña debe tener al menos 6 caracteres.");
            return false;
        }
        setErrorMessage("");
        return true;
    }

    return (

        <View className="gap-4">
            <VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4">
                <FormControl
                    isInvalid={errorMessage !== ""}
                    size="lg"
                    isDisabled={false}
                    isReadOnly={false}
                    isRequired={false}
                >
                    <FormControlLabel>
                        <FormControlLabelText>Email</FormControlLabelText>
                    </FormControlLabel>
                    <Input className="p-1 my-1 rounded-md" >
                        <InputField
                            type="text"
                            placeholder="example@example.com"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </Input>
                    <FormControlLabel>
                        <FormControlLabelText>Password</FormControlLabelText>
                    </FormControlLabel>
                    <Input className="p-1 my-1 rounded-md" >
                        <InputField
                            type="password"
                            placeholder="password"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </Input>
                    <FormControlError>
                        <FormControlErrorIcon as={AlertCircleIcon} />
                        <FormControlErrorText className='ml-1'>
                            {errorMessage}
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <Button className="self-end mt-4 rounded-md w-fit" size="sm" onPress={handleSubmit} >
                    <ButtonText>Submit</ButtonText>
                </Button>
            </VStack>
        </View>);
}