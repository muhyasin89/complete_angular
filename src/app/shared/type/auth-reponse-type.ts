export interface AuthResponseData {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiredIn: string,
    localId: string,
    registered?: boolean;
}