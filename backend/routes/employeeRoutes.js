const express =
require("express");

const router =
express.Router();

const auth =
require("../middleware/auth");

const {
 getEmployees,
 addEmployee,
 deleteEmployee,
 updateEmployee
}
=
require(
 "../controllers/employeeController"
);

router.get(
 "/",
 auth,
 getEmployees
);

router.post(
 "/",
 auth,
 addEmployee
);

router.delete(
 "/:id",
 auth,
 deleteEmployee
);

router.put(
 "/:id",
 auth,
 updateEmployee
);

module.exports =
router;