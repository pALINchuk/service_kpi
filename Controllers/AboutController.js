const getAbout = async (req, res) => {
    res.status(200).json({msg: 'i am getAbout'})
}

const getAboutTesting = async (req, res) => {
    res.status(200).json({msg: 'i am getAboutTesting'})
}

module.exports = {getAbout, getAboutTesting}