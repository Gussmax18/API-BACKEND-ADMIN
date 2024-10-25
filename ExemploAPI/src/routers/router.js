const { Router } = require("express");
const userRoutes = require("./usuariosRotas");

const router = Router();

router.use('/user', userRoutes);

module.exports = router;
