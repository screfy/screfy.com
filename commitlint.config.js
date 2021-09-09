module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['chore', 'feat', 'fix', 'test', 'docs', 'ci', 'style', 'refactor', 'release']],
    'scope-enum': [2, 'always', ['deps', 'deps-dev']],
  },
}
