module.exports = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    // 'master',
    'main',
    'next',
    // 'next-major',
    {
      name: 'rc',
      prerelease: true
    },
    {
      name: 'beta',
      prerelease: true
    },
    {
      name: 'alpha',
      prerelease: true
    }
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/npm',
    ['@semantic-release/git', {
      assets: ['package.json', 'package-lock.json'],
      message: `release: v${nextRelease.version}\n\n${nextRelease.notes}`
    }],
    ['@semantic-release/exec', {
      prepareCmd: `npx clean-package`,
      successCmd: `npx clean-package restore`
    }]
  ]
}
