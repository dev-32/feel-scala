---
name: New Release
about: Building a new release
title: "[Release] 1.x.y"
labels: ['type: release', 'team/process-automation']
assignees: koevskinikola, saig0

---

**Build a new Release**

Release version: 1.x.y
Release date: 

* [ ] inform the maintainers of other teams about the release
  * use the Slack workflow `/new-release` in the channel `#ask-dmn-feel`
* [ ] schedule a release date
* [ ] before building the release, inform the maintainers of other teams about the code freeze
* [ ] build the release using the CI job: 
  * minor release: https://ci.cambpm.camunda.cloud/view/Sideprojects/job/camunda-github-org/job/feel-scala/job/master
  * patch release: use the CI job of the maintenance branch (e.g. https://ci.cambpm.camunda.cloud/view/Sideprojects/job/camunda-github-org/job/feel-scala/job/1.14/)
* [ ] deploy to Maven Central by releasing the staging repository: https://oss.sonatype.org/#stagingRepositories
* [ ] create a release in GitHub for the tag: https://github.com/camunda/feel-scala/releases
  * attach the artifacts from JFrog: https://camunda.jfrog.io/ui/packages/gav:%2F%2Forg.camunda.feel:feel-engine?name=feel-engine&type=packages
  * generate a changelog using GitHub release notes and format it properly 
* [ ] if major/minor release, append the [changelog in the documentation](https://camunda.github.io/feel-scala/docs/changelog/) for the released version and mention the new features
* [ ] if major/minor release, archive the documentation of the previous version
  * use `npm run docusaurus docs:version 1.x` in `/docs` to copy the existing docs under the released version (`1.x` = the released version)
  * update the latest version in `/docs/docusaurus.config.js` under `docs > versions > current > label`
* [ ] update the version that is used by the FEEL REPL script `/feel-repl.sc` under `import $ivy.org.camunda.feel:feel-engine:1.x.y`
* [ ] inform the maintainers of other teams about the successful release :tada:
