import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId:"us-east-1_04y3Gf6Uu",
    ClientId: "1g8td2chsvsc1tj2ck4ntikti9"
};

export default new CognitoUserPool(poolData);

