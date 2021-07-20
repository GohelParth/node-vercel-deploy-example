module.exports = (req, res) => {
    const { name } = req.query;
    res.json(`name is : ${name}`);
}