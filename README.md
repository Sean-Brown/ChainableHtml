# ChainableHtml
Javascript module for chaining together various HTML elements. Useful for projects which make AJAX calls and need a way to display the received objects; I find using plain text to be unmaintainable and difficult to follow.

To get started:
- clone the repository
- npm install
- typings install

Allow PHPStorm to compile using the tsconfig.json file (or just compile manually with tsc)

Run the Jasmine tests:
- in PHPStorm, enable the NodeJS plugin by navigating to Settings --> Plugins --> Browse Repositories and query for "NodeJS"
- create a NodeJS run configuration to run the Jasmine tests
![image][]

[image]: https://github.com/Sean-Brown/ChainableHtml/blob/master/doc/jasmine.PNG?raw=true
