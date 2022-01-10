module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['chore', 'feat', 'fix', 'test', 'docs', 'ci', 'perf', 'deps', 'style', 'refactor', 'release'],
    ],
    'scope-enum': [2, 'always', []],
  },
}
