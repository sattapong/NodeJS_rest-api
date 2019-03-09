// Full Documentation - https://www.turbo360.co/docs
const turbo = require("turbo360")({ site_id: process.env.TURBO_APP_ID });
const vertex = require("vertex360")({ site_id: process.env.TURBO_APP_ID });
const router = vertex.router();
const controllers = require("../controllers");

/*
const Player = require("../models/Player");
const Team = require("../models/Team");
*/

// GET , POST , PUT , DELETE

router.get("/:resource", (req, res) => {
  const resource = req.params.resource; // name on url
  const controller = controllers[resource];
  const filters = req.query;

  if (controller == null) {
    // if controller don't have key
    res.render("error");
    return;
  }

  controller
    .get(filters) //  controller  have key
    .then(data => {
      res.json({
        confirmation: "success",
        data: data
      });
    })
    .catch(err => {
      res.json({
        confirmation: "fail",
        message: err.message
      });
    });
});

// GET

router.get("/:resource/:id", (req, res) => {
  const resource = req.params.resource;
  const id = req.params.id;

  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: "fail",
      message: "Invalid Resource"
    });
    return;
  }

  controller
    .getById(id)
    .then(data => {
      res.json({
        confirmation: "success",
        data: data
      });
    })
    .catch(err => {
      res.json({
        confirmation: "fail",
        message: err.message
      });
    });
});

// POST
 

router.post('/:resource', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})

		return
	}

	controller.post(req.body)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})


// PUT : updating

router.put('/:resource/:id',(req,res) => {

const resource = req.params.resource
const controller = controllers[resource]

if(controller == null)
{
  res.json({
    confirmation: 'fail',
    message: 'Invalid Resource'
  })
  return
}


controller.put(req.params.id , req.body)
.then(data => {
  res.json({
    confirmation: 'success',
    data:data
  })
})

.catch(err => {
  res.json({
    confirmation: 'fail',
    message: err.message
  })
})

});

// Delete 

router.delete('/:resource/:id',(req,res) => {
 const resource = req.params.resource
 const controller = controllers[resource]

 if(controller == null)
 {
   res.json({
     confirmation: 'fail',
     message: 'Invalid Resource'
   })
   return;
 }

 controller.delete(req.params.id)
 .then(data => {
   res.json({
     confirmation: 'success',
     data:data
   })
 })
 .catch(err => {
   res.json({
     confirmation: 'fail',
     message: err.message
   })
 })

});

/*
router.get("/team", (req, res) => {
  Team.find(null)
    .then(data => {
      res.json({
        confirmation: "success",
        data: data
      });
    })
    .catch(err => {
      res.json({
        confirmation: "fail",
        message: err.message
      });
    });
});

router.get("/player", (req, res) => {
  Player.find(null)
    .then(data => {
      res.json({
        confirmation: "success",
        data: data
      });
    })
    .catch(err => {
      res.json({
        confirmation: "fail",
        message: err.message
      });
    });
});

*/

/*  This is a sample API route. */

/* 1
const players = [
  { firstname: "sattapong", lastname: "suesar", age: 28, team: "manUTD" },
  { firstname: "sahasomphob", lastname: "saha", age: 29, team: "Liverpool" },
  { firstname: "wirawut", lastname: "kampan", age: 30, team: "AC Milan" }
];
const teams = [
  { firstname: "AAA" },
  { firstname: "BBB" },
  { firstname: "CCC" }
];

const db = {
  players: players,
  teams: teams
};


router.get("/:resource", (req, res) => {
	const resource = req.params.resource;
  
	const data = db[resource]

	if(data == null){
		res.json({
			confirmation:'fail',
			message:'Invalid request.'
		})
		return
	}

	res.json({
		confirmation:'success',
		data:data
	})
   
    
  });
  


*/

/* 2
router.get("/:resource", (req, res) => {
  const resource = req.params.resource;

  

  if (resource == "players") {
    res.json({
      confirmation: "success",
      data: players
    });
    return;
  }

  if (resource == "teams") {
    res.json({
      confirmation: "success",
      data: teams
    });
    return;
  }
  res.json({
    confirmation: "fail",
    message: "Invalid request."
  });
});

*/

/*
router.get("/players", (req, res) => {
  res.json({
    confirmation: "success",
    data: players
  });
});

router.get("/teams", (req, res) => {
	res.json({
	  confirmation: "success",
	  data: teams
	});
  });




router.get("/:resource", (req, res) => {
  res.json({
    confirmation: "success",
    resource: req.params.resource,
    query: req.query // from the url query string
  });
});

router.get("/:resource/:id", (req, res) => {
  res.json({
    confirmation: "success",
    resource: req.params.resource,
    id: req.params.id,
    query: req.query // from the url query string
  });
});
*/
module.exports = router;
