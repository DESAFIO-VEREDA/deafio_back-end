const { StatusCodes } = require('http-status-codes');

module.exports = async (req, res, next) => {
    try { 
        const proofs = req.proofs
        const recProofs = proofs.filter((proof) => {
            if (proof.evaluationName === 'REC') return true
            return false
        })
        if (recProofs.length === 0) return res.status(StatusCodes.OK).json({ message: 'Approved' })
        const av1Proofs = proofs.filter((proof) => {
            if (proof.evaluationName === 'AV1') return true
            return false
        })
        const av2Proofs = proofs.filter((proof) => {
            if (proof.evaluationName === 'AV2') return true
            return false
        })
        const av3Proofs = proofs.filter((proof) => {
            if (proof.evaluationName === 'AV3') return true
            return false
        })

        const av1Result = (av1Proofs.reduce((accumulator, proof) => {
            accumulator + parseFloat(proof.grade2)
        } , 0) / av1Proofs.length)

        const av2Result = (av2Proofs.reduce((accumulator, proof) => {
            accumulator + parseFloat(proof.grade2)
        } , 0) / av2Proofs.length)

        const av3Result = (av3Proofs.reduce((accumulator, proof) => {
            accumulator + parseFloat(proof.grade2)
        } , 0) / av3Proofs.length)

        const recResult = (recProofs.reduce((accumulator, proof) => {
            accumulator + parseFloat(proof.grade2)
        } , 0) / recProofs.length)

        const finalGrade = ((av1Result + av2Result + av3Result) / 3).toFixed(2);
        const afterRecGrade = ((finalGrade + (2 * recResult)) / 3).toFixed(2);

        if (afterRecGrade > 6) return res.status(StatusCodes).json({ message: 'Approved'})

        return res.status(StatusCodes.OK).json({ message: 'Repproved' })
    } catch (error) {
        next(error)
    }
}