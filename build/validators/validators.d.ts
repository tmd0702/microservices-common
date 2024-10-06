declare const PasswordValidator: any;
declare const validator: any;
declare function isEmailValid(email: string): {
    valid: boolean;
    message: string;
};
declare function isUsernameValid(username: string): {
    valid: boolean;
    message: string;
};
declare function isPasswordValid(password: string): {
    valid: boolean;
    message: string;
};
declare function isOAuthSignUpDataValid(username: string): {
    valid: boolean;
    message: string;
};
declare function isSignUpDataValid(email: string, password: string, username: string): Promise<{
    valid: boolean;
    message: string;
}>;
