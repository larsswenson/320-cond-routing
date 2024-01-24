Conditional Routing in an Express NodeJS Server

Navigates to random conditional "foo" paths, reading, "Sometimes this" and "And sometimes that", respectively.

Throws a 404 error if path is invalid.

Requires Node.js, npm, and Express.
Make sure to include "type": "module" in the package.json file and to install Express, via "npm install express".
To run server, navigate to "cond_routing" directory via "cd cond_routing" in the terminal.
Run "node index.js" to start server. The console will read, "Server listening on port 3000".

Conditional route uses a random number generator to choose a random path or goes to the next route. Repeated requests generate random responses ("Sometimes..."). If a path other than foo is entered, a 404 error message is thrown.

License: The Unlicense

Author: Lars Swenson

Dependencies: Express 4.18.2
