export const SignIn=(userCredentials)=>({
    type:"SIGN_IN"
})

export const SigninSuccess=(user)=>({
    type:"SIGNIN_SUCCESS",
    payload:user
})

export const SignInFailure=()=>({
    type:"SIGNIN_FAILURE"
})

export const SignOut=()=>({
    type:"SIGNOUT"
})