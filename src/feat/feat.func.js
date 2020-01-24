/* eslint-disable no-unused-vars */
function githubCommitActivity({ color = 'ff69b4', logo = 'Github', logoColor = 'ff69b4', style = 'popout-square' }) {
  const { GITHUB_REPO, GITHUB_USER, SHIELDS_URL, TWITTER_USER } = this.options;
  const name = 'GitHub commit activity';
  const prefix = '/github/commit-activity/m';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}.svg?color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}

function githubRepoSize({
  label = 'github%20repo%20size',
  color = 'ff69b4',
  logo = 'Github',
  logoColor = 'ff69b4',
  style = 'popout-square'
}) {
  const { GITHUB_REPO, GITHUB_USER, SHIELDS_URL, TWITTER_USER } = this.options;
  const name = 'GitHub repo size';
  const prefix = '/github/repo-size';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}
function githubPackageVersionBranch({
  branch = 'master',
  label = 'github%20package.json%20version%40master',
  color = 'ff69b4',
  logo = 'Github',
  logoColor = 'ff69b4',
  style = 'popout-square'
}) {
  const { GITHUB_REPO, GITHUB_USER, SHIELDS_URL, TWITTER_USER } = this.options;
  const name = 'GitHub package.json version (branch)';
  const prefix = '/github/package-json/v';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}/${branch}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}

function travisComBranch({
  branch = 'master',
  label = 'Travis%20CI',
  color = 'ff69b4',
  logo = 'Travis%20CI',
  logoColor = 'ff69b4',
  style = 'popout-square'
}) {
  const { GITHUB_REPO, GITHUB_USER, SHIELDS_URL, TWITTER_USER } = this.options;
  const name = 'Travis (.com) branch';
  const prefix = '/travis/com';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}/${branch}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}

function githubFollowers({
  label = 'github%20followers',
  color = 'ff69b4',
  logo = 'Github',
  logoColor = 'ff69b4',
  style = 'popout-square'
}) {
  const { GITHUB_REPO, GITHUB_USER, SHIELDS_URL, TWITTER_USER } = this.options;
  const name = 'GitHub followers';
  const prefix = '/github/followers';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}

function twitterFollowers({
  label = 'follow%20%40',
  color = 'ff69b4',
  logo = 'Twitter',
  logoColor = 'ff69b4',
  style = 'popout-square'
}) {
  const { GITHUB_REPO, GITHUB_USER, SHIELDS_URL, TWITTER_USER } = this.options;
  const name = 'Twitter Follow';
  const prefix = '/twitter/follow';
  const reslut = `${SHIELDS_URL}${prefix}/${TWITTER_USER}.svg?label=${label}${TWITTER_USER}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}

function githubContributors({
  label = 'github%20contributors',
  color = 'ff69b4',
  logo = 'Github',
  logoColor = 'ff69b4',
  style = 'popout-square'
}) {
  const { GITHUB_REPO, GITHUB_USER, SHIELDS_URL, TWITTER_USER } = this.options;
  const name = 'GitHub contributors';
  const prefix = '/github/contributors-anon';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}

function githubLastCommit({
  label = 'github%20last%20commit%40master',
  color = 'ff69b4',
  logo = 'Github',
  logoColor = 'ff69b4',
  style = 'popout-square'
}) {
  const { GITHUB_REPO, GITHUB_USER, SHIELDS_URL, TWITTER_USER } = this.options;
  const name = 'GitHub last commit';
  const prefix = '/github/last-commit';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}

function githubLastCommitBranch({
  branch = 'master',
  label = 'github%20last%20commit%40master',
  color = 'ff69b4',
  logo = 'Github',
  logoColor = 'ff69b4',
  style = 'popout-square'
}) {
  const { GITHUB_REPO, GITHUB_USER, SHIELDS_URL, TWITTER_USER } = this.options;
  const name = 'GitHub last commit (branch)';
  const prefix = '/github/last-commit';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}/${branch}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}

function githubReleaseDate({
  label = 'github%20release%20date',
  color = 'ff69b4',
  logo = 'Github',
  logoColor = 'ff69b4',
  style = 'popout-square'
}) {
  const { GITHUB_REPO, GITHUB_USER, SHIELDS_URL, TWITTER_USER } = this.options;
  const name = 'GitHub release date';
  const prefix = '/github/release-date';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}

function gitter({ label = 'chat', color = 'ff69b4', logo = 'Github', logoColor = 'ff69b4', style = 'popout-square' }) {
  const { GITHUB_REPO, GITHUB_USER, SHIELDS_URL, TWITTER_USER } = this.options;
  const name = 'Gitter';
  const prefix = '/gitter/room';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}

function githubLanguageCount({
  label = 'languages',
  color = 'ff69b4',
  logo = 'Github',
  logoColor = 'ff69b4',
  style = 'popout-square'
}) {
  const { GITHUB_REPO, GITHUB_USER, SHIELDS_URL, TWITTER_USER } = this.options;
  const name = 'GitHub language count';
  const prefix = '/github/languages/count';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}.svg?label=${label}&color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}

function githubLanguageTop({ color = 'ff69b4', logo = 'Github', logoColor = 'ff69b4', style = 'popout-square' }) {
  const { GITHUB_REPO, GITHUB_USER, SHIELDS_URL, TWITTER_USER } = this.options;
  const name = 'GitHub language top';
  const prefix = '/github/languages/top';
  const reslut = `${SHIELDS_URL}${prefix}/${GITHUB_USER}/${GITHUB_REPO}.svg?color=${color}&logo=${logo}&logoColor=${logoColor}&style=${style}`;
  return `![${name}](${reslut})`;
}

export default {
  githubCommitActivity,
  githubRepoSize,
  githubPackageVersionBranch,
  travisComBranch,
  githubFollowers,
  twitterFollowers,
  githubContributors,
  githubLastCommit,
  githubLastCommitBranch,
  githubReleaseDate,
  gitter,
  githubLanguageCount,
  githubLanguageTop
};
