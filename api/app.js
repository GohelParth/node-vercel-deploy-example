module.exports = (req, res) => {
    const { name } = req.query;
    res.send(`name is : ${name}`);
}