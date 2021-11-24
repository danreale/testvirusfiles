# Testing A Virus Scanner

This is a sample project demonstrating how a QA tester could use docker to create a test virus file and upload it to an api service when they are unable to create a fake virus test file on their local machines due to antivirus immediately quarantining a file.

## How to create a fake virus test file

`docker build -t blogpost .` - creates docker image

`docker run -it --rm --name blogpostcontainer blogpost` - start the container in interactive mode

You are now inside the docker container

`echo 'X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*' > virustext.txt` - creates the test virus file inside the docker container

more examples of an EICAR test file can be found here [EICAR](https://www.eicar.org/?page_id=3950)

`zip -r -X virustest.zip virustext.txt` - creates a zip file with the infected virus test file

`node test.js "/usr/src/app/virustest.zip"` - run your test or script
or
`npm test`

`exit` - exists from docker container, removes the container
