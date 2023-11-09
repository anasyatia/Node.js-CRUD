const responseNotFound = () => {
    res.status(404).json({
        success: false,
        massage: 'Not Found'
    })
}

const responseSuccess = (res, result, massage) => {
    return res.status(200).json({
        success: true,
        massage: massage,
        data: result
    })
}

module.exports = {
    responseNotFound,
    responseSuccess
}