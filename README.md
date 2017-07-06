## react-handlebars-search

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO


### SharePoint Helpers

Available SharePoint Helpers are
* splitDisplayNames (input => "user1;user2;user3") (common example is the author field)
* splitSPUser (input => "email | displayname | .... i:0#.f|membership|username") (common example is the editor field)

They can be use in the template as follows:
```bash
{{splitDisplayNames Author}}
{{splitSPUser EditorOWSUSER 'displayName'}}

```