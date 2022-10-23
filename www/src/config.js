// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "63jfqh31kmbb71nqjq4n0ebnug",     // CognitoClientID
  "api_base_url": "https://0z25kg0p4c.execute-api.ap-northeast-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-stack-refarch.auth.ap-northeast-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1lwalnsjz40ze.amplifyapp.com"                                      // AmplifyURL
};

export default config;
