const express = require('express')

const list = require('./list');
const create = require('./create');
const remove = require('./remove');
const update = require('./update');
const getByRA = require('./getByRA');
const isApproved = require('./isApproved');

const { students: { authStudentRA, authProofId, authCreateProofBody, authUpdateProofBody } } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.get('/', list);

router.get('/:ra', authStudentRA, getByRA);

router.put('/:id', authProofId, authUpdateProofBody, update);

router.post('/', authCreateProofBody, create);

router.delete('/:id', authProofId, remove)

router.get('/isApproved/:ra', authStudentRA, isApproved)

module.exports = router;