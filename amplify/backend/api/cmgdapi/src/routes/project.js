const router = require("express").Router();
const projectController = require("../controllers").project;

router.get("/:projectId/samples", projectController.listSamples);
router.get("/:assignee", projectController.list);
router.post("/", projectController.addWithSamples);

module.exports = router;
