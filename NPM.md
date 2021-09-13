# NPM

Node Package Manager

    __Glossary: Dependencies, Packages, Modules__

    - [] check if we have npm installed `npm -v`
    - [] create our own package 
        --> on terminal: npm init -y
    - [] what is the file package.json 
        --> .json is javascript object notation; 
        --> package.json has some information on our project;
        --> after changing something in package.json on terminal: npm update
    - [] use third party modules 
        --> on terminal: npm install cfonts
    - [] what is the dictory node_modules
        --> after installing cfonts this directory showed up; use gitignore because we don't send it to our repository
    - [] what is the file package-lock.json 
        --> it maps all dependencies in our project and we shouldn't change anything in it, also don't delete it
    - [] write scripts to run with npm 
        --> on terminal: npm run test; 
        --> inside package.json go to scripts and change test to start then on terminal: npm start; 
        --> start is the only command that can be used without `run`, any other command will need `npm run `
    - [] installing a global package 
        --> on terminal we will type npm install 'name of the package' -g, in this case we are not installing it only in our project, to know where it is installed use on terminal: npm root -g
    - [] uninstalling packages: 
        --> to uninstall type on terminal: npm uninstall 'name of the package' -g --> for global
        --> to uninstall type on terminal: npm uninstall 'name of the package'    --> specific package inside the project
    - [] change package version:
        --> major.minor.patch: patch means that is solving a bug, minor means the alterations won't break this project and major means the version of the project and it might break depending on what happens;
        --> ^ means that whenever we update it will update patch and minor versions, ~ means that it updates only patch, no symbol means it will mantain the version and * means it will update all versions
        --> `npm outdated` shows versions of packages and dependencies
        --> `npm upgrade` will update all packages
        --> `npm install 'name of package'@latest` will install the latest version
    