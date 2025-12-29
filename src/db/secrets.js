// If you need more information about configurations or implementing the sample code, visit the AWS docs:
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started.html

const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require("@aws-sdk/client-secrets-manager");

const client = new SecretsManagerClient({
  region: "ap-south-1",
});

const loadSecrets = async () => {
  const secret_name = process.env.SECRET_NAME;

  try {
    const command = new GetSecretValueCommand({
      SecretId: secret_name,
      VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
    });
    const response = await client.send(command);

    if (!response.SecretString) {
      throw new Error("SecretString is empty");
    }

    return JSON.parse(response.SecretString);
  } catch (error) {
    console.error("loadSecrets", error);
    // For a list of exceptions thrown, see
    // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
    throw error;
  }
};

module.exports = {
  loadSecrets,
};
