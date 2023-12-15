Features custom node should have:
* male vs female vs unknown
* alive vs dead
* 

Features custom edge should have:
* connect to other edges


Frontend framework:
* Backend data should basically be the node edge structure. Upon changes, this node structure should also change.
* Whales will store NO relationship data? I think that's fine for now. That can be added manually by Chloe maybe
* The only information the node will know about the whale is it will have an ID associated with it.
* Whale will know nothing about node

Backend framework:
* Right now including state setting in my resolver. In the future, should have a frontend (in context) function that gets called
* and calls the resolver which then handles state setting.

Deployment:
* npm run build
* firebase deploy
