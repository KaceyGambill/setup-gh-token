const core = require('@actions/core');
const github = require('@actions/github');

try {

  const gh_app_token = core.getInput('GH_APP_TOKEN', {required: true});
  
  const decoded = JSON.parse(Buffer.from(gh_app_token, 'base64').toString('utf8'));
  
  const appId = decoded['appId'];
  const installationId = decoded['installationId'];
  const privateKey = decoded['privateKey'];

  const { createAppAuth } = require("@octokit/auth-app");
  
  const auth = createAppAuth({
    appId: appId,
    privateKey: privateKey
   });

  appAuth()
  
  async function appAuth () {
    const installationAuthentication = await auth({
      type: "installation",
      installationId: installationId,
    });
    result = await installationAuthentication
    ghsToken = result['token']

    core.setOutput("GH_TOKEN", ghsToken);
  }

} catch (error) {
  core.setFailed(error.message);
}
