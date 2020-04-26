const fetch = require('node-fetch');
const queryString = require('query-string');
const md5 = require ('md5');

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest
}, configOptions) => {
  const {
    createNode
  } = actions;
  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;
  // Plugin code goes here...
  // Helper function that processes a Memphis Collection tiles to match Gatsby's node structure
    const processMemphisTiles = memphisThings => {
    const nodeId = createNodeId(`memphis-tile-${memphisThings._id}`);
    const nodeContent = JSON.stringify(memphisThings);
    const nodeData = Object.assign({}, memphisThings, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: 'MemphisTiles',
        content: nodeContent,
        contentDigest: createContentDigest(memphisThings)
      }
    });
    return nodeData;
  };
  // Hack second Helper function that processes mosaic properites
  const processMemphisMosaic = memphisCollections => {
    const nodeId = createNodeId(`memphis-collection-${memphisCollections._id}`);
    const nodeContent = JSON.stringify(memphisCollections);
    const nodeData = Object.assign({}, memphisCollections, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: 'MemphisCollections',
        content: nodeContent,
        contentDigest: createContentDigest(memphisCollections)
      }
    });
    return nodeData;
  };
  const processMemphisUsers = memphisUsers => {
    const nodeId = createNodeId(`memphis-tile-${memphisUsers._id}`);
    const nodeContent = JSON.stringify(memphisUsers);
    const nodeData = Object.assign({}, memphisUsers, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: 'MemphisUsers',
        content: nodeContent,
        contentDigest: createContentDigest(memphisUsers)
      }
    });
    return nodeData;
  };

  const userEmail = configOptions.userEmail;
  const passWord = configOptions.passWord;
  const headers1 = {
    'Content-Type': 'application/json'
        };  
  const body1 = { 
    "email": userEmail,
    "password": passWord
   };
   
   const body = JSON.stringify(body1);
   const apiUrlToken = 'https://dev.memphis.io/api/v1/signin';
   const responseToken = await fetch(apiUrlToken, { method: 'post', body: body, headers: {'Content-Type': 'application/json'},});
   const token = await responseToken.json();

  // console.log(token);
  const bearerToken = 'Bearer ' + token.token;
  // Get all mosaics for a user
  const userId = token._id;
  const userName = token.name;
  const apiBodyOptionsGetUserMosaics = 'userId=' + userId + '&userName=' + userName;
  const options1 = {
    method: 'GET',
    headers: {
      Authorization: bearerToken
    }
  };
  const apiUrl1 = `https://dev.memphis.io/api/v1/mosaics?${apiBodyOptionsGetUserMosaics}`;
  const response = await fetch(apiUrl1, options1);
  const data1 = await response.json();
  // For each mosaic get mosacic properties and tiles
  // console.log(data1);
  for (var mosaickey in data1) {
    value = data1[mosaickey];
    //console.log(value._id);
    const currentConfigOptions = configOptions;
    // Skip funky Collection returning illegal character in json
   // if (value._id != '5b31719b55b53f5865536911') {
      // currentConfigOptions.mosaics = value._id;
      // Get mosaic properites then tile conent
      if (value.public === true) {
        // const mosaicObj = {
        //   "mosaic_id": value._id,
        //   "mosaicTitle": value.title,
        //   "mosaicCreatedOn": value.created
        // };
        const mosaicObj = value;

        // console.log(mosaicObj);
        const nodeDataCollection = processMemphisMosaic(mosaicObj);
        // Use Gatsby's createNode helper to create a node from the node data
        createNode(nodeDataCollection);
        console.log('you created a mosaic node');
        // Set api config per mosaic
        const apiBodyOptions = '_id=' + value._id;
        const options = {
          method: 'GET',
          headers: {
            Authorization: bearerToken
          }
        };
        const apiUrl = `https://dev.memphis.io/api/v1/mosaic?${apiBodyOptions}`;
        const response = await fetch(apiUrl, options);
        const data = await response.json();


        data.things.forEach(observation => {
          // check if tiles has mosaic otherwise omit
          if (observation.belongsTo != null) {
            // const returnedTarget = Object.assign(mosaicObj, observation);
            // console.log(returnedTarget);
            const nodeData = processMemphisTiles(observation);
            // Use Gatsby's createNode helper to create a node from the node data
            createNode(nodeData);
            // console.log('you created a node');
          };
        });
      }
    // }
  };
// get users (this api will be changed soon watch)
const optionsUsers = {
  method: 'GET',
  headers: {
    Authorization: bearerToken
  }
};
// console.log(optionsUsers);
const apiUrlUsers = `https://dev.memphis.io/api/v1/user`;
const responseUsers = await fetch(apiUrlUsers, optionsUsers);
const dataUsers = await responseUsers.json();
console.log(dataUsers.body);

dataUsers.forEach(observation1 => {
  // check if tiles has mosaic otherwise omit
  observation1.md5 = 'https://www.gravatar.com/avatar/' + md5(observation1.email.toLowerCase()) + '.png';
    const nodeData = processMemphisUsers(observation1);
    // Use Gatsby's createNode helper to create a node from the node data
    createNode(nodeData);
    // console.log('you created a node');
});



};