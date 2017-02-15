export function detect(token) {
    return {
        type: "login",
        token: token
    };
}