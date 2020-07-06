import {LoginActionType} from "../Action-Types/login.actiontype";

export function inputUser(userIn){
    return {type:LoginActionType.SET_USER,
            user: userIn
    };
}

export function inputPassword(passwordIn){
    return {type:LoginActionType.SET_PASSWORD,
            password: passwordIn
    };
}

export function loggedIn(isLoggedin){
    return {type:LoginActionType.LOGGED_IN,
            isLoggedIn: isLoggedin
    };
}

export function setJwt(Jwt){
    return {type:LoginActionType.SET_JWT,
            jwt:Jwt
    };
}

