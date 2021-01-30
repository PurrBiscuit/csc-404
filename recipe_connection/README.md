# Recipe Connection

## Overview

From the "Get Programming with Node.js" Book by Jonathan Wexler.

## Development

### Starting a Node.js REPL in the Container

This command will drop you into the app container with the node.js REPL loaded.  The REPL will come preloaded with all the libraries that the app itself using to allow you to experiment with them more easily.

`docker-compose run --rm app yarn start:repl`
