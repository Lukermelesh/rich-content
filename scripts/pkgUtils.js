const semver = require('semver');
const { get, memoize } = require('lodash');

const LATEST_TAG = 'latest';
const NEXT_TAG = 'next';
const OLD_TAG = 'old';

const isLessThanLatest = (version, latestVersion) => semver.lt(version, latestVersion);
const isPreRelease = version => semver.prerelease(version) !== null;

const getPackageDetails = memoize(pkg => {
  try {
    const npmShowCommand = `npm show ${pkg.name} --registry=${pkg.registry} --json`;
    return JSON.parse(execSync(npmShowCommand, { stdio: ['pipe', 'pipe', 'ignore'] }));
  } catch (error) {
    if (error.stdout && !error.stdout.toString().includes('E404')) {
      console.error(chalk.red(`\nError: ${error}`));
    }
  }
});

function getLatestVersion(pkg) {
  return get(getPackageDetails(pkg), 'dist-tags.latest');
}

function getPublishedVersions(pkg) {
  return get(getPackageDetails(pkg), 'versions', []);
}

function getTag(pkg) {
  const { NPM_TAG } = process.env;
  if (NPM_TAG) {
    return NPM_TAG;
  }
  return calcTag(pkg.version, getLatestVersion(pkg));
}

function calcTag(version, latestVersion) {
  if (isLessThanLatest(version, latestVersion)) {
    return OLD_TAG;
  }

  if (isPreRelease(version)) {
    return NEXT_TAG;
  }

  return LATEST_TAG;
}

const isLatest = tag => tag === LATEST_TAG;

module.exports = {
  getPublishedVersions,
  getTag,
  calcTag,
  isLatest,
  NEXT_TAG,
};
