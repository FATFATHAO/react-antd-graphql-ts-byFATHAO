import { gql } from "@apollo/client";

export const GET_USER = gql`
    query GetUserByEmail($email:String!){
        getUserByEmail(email:$email){
            email
            password
        }
    }
`;

export const ADD_USER = gql`
    mutation AddUser($createUserInput: CreateUserInput!){
        addUser(createUserInput:$createUserInput){
            email
            password
        }
    }

`;