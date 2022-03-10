const error = require('./error');

const authProofId = require('./students/authProofId');
const authStudentRA = require('./students/authStudentRA');
const authCreateProofBody = require('./students/authCreateProofBody');
const authUpdateProofBody = require('./students/authUpdateProofBody');

module.exports = {
    students: {
        authProofId,
        authStudentRA,
        authCreateProofBody,
        authUpdateProofBody
    },
    error
}